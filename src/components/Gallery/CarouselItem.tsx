import Image from "next/image";
import React from "react";

export type ICollection = {
  img: string;
  title: string;
  floor_price: string;
  max_loan: string;
};

const CarouselItem = ({ img, title, floor_price, max_loan }: ICollection) => {
  return (
    <div className="rounded-[20px] overflow-hidden cursor-pointer">
      <div className="relative w-[300px] h-[312px] md:w-[435px] md:h-[452px]">
        <Image src={img} alt={title} fill objectFit="cover" />
      </div>
      <div className="p-4 md:px-6 bg-neutral-800">
        <h3 className="text-lg md:text-2xl font-medium md:font-semibold text-[#fcfcfc] leading-6 mb-[19px]">
          {title}
        </h3>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-zinc-500 text-xs md:text-sm font-medium md:font-normal leading-4 md:leading-5">
              Floor Price
            </h3>
            <p className="text-base font-medium leading-6 md:leading-[22px] mt-1">
              {floor_price} BTC
            </p>
          </div>
          <div>
            <h3 className="text-zinc-500 text-xs md:text-sm font-medium md:font-normal leading-4 md:leading-5 text-end">
              Max Loan
            </h3>
            <p className="text-base font-medium leading-6 md:leading-[22px] mt-1 text-end">
              {max_loan} BTC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
