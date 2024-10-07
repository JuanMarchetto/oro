import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Button } from "./components/Button";
import { PlusPlusDefault } from "./components/PlusPlusDefault";
import Header from "./components/Header";


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
    <html><Providers>
      <body className="flex flex-col bg-rainbow bg-fixed bg-cover max-h-screen h-screen">
      <div className="bg-[#0a0e1e] flex flex-row justify-center w-full h-screen">
        <Header />
        <div className="absolute w-[65px] h-[318px] top-[1726px] left-[1407px] bg-[#0a0e1e]" />
        <div className="top-[2224px] left-[1260px] text-lg tracking-[-0.54px] leading-[18.3px] absolute [font-family:'Jost',Helvetica] font-normal text-black whitespace-nowrap">
          usman@orogold.app
        </div>


        {children}
        </div>

      </body></Providers>
    </html>
  );
}
