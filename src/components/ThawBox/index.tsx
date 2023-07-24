import { CROWN, CURSOR, GLOBE, SMILEY, THAW, TWITTER } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThawBox = () => {
  return (
    <div className="w-full flex justify-center mb-14 md:mb-[83px]">
      <div
        className="w-[354px] md:w-[700px] flex flex-col md:flex-row rounded-[10px] overflow-x-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), #3351F2",
          boxShadow:
            "0 0 0 1px #364ED1 inset, 0 0 0 2px rgba(32, 41, 129, 0.58)",
        }}
      >
        <div className="pt-8 pl-4 w-[320px]">
          <h3 className="text-2xl font-medium leading-8 mb-2">
            Icebox is part of the Thaw Digital family
          </h3>
          <h4 className="text-sm leading-5 text-[#ffffffcc]">
            Innovation + experience from a leader in crypto debt financing.
          </h4>
          <div className="my-[45px] flex justify-between">
            <div>
              <div>
                <div className="relative h-[22.5px] w-[29.2px]">
                  <Image src={CROWN} alt="crown" fill />
                </div>
              </div>
              <div className="ml-2.5 mt-[-10px]">
                <div className="relative h-[27.9px] w-[28.3px]">
                  <Image src={SMILEY} alt="smiley" fill />
                </div>
              </div>
            </div>
            {/* Cursor */}
            <div className="flex">
              <div className="relative h-[27.9px] w-[28.3px]">
                <Image src={CURSOR} alt="cursor" fill />
              </div>
              <div
                className="rounded-[24px] border border-zinc-300 bg-violet-50 py-0.5 px-2.5 flex mt-[20px] ml-[-8px]"
                style={{
                  boxShadow:
                    "0px -2px 2px 0px rgba(18, 20, 22, 0.17) inset, 2px 2px 3px 0px #FFF inset",
                }}
              >
                <h4 className="text-xs font-medium leading-6 text-[#3855f2]">
                  Find us on
                </h4>
                <Link href="" className="flex items-center">
                  <Image
                    src={TWITTER}
                    height={16}
                    width={16}
                    alt="Twitter"
                    className="ml-1"
                  />
                </Link>
                <Link href="" className="flex items-center">
                  <Image
                    src={GLOBE}
                    height={16}
                    width={16}
                    alt="Globe"
                    className="ml-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-tl-[16px] w-[355px] ml-[55px] md:mt-[32px] border-l border-t border-[#ffffff40] pt-1.5 pl-1.5">
            <Image
              src={THAW}
              alt="THAW IMG"
              width={355}
              height={272}
              objectFit="cover"
              style={{
                boxShadow: "0 0 0 6px rgba(255, 255, 255, 0.13)",
                borderTopLeftRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThawBox;
