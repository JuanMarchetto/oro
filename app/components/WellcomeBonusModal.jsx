import React from "react";

export const WellcomeBonusModal = ({setIsBuyModalOpen}) => {
  return (
    <div className="w-[500px] h-[510px]">
      <div className="fixed w-screen h-screen left-0 top-0 bg-opacity-50 bg-black"></div>
      <div className="fixed w-[500px] h-[510px] left-0 mx-auto inset-x-0 z-10">
        <div className="relative h-[510px] bg-[#161a29] rounded-xl">
          <div className="absolute w-[275px] h-[377px] top-[63px] left-28">
            <div className="absolute w-[279px] h-[59px] top-[253px] left-0">
              <div className="absolute top-0 left-0 [font-family:'Jost-Medium',Helvetica] font-medium text-white text-[21.6px] text-center tracking-[0] leading-[28.8px] whitespace-nowrap">
                Here’s your Welcome Bonus!
              </div>
              <div className="absolute top-[30px] left-[73px] [font-family:'Jost-Regular',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[28.8px] whitespace-nowrap">
                Scratch to reveal it!
              </div>
            </div>
            <button className="all-[unset] box-border flex w-[198px] h-[45px] items-center justify-center gap-1 px-3.5 py-0 absolute top-[333px] left-[38px] bg-[#00000033] rounded-[40px] overflow-hidden border border-solid border-white">
              <button className="all-[unset] box-border inline-flex items-center justify-center gap-2.5 p-1 relative flex-[0_0_auto]">
                <button
                  className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Jost-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-5 whitespace-nowrap"
                  onClick={() => setIsBuyModalOpen(true)}
                >
                  Skip
                </button>
              </button>
            </button>
            <div className="absolute w-52 h-52 top-0 left-[34px] rounded-xl [background:linear-gradient(180deg,rgb(245,216,154)_0%,rgb(209,177,111)_100%)]">
              <div className="relative w-[231px] h-[197px] top-[7px] left-[9px]">
                <div className="absolute w-[118px] h-[197px] top-0 left-9">
                  <div className="absolute w-[113px] h-[187px] top-[5px] left-[5px]">
                    <div className="absolute w-[113px] h-[140px] top-[21px] left-0">
                      <img className="absolute w-[95px] h-[95px] top-[23px] left-[7px]" alt="Logo" src={"/logo-big.svg"} />
                      <div className="top-[15px] left-[100px] rotate-[3.11deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                        ?
                      </div>
                      <div className="top-[113px] left-20 rotate-[16.78deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                        ?
                      </div>
                      <div className="-top-0.5 left-[53px] rotate-[-62.98deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                        ?
                      </div>
                      <div className="top-[107px] left-2 rotate-[-63.87deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                        ?
                      </div>
                    </div>
                    <div className="top-px left-5 rotate-[23.54deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                      ?
                    </div>
                    <div className="top-40 left-20 rotate-[-33.90deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                      ?
                    </div>
                  </div>
                  <div className="top-0 left-[83px] rotate-[-48.10deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                    ?
                  </div>
                  <div className="top-[170px] left-[42px] rotate-[23.54deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                    ?
                  </div>
                  <div className="top-[168px] left-1 rotate-[-21.71deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                    ?
                  </div>
                </div>
                <div className="top-2.5 left-2.5 rotate-[-13.77deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                  ?
                </div>
                <div className="top-[13px] left-[168px] rotate-[17.01deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                  ?
                </div>
                <div className="top-[88px] left-[165px] rotate-[-13.77deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                  ?
                </div>
                <div className="top-[49px] left-[179px] rotate-[11.30deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                  ?
                </div>
                <div className="top-[129px] left-[156px] rotate-[-13.77deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                  ?
                </div>
                <div className="top-[165px] left-[168px] rotate-[26.41deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                  ?
                </div>
                <div className="top-10 left-7 rotate-[23.54deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                  ?
                </div>
                <div className="top-[170px] left-[5px] rotate-[23.54deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                  ?
                </div>
                <div className="top-[115px] left-[3px] rotate-[-8.44deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                  ?
                </div>
                <div className="top-[77px] left-3 rotate-[-24.85deg] absolute opacity-30 [font-family:'Jost-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                  ?
                </div>
              </div>
            </div>
          </div>
          <img className="absolute w-[76px] h-[29px] top-[459px] left-[22px]" alt="Logo" src={"/logo.svg"} />
        </div>
      </div>
    </div>
  );
};
