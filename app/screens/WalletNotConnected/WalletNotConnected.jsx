"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { WellcomeBonusModal } from "../../components/WellcomeBonusModal";
import { Buy } from "../../components/Buy";
import { useState } from "react";
export const WalletNotConnected = () => {
  const { publicKey } = useWallet();
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  return (  
   <div>

        <div className="absolute w-[1376px] h-[460px] top-[154px] left-8 bg-[url(/rectangle-11.svg)] bg-[100%_100%]">
        {!publicKey ? ( <>
          <div className="absolute w-[360px] h-[260px] top-[141px] left-[508px]">
            <div className="absolute w-[86px] h-[86px] top-0 left-[137px]">
              <div className="relative h-[86px] rounded-[45.6px]">
                <div className="absolute w-[86px] h-[86px] top-0 left-0 bg-white rounded-[45.6px] rotate-180 opacity-10" />
                <img
                  className="absolute w-[50px] h-[50px] top-[18px] left-[18px]"
                  alt="Lock locked"
                  src="/lock-locked.svg"
                />
              </div>
            </div>
            <div className="flex flex-col w-[360px] items-center justify-center gap-[4.8px] absolute top-[110px] left-0">
              <p className="relative self-stretch mt-[-1.20px] [font-family:'Sharp_Grotesk-Medium20',Helvetica] font-medium text-[color:var(--component-colors-empty-state-empty-state-fg-primary)] text-xl text-center tracking-[0] leading-[28.8px]">
                Connect Wallet to Get In
              </p>
              <p className="relative self-stretch [font-family:'Jost',Helvetica] font-normal text-[color:var(--component-colors-empty-state-empty-state-fg-secondary)] text-base text-center tracking-[0] leading-6">
                To access this dashboard connect your wallet and verify your status.
              </p>
            </div>
            <div className="absolute w-[170px] h-11 top-[216px] left-24">
              <div className="relative w-[168px] h-11 bg-[url(/rectangle-6-1.svg)] bg-[100%_100%]">
                <div className="absolute top-[11px] left-[29px] [font-family:'Jost',Helvetica] font-semibold text-[#060606] text-base tracking-[0] leading-[normal]">
                  Connect Wallet
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[603px] h-11 top-[38px] left-[386px]">
            <div className="flex flex-col w-[194.7px] h-11 items-start gap-[17.6px] absolute top-0 left-0">
              <button className="all-[unset] box-border flex w-[194.7px] h-11 items-center justify-center gap-[2.2px] pr-[var(--primitives-dimensions-dimensions-4)] pl-[var(--primitives-dimensions-dimensions-4)] py-0 relative bg-[#ffffff1a] rounded-xl overflow-hidden">
                <div className="inline-flex items-center justify-center gap-[11px] p-[4.4px] relative flex-[0_0_auto]">
                  <div className="all-[unset] box-border relative w-fit mt-[-1.10px] [font-family:'Jost',Helvetica] font-medium text-white text-[13.2px] tracking-[0] leading-[17.6px] whitespace-nowrap">
                    Connect Wallet
                  </div>
                </div>
              </button>
            </div>
            <div className="flex flex-col w-[194.7px] h-11 items-start gap-[17.6px] absolute top-0 left-[204px]">
              <div className="flex w-[196.9px] h-[46.2px] items-center justify-center gap-[2.2px] pr-[var(--primitives-dimensions-dimensions-4)] pl-[var(--primitives-dimensions-dimensions-4)] py-0 relative mt-[-1.10px] mb-[-1.10px] ml-[-1.10px] mr-[-1.10px] rounded-xl overflow-hidden border-[1.1px] border-solid border-[#ffffff80]">
                <div className="inline-flex items-center justify-center gap-[11px] p-[4.4px] relative flex-[0_0_auto]">
                  <button className="all-[unset] box-border relative w-fit mt-[-1.10px] [font-family:'Jost',Helvetica] font-medium text-white text-[13.2px] tracking-[0] leading-[17.6px] whitespace-nowrap">
                    Verify Wallet
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[194.7px] h-11 items-start gap-[17.6px] absolute top-0 left-[408px]">
              <div className="flex w-[196.9px] h-[46.2px] items-center justify-center gap-[2.2px] pr-[var(--primitives-dimensions-dimensions-4)] pl-[var(--primitives-dimensions-dimensions-4)] py-0 relative mt-[-1.10px] mb-[-1.10px] ml-[-1.10px] mr-[-1.10px] rounded-xl overflow-hidden border-[1.1px] border-solid border-[#ffffff80]">
                <div className="inline-flex items-center justify-center gap-[11px] p-[4.4px] relative flex-[0_0_auto]">
                  <button className="all-[unset] box-border relative w-fit mt-[-1.10px] [font-family:'Jost',Helvetica] font-medium text-white text-[13.2px] tracking-[0] leading-[17.6px] whitespace-nowrap">
                    Complete KYC
                  </button>
                </div>
              </div>
            </div>
          </div>
          </>) : ( <>
            {!isBuyModalOpen &&<WellcomeBonusModal setIsBuyModalOpen={setIsBuyModalOpen} />}
            {isBuyModalOpen && <Buy/>}
        </>)}
        </div>
        <div className="absolute w-[493px] h-[72px] top-[638px] left-[474px]">
          <div className="absolute w-[241px] h-[72px] top-0 left-0">
            <img
              className="absolute w-32 h-11 top-3.5 left-0 object-cover"
              alt="Screenshot"
              src="/screenshot-2024-06-10-at-2-37-1.png"
            />
            <img
              className="absolute w-[123px] h-[72px] top-0 left-[118px]"
              alt="Libfc logo CMYK"
              src="/libfc-logo-cmyk-220106-jpg-1.svg"
            />
          </div>
          <img
            className="absolute w-[94px] h-[17px] top-7 left-[249px]"
            alt="Brink s logo"
            src="/brink-s-logo-1.svg"
          />
          <img
            className="absolute w-[120px] h-[30px] top-[21px] left-[374px]"
            alt="Clip path group"
            src="/clip-path-group.png"
          />
        </div>
        <div className="absolute w-[1480px] h-[83px] top-[783px] left-[-33px]">
          <div className="relative w-[1478px] h-[83px] bg-white">
            <div className="absolute w-[409px] h-[27px] top-7 left-[66px]">
              <div className="absolute w-[70px] h-[27px] top-0 left-0">
                <div className="absolute w-[26px] h-[27px] top-0 left-0">
                  <div className="h-[27px]">
                    <div className="relative w-[26px] h-[27px]">
                      <img className="absolute w-3.5 h-3.5 top-1.5 left-1.5" alt="Subtract" src="/subtract.svg" />
                      <div className="absolute w-[26px] h-[27px] top-0 left-0 bg-[url(/subtract-1.svg)] bg-[100%_100%]" />
                    </div>
                  </div>
                </div>
                <div className="absolute w-[38px] top-px left-[30px] [font-family:'Jost',Helvetica] font-bold text-[#0a0e1e] text-[16.2px] tracking-[0] leading-[normal]">
                  ORO
                </div>
              </div>
              <p className="absolute w-[324px] top-[5px] left-[83px] opacity-50 [font-family:'Jost',Helvetica] font-normal text-black text-[16.2px] tracking-[-0.49px] leading-[16.5px] whitespace-nowrap">
                Copyright © 2024 ORO Gold. All rights reserved.
              </p>
            </div>
            <div className="w-[134px] top-[33px] left-[1307px] text-[16.2px] tracking-[-0.49px] leading-[16.5px] absolute [font-family:'Jost',Helvetica] font-normal text-black whitespace-nowrap">
              usman@orogold.app
            </div>
          </div>
        </div>

    </div>
  );
};
