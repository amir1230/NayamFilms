"use client";
import { Clock4, Star } from "lucide-react";
import Image from "next/image";
import React, { forwardRef } from "react";
const Card = ({ data }) => {
  return (
    <div
      key={data?.duration}
      className="w-[180px] flex flex-col items-start gap-2"
    >
      <Image
        src={data?.poster?.url || "/assets/posters/avenger.svg"}
        alt="avenger"
        width={180}
        height={240}
        className="object-cover"
      />
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[15px] font-[500]">{data?.name}</h1>
        <h2 className="text-[18px] font-[500] text-[#DAA520]">{data?.date}</h2>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="px-2 border-[1px] border-[#DAA520] text-white font-[500] text-[13px]">
          HD
        </p>
        <div className="flex items-center font-[500] gap-1">
          <Clock4 className="w-4 h-4 text-[#DAA520]" />
          <p className="text-[14px]">
            {data?.duration && data.duration + " " + "mins"}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="/assets/upcoming/star.svg"
            alt="avenger"
            width={14}
            height={14}
            className="object-cover"
          />
          <p className="text-[11px]">{data.rating}</p>
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
      {props?.data?.map((val) => {
        return (
          <div key={val}>
            <Card data={val} />
          </div>
        );
      })}
    </div>
  );
});
Carousel.displayName = "Carousel";
export default Carousel;
