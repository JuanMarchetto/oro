import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "ORO",
  description: "Unlocking the future of wealth with tokenized gold on Solana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <html>
      <body className="flex flex-col bg-rainbow bg-fixed bg-cover max-h-screen h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
