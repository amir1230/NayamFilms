import Image from "next/image";
import React from "react";

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
    </div>
  );
};

export default Portfolio;
