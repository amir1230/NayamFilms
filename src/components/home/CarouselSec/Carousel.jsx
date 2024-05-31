"use client";
import { Clock4, Star } from "lucide-react";
import Image from "next/image";
import React, { forwardRef } from "react";
const Card = () => {
  return (
    <div className="w-[180px] flex flex-col items-start gap-2">
      <Image
        src="/assets/posters/avenger.svg"
        alt="avenger"
        width={180}
        height={240}
        className="object-cover"
      />
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[15px] font-[500]">Avenger</h1>
        <h2 className="text-[18px] font-[500] text-[#DAA520]">2024</h2>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="px-2 border-[1px] border-[#DAA520] text-white font-[500] text-[13px]">
          HD
        </p>
        <div className="flex items-center font-[500] gap-1">
          <Clock4 className="w-4 h-4 text-[#DAA520]" />
          <p className="text-[14px]">130 mins</p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="/assets/upcoming/star.svg"
            alt="avenger"
            width={14}
            height={14}
            className="object-cover"
          />
          <p className="text-[11px]">7.0</p>
        </div>
      </div>
    </div>
  );
};
const Carousel = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-start gap-10 overflow-auto w-full hide-scrollbar mt-7"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => {
        return (
          <div>
            <Card key={val} />
          </div>
        );
      })}
    </div>
  );
});

export default Carousel;
