"use client";

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { Suspense, useEffect, useMemo, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isClient, setIsClient] = useState(false);
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Suspense>
      <ConnectionProvider endpoint={process.env.NEXT_PUBLIC_SOLANA_RPC_URL ?? clusterApiUrl("devnet")}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            {children}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </Suspense>
  );
}
