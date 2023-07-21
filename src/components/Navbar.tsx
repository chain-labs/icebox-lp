import { BRAND_DARK } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen px-[18px] py-2 flex justify-center items-center border dark:border-neutral-800 dark:bg-neutral-900">
      <div className="w-full md:w-[1440px] h-[34px] flex items-center">
        <div className="relative h-[15.7px] w-[79.4px] md:h-[25.66px] md:w-[126px]">
          <Image src={BRAND_DARK} alt="brand_logo" fill />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
