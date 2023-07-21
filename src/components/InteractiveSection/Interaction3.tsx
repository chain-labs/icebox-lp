import { AVATAR_TEMP } from "@/constants";
import Image from "next/image";
const AVATARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Interaction3 = () => {
  return (
    <div className="md:h-[192px] md:w-[411px] border border-neutral-800 rounded-[10px] flex flex-col bg-neutral-900 pt-[42px] px-4 pb-[18px] md:px-5 md:pb-5 md:pt-0 md:justify-end">
      <div className="flex items-center md:translate-x-10">
        {AVATARS.map((item) => {
          console.log({ item });

          return (
            <div
              key={`avatar_${item}`}
              className={`h-[43px] w-[43px] md:h-[62px] md:w-[62px] relative md:ml-[-30px] ml-[${
                item !== 1 ? "-12px" : "0"
              }] `}
            >
              <Image
                src={`${AVATAR_TEMP}/avatar_${11 - item}.svg`}
                alt={`avatar_${item}`}
                style={{ zIndex: item }}
                fill
              />
            </div>
          );
        })}
      </div>
      <div className="mt-[42px] md:mt-[38px] ">
        <div className="text-[#FCFCFC] text-sm font-semibold leading-[16.6px]">
          Instant liquidity
        </div>
        <div className="mt-1 text-zinc-500 text-xs leading-4">
          Get up to 2 BTC with just three clicks
        </div>
      </div>
    </div>
  );
};

export default Interaction3;
