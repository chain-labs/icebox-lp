import React from "react";
import CarouselItem, { ICollection } from "./CarouselItem";
import { COLLECTION_TEMP } from "@/constants";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import { ChevronLeft, ChevronRight } from "akar-icons";

const COLLECTIONS = [
  {
    img: `${COLLECTION_TEMP}_1.svg`,
    title: "Ordinal Maxi Bliz (OMB)",
    floor_price: "1.47",
    max_loan: "2.012",
  },
  {
    img: `${COLLECTION_TEMP}_2.svg`,
    title: "Bitcoin Frogs",
    floor_price: "1.47",
    max_loan: "2.012",
  },
  {
    img: `${COLLECTION_TEMP}_3.svg`,
    title: "BTC DeGods",
    floor_price: "0.010346",
    max_loan: "2.012",
  },
];

const Gallery = () => {
  const size = useWindowSize();

  return (
    <div className="mt-[60px] md:mt-[100px] w-screen flex justify-center mb-14 md:mb-[100px]">
      <div className="w-full flex flex-col">
        <div className="mb-4 md:w-[1440px] w-[90%] self-center flex justify-between items-center">
          <h2 className="text-white text-xl font-bold leading-7">
            Top Collections
          </h2>
          <div className="py-1.5 px-2 rounded-1 flex " style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(193, 199, 208, 0.02) 100%), #131314",
            boxShadow: "0px 0px 0px 1px rgba(18, 55, 105, 0.08), 0px 1px 2px 0px rgba(164, 172, 185, 0.10)"
          }}>
            <ChevronLeft size={20} />
            <div className="w-3 h-full" />
            <ChevronRight size={20}  />
          </div>
        </div>
        <div
          className="carousel carousel-center max-w-md md:max-w-full space-x-4"
          style={{
            paddingLeft: `${
              (size.width - (size.width < 768 ? 0.9 * size.width : 1440)) / 2
            }px`,
            paddingRight: `${
              (size.width - (size.width < 768 ? 0.9 * size.width : 1440)) / 2
            }px`,
          }}
        >
          {COLLECTIONS.map((collection) => {
            const { title } = collection;
            return (
              <div className="carousel-item flex" key={title}>
                <CarouselItem {...collection} />
              </div>
            );
          })}
          <div className="carousel-item flex h-full cursor-pointer">
            <div className="rounded-[20px] overflow-hidden h-full ">
              <div className="relative w-[300px] md:w-[435px] h-full">
                <Image
                  src={`${COLLECTION_TEMP}.svg`}
                  alt="collections"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
