import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="flex items-center justify-between">
        <Link href="/terms&conditions" target="_blank">
          <p className="text-zinc-500 text-xs md:text-sm font-medium leading-4">
            Terms and Conditions
          </p>
        </Link>
      </div>
      <div className="h-px bg-neutral-800 w-screen my-4 md:my-6" />
      <h6 className="text-xs font-medium leading-4 text-zinc-500 mb-4">
        ©2023 Coolwater. All Rights Reserved.
      </h6>
    </div>
  );
};

export default Footer;
