import { BITCOIN, BRAND_DARK } from "@/constants";
import Image from "next/image";
import { cubicBezier, easeIn, easeInOut, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DIRECTION = {
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  HALT: "HALT",
};

const Interaction2 = () => {
  const [animationDirection, setAnimationDirection] = useState(DIRECTION.RIGHT);
  const [animationEnd, setAnimationEnd] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (animationDirection === DIRECTION.LEFT)
        setAnimationDirection(DIRECTION.RIGHT);
      if (animationDirection === DIRECTION.RIGHT)
        setAnimationDirection(DIRECTION.LEFT);
    }, 7000);
  }, [animationDirection]);

  return (
    <div className="md:h-[192px] pt-[42px] md:pt-[46px] pb-[18px] md:pb-5 px-4 md:px-5 border border-neutral-800 rounded-[10px] flex flex-col justify-between bg-neutral-900">
      <div className="w-full flex items-center">
        <motion.div
          variants={{
            shrink: { scale: [1, 0.9, 1] },
            grow: {
              scale: [1, 1.1, 1],
            },
          }}
          animate={
            animationDirection === DIRECTION.RIGHT
              ? "shrink"
              : animationDirection === DIRECTION.LEFT
              ? "grow"
              : ""
          }
          transition={
            animationDirection === DIRECTION.RIGHT
              ? {
                  delay: 1.5,
                  duration: 1,
                }
              : animationDirection === DIRECTION.LEFT
              ? {
                  delay: 3.5,
                  duration: 1,
                }
              : {}
          }
          className="px-1.5 py-1.5 bg-[#1d1d1f] rounded-[7px] z-20"
          id="icebox"
        >
          <Image src={BRAND_DARK} alt="branding" width={49.2} height={10} />
        </motion.div>
        <div
          className="h-full flex-1 overflow-hidden relative mx-[-4px] "
          ref={ref}
        >
          <svg
            width="350"
            height="20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0.5 left-0 z-0"
          >
            <line
              stroke-dasharray="12"
              x1="0"
              y1="10"
              x2="350"
              y2="10"
              style={{
                zIndex: -1,
                strokeWidth: "1px",
                stroke: "rgba(193, 199, 208, 0.40)",
                strokeDashoffset: 150,
                animation:
                  animationDirection === DIRECTION.RIGHT
                    ? "lineMoveRight 4s  linear"
                    : animationDirection === DIRECTION.LEFT
                    ? "lineMoveLeft 4s linear"
                    : "",
              }}
            ></line>
          </svg>
          <motion.div
            animate={
              animationDirection === DIRECTION.RIGHT
                ? "leftToRight"
                : animationDirection === DIRECTION.LEFT
                ? "rightToLeft"
                : ""
            }
            transition={{
              duration: 6,
              ease: cubicBezier(0.0, 0.1, 1.0, 0.9),
            }}
            variants={{
              leftToRight: {
                x: [-600, -34, 122, 600],
              },
              rightToLeft: {
                x: [600, 122, -34, -600],
              },
            }}
            className="bg-[#446148] py-[5px] px-2.5 rounded-[20px] text-[10px] font-medium leading-3 text-[#55f567] z-10 absolute top-0 left-0"
            style={{ opacity: animationDirection === DIRECTION.HALT ? 0 : 1 }}
            id="token"
          >
            Degods #2407
          </motion.div>
        </div>
        <motion.div
          variants={{
            shrink: { scale: [1, 0.9, 1] },
            grow: { scale: [1, 1.1, 1] },
          }}
          animate={
            animationDirection === DIRECTION.RIGHT
              ? "grow"
              : animationDirection === DIRECTION.LEFT
              ? "shrink"
              : ""
          }
          transition={
            animationDirection === DIRECTION.RIGHT
              ? {
                  delay: 3.5,
                  duration: 1,
                }
              : animationDirection === DIRECTION.LEFT
              ? {
                  delay: 1,
                  duration: 1,
                }
              : {}
          }
          className="px-1.5 py-1 bg-[#1d1d1f] rounded-[7px] flex z-10"
          id="btc"
        >
          <Image src={BITCOIN} alt="bitcoin" width={12} height={12} />
          <div className="ml-1 text-[#FCFCFC] text-xs font-semibold">
            Bitcoin
          </div>
        </motion.div>
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
