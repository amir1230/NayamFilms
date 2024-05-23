import Image from "next/image";
import React from "react";
const col1Portfolio = [
  {
    src: "/assets/portfolio/col-1-1.svg",
  },
  {
    src: "/assets/portfolio/col-1-2.svg",
  },
  {
    src: "/assets/portfolio/col-1-3.svg",
  },
];
const col2Portfolio = [
  {
    src: "/assets/portfolio/col-2-1.svg",
  },
  {
    src: "/assets/portfolio/col-2-2.svg",
  },
];
const col3Portfolio = [
  {
    src: "/assets/portfolio/col-3-1.svg",
  },
  {
    src: "/assets/portfolio/col-3-2.svg",
  },
  {
    src: "/assets/portfolio/col-3-3.svg",
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Image
        src="/assets/navbar/portfolio.svg"
        alt="portfolio"
        width={340}
        height={100}
        className="object-cover"
      />
      <p className="w-[653px] text-center max-md:w-full">
        nayam ipsum dolor sit amet consectetur. Interdum cursus ut morbi
        malesuadlorem odio enim. Imperdiet mauris iaculis velit mauris.
        Consequat quam neque maecenas nisi odio sed auctor etiam morbi.{" "}
      </p>

      <div className="flex flex-row items-center justify-center gap-3 max-md:flex-wrap mt-5">
        <div className="flex flex-col items-center gap-3 max-md:w-full">
          {col1Portfolio.map((item) => {
            return (
              <Image
                key={item.src}
                src={item.src}
                alt="portfolio"
                width={324}
                height={100}
                className="object-cover max-md:w-full"
              />
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-3 max-md:w-full">
          {col2Portfolio.map((item) => {
            return (
              <Image
                key={item.src}
                src={item.src}
                alt="portfolio"
                width={350}
                height={200}
                className="object-cover max-md:w-full"
              />
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-3 max-md:w-full">
          {col3Portfolio.map((item) => {
            return (
              <Image
                key={item.src}
                src={item.src}
                alt="portfolio"
                width={260}
                height={100}
                className="object-cover max-md:w-full"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
