import { BRAND_DARK } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-10 px-4.5 py-2 flex justify-center items-center border dark:border-neutral-800 dark:bg-neutral-900">
      <div className="w-[1440px]">
        <div className="relative h-5 w-[126px]">
          <Image src={BRAND_DARK} alt="brand_logo" fill objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
