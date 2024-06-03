"use client";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import Image from "next/image";
import { LoadingComp } from "../../Loading";

const CarouselSection = ({ data }) => {
  const scrollContainerRef = useRef(null);
  const [isDelayedLoading, setIsDelayedLoading] = useState(true);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayedLoading(false);
    }, 2100);

    return () => clearTimeout(timer);
  }, []);
  if (isDelayedLoading) return <LoadingComp />;

  return (
    <div>
      <div className="flex items-center justify-between px-7 max-md:px-0 max-md:flex-wrap max-md:justify-end">
        <Image
          src="/assets/upcoming/upcoming-movies.svg"
          alt="upcoming movies"
          width={500}
          height={200}
          className="object-cover"
        />
        <div className="flex items-center gap-5">
          <Image
            src="/assets/upcoming/prev.svg"
            alt="prev"
            width={60}
            height={60}
            className="object-cover cursor-pointer"
            onClick={scrollLeft}
          />
          <Image
            src="/assets/upcoming/next.svg"
            alt="next"
            width={60}
            height={60}
            className="object-cover cursor-pointer"
            onClick={scrollRight}
          />
        </div>
      </div>
      <Carousel ref={scrollContainerRef} data={data} />
    </div>
  );
};

export default CarouselSection;
