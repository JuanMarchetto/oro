import { AnchorProvider, Idl, Program, setProvider } from '@coral-xyz/anchor';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { IDL, Whirlpool } from "../idl/whirlpool";
import React, { createContext, useContext, ReactNode, FC, useState, useMemo } from 'react';
import { AccountInfo, Connection, PublicKey } from '@solana/web3.js';
import { unpackMint } from '@solana/spl-token';
import { MintWithMetadata } from '../types';
import { deserializeMetadata, JsonMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { RpcAccount, lamports } from '@metaplex-foundation/umi';
import { fromWeb3JsPublicKey } from '@metaplex-foundation/umi-web3js-adapters';
import Whitelist from '../whitelist/metadata';

interface OrcaContextProps {
    connection: Connection,
    orca: Program<Whirlpool>;
    fetchMetadata: (connection: Connection, mint: PublicKey) => Promise<MintWithMetadata>
    fetchMetadataBatch: (connection: Connection, mints: PublicKey[]) => Promise<MintWithMetadata[]>
}

const OrcaContext = createContext<OrcaContextProps | undefined>(undefined)
const metaplexProgram = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s")

function parseAccount(
    account: AccountInfo<Uint8Array>,
    publicKey: PublicKey
  ): RpcAccount {
    return {
      executable: account.executable,
      owner: fromWeb3JsPublicKey(account.owner),
      lamports: lamports(account.lamports),
      rentEpoch: account.rentEpoch ? BigInt(account.rentEpoch) : undefined,
      publicKey: fromWeb3JsPublicKey(publicKey),
      data: new Uint8Array(account.data),
    };
  }

export const OrcaProvider: FC<{ children: ReactNode }> = ({ children }) => {
    // const [program, setProgram] = useState<Program<Idl>>()
    const { connection } = useConnection()
    const wallet = useAnchorWallet()

    const orca = useMemo(() => {
        const provider = new AnchorProvider(connection, wallet!, {})
        setProvider(provider)    
        const programId = new PublicKey("whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc")
        return new Program<Whirlpool>(IDL, programId, provider)
    }, [connection, wallet])

    // Fetch mint account with metadata extension, metaplex metadata account and JSON metadata
    const fetchMetadata = async (connection: Connection, mint: PublicKey): Promise<MintWithMetadata> => {
        const mintMetadataAddress = PublicKey.findProgramAddressSync([
            Buffer.from("metadata"),
            metaplexProgram.toBuffer(),
            mint.toBuffer()
        ], metaplexProgram)[0]

        // Get the metaplex metadata account and the 
        const [mintAccountInfo, metaplexMetadataAccountInfo] = await connection.getMultipleAccountsInfo([
            mint, 
            mintMetadataAddress
        ]);

        const mintAccount = unpackMint(mint, mintAccountInfo, mintAccountInfo?.owner);
        const metadataAccount = metaplexMetadataAccountInfo && deserializeMetadata(parseAccount(metaplexMetadataAccountInfo, mintMetadataAddress))
        const jsonMetadata = metadataAccount?.uri ? (await (await fetch(metadataAccount?.uri)).json()) as JsonMetadata : null

        return { mint: mintAccount, metaplexMetadataAccount: metadataAccount, jsonMetadata } as MintWithMetadata;
    }

    // A faster method of getting >1 metadata account as it handles 4 lookups in a single RPC call
    const fetchMetadataBatch = async (connection: Connection, mints: Array<PublicKey>): Promise<MintWithMetadata[]> => {

        // Create mint/metadata addresses
        let mintAddresses = mints.flatMap(m => [
            m,
            PublicKey.findProgramAddressSync([
                Buffer.from("metadata"),
                metaplexProgram.toBuffer(),
                m.toBuffer()
            ], metaplexProgram)[0]
        ])

        // Fetch mint/metadata accounts
        let mintAccounts = await connection.getMultipleAccountsInfo(mintAddresses)

        // Populate mint/metadata
        let mintWithMetadatas: MintWithMetadata[] = [...Array(mints.length)].map(_ => {
            let [mintAddress, metadataAddress] = mintAddresses.splice(0,2)
            let [mintAccount, metadataAccount] = mintAccounts.splice(0,2)

            return {
                mint: unpackMint(mintAddress, mintAccount, mintAccount?.owner), 
                metaplexMetadataAccount: metadataAccount && deserializeMetadata(parseAccount(metadataAccount, metadataAddress))
            } as MintWithMetadata
        })

        // Populate JSON metadata from whitelist. Otherwise, fallback to metadata account.
        let metadataUris = mintWithMetadatas
            .map((a, i) => {
                if (Whitelist.has(a.mint.address.toBase58())) {
                    return { i, u: `/whitelist/${a.mint.address.toBase58()}.json` }
                } else if(a.metaplexMetadataAccount?.uri) {
                    return { i, u: a.metaplexMetadataAccount.uri }
                } else if(a.metadataExtensionAccount?.uri) {
                    return null
                }
            })
            .filter((a): a is { i: number; u: string } => a !== null && a !== undefined);

        let jsonMetadatas = await Promise.all(metadataUris.map(async (a) => { 
            return {
                i: a.i, 
                m: await (await fetch(a.u)).json() as JsonMetadata
            }
        }));
        
        jsonMetadatas.forEach(a => {
            mintWithMetadatas[a.i].jsonMetadata = a.m
        })

        return mintWithMetadatas
    }

    return (
        <OrcaContext.Provider value={{ orca, fetchMetadata, fetchMetadataBatch, connection }}>
            {children}
        </OrcaContext.Provider>
    );
};

export const useOrca = (): OrcaContextProps => {
    const context = useContext(OrcaContext);
    if (!context) {
        throw new Error('useOrca must be used within a Wallet provider');
    }
    return context;
};