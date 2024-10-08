"use client";

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {

  return (
    // Connect wallet
<div className="bg-[#0a0e1e] overflow-hidden w-[1440px] h-[866px] relative">
        <div className="absolute top-10 left-[319px] [font-family:'Jost',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
          About Us
        </div>
        <img className="absolute w-[76px] h-[29px] top-[39px] left-9" alt="Logo" src="/logo.svg" />
        <div className="absolute top-10 left-[420px] [font-family:'Jost',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
          Features
        </div>
        <div className="absolute top-10 left-[514px] [font-family:'Jost',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
          Contact Us
        </div>
        <div className="absolute w-[170px] h-11 top-[37px] left-[1240px]">

          <WalletMultiButton />

        </div>

      {/*publicKey ? (
        <div className="flex ml-auto">
                      <WalletMultiButton />

        </div>
      ) : <div className="flex ml-auto">not connected</div>*/}
        </div>
  );
};

export default Header;
