import { DEGODS_AVATAR, LOADER } from "@/constants";
import Image from "next/image";

const Interaction1 = () => {
  return (
    <div className="order-2 md:order-1 w-full md:w-[273px] md:h-full border border-neutral-800 rounded-[10px] flex flex-col items-center px-4 pb-[18px] md:p-5 md:justify-end bg-neutral-900">
      <div className="mt-[42px] md:mt-0 rounded-[10px] flex items-center p-2.5 animate-throb mb-[42px] md:mb-[105px]">
        <Image
          src={DEGODS_AVATAR}
          alt="DEGODS_AVATAR"
          height={32}
          width={32}
          className="rounded-lg mr-2"
        />
        <div>
          <h3 className="text-zinc-500 text-[10px] font-medium leading-3">
            Lending against
          </h3>
          <h2 className="text-[#FCFCFC] text-sm font-medium">Degods #2048</h2>
        </div>
        <div className="ml-[46px]">
          <div className="animate-spin">
            <Image src={LOADER} alt="loader" width={24} height={24} />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[#FCFCFC] text-sm font-semibold leading-[16.8px]">
          Grow your BTC stack
        </h3>
        <p className="text-zinc-500 text-xs leading-4 mt-1">
          Lend against ordinal collections or inscriptions and earn BTC yield
        </p>
      </div>
    </div>
  );
};

export default Interaction1;
