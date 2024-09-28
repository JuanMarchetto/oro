"use client";

import Image from "next/image";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from "@solana/wallet-adapter-react";
import Link from "next/link";

const Header = () => {
  const { publicKey } = useWallet();


  return (
    // Connect wallet
    <div className="absolute w-full mx-0 p-5 flex flex-between">
      <div className="flex mr-auto">
        <Link className="flex" href="/">
          <Image
            className="w-auto h-10 mr-auto"
            src="/orca-lite-logo-horizontal.svg"
            alt="Orca Lite"
            width={0}
            height={0}
          />
        </Link>
      </div>
      {publicKey ? (
        <div className="flex ml-auto">
                      <WalletMultiButton />

        </div>
      ) : <div className="flex ml-auto">not connected</div>}
    </div>
  );
};

export default Header;
