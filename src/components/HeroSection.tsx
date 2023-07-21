import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="md:mt-[118px] mt-[106px] w-screen flex justify-center">
      <div className="w-[90%] md:w-[1440px] flex flex-col items-center">
        <div className="md:w-[560px] w-full mb-12 md:mb-[42px]">
          <h1 className="text-center md:text-5xl text-[32px] font-medium leading-10 md:leading-[57.6px] tracking-[-0.32px] md:tracking-[-0.96px]">
            Peer-Peer lending protocol for ordinals
          </h1>
          <p className="text-center text-zinc-500 text-sm md:text-lg mt-2 md:mt-3 leading-5 md:leading-[21.6px] md:tracking-[-0.36px]">
            Instantly lend and borrow bitcoin against high-value ordinals
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
