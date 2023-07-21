import { BITCOIN, BRAND_DARK } from "@/constants";
import Image from "next/image";
import { AnimationSequence, animate } from "framer-motion";
import { useEffect } from "react";

const Interaction2 = () => {
  return (
    <div className="md:h-[192px] pt-[42px] md:pt-[46px] pb-[18px] md:pb-5 px-4 md:px-5 border border-neutral-800 rounded-[10px] flex flex-col justify-between bg-neutral-900">
      <div className="w-full flex items-center">
        <div className="px-1.5 py-1 bg-[#1d1d1f] rounded-[7px]" id="icebox">
          <Image src={BRAND_DARK} alt="branding" width={49.2} height={10} />
        </div>
        <div className="h-full flex-1 overflow-hidden relative ">
          <svg
            width="350"
            height="20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0.5 left-0 z-0"
          >
            <line
              stroke-dasharray="15, 10, 5, 10, 15"
              x1="0"
              y1="10"
              x2="350"
              y2="10"
              style={{
                zIndex: -1,
                strokeWidth: "1px",
                stroke: "rgba(193, 199, 208, 0.40)",
                strokeDashoffset: 82,
                animation: "lineMove 2s linear infinite",
              }}
            ></line>
          </svg>
          <div
            className="bg-[#446148] py-[5px] px-2.5 rounded-[20px] text-[10px] font-medium leading-3 text-[#55f567] inline-block z-10 absolute top-0 left-0"
            id="token"
          >
            Degods #2407
          </div>
        </div>
        <div className="px-1.5 py-1 bg-[#1d1d1f] rounded-[7px] flex" id="btc">
          <Image src={BITCOIN} alt="bitcoin" width={12} height={12} />
          <div className="ml-1 text-[#FCFCFC] text-xs font-semibold">
            Bitcoin
          </div>
        </div>
      </div>
      <div className="mt-[42px] md:mt-0">
        <div className="text-[#FCFCFC] text-sm font-semibold leading-[16.6px]">
          Transactions secured on Bitcoin L1 network
        </div>
        <div className="mt-1 text-zinc-500 text-xs leading-4">
          Escrow funcitonality mangaged by combination of smart contracts and
          multisig wallets
        </div>
      </div>
    </div>
  );
};

export default Interaction2;
