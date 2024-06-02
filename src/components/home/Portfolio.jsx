import { Button } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const Portfolio = ({ data }) => {
  const [cursor, setCursor] = useState(0);
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
        Consequat quam neque maecenas nisi odio sed auctor etiam morbi.
      </p>
      <div className="flex flex-row items-center justify-center flex-wrap">
        <div className="flex flex-col items-center justify-start gap-3 flex-wrap mt-5 md:h-[800px]">
          {data?.slice(cursor, cursor + 8)?.map((val) => {
            return (
              <Image
                key={val.url}
                src={val.url}
                alt="portfolio"
                width={324}
                height={100}
                className="object-contain w-auto h-auto"
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {data?.length <= cursor + 8 && (
          <Button
            onClick={() => {
              setCursor(cursor >= 8 ? cursor - 8 : cursor);
            }}
            className="bg-[#DAA520] mt-[30px] text-white border-none px-3 py-1 w-[160px] h-[50px] text-[18px] font-[600]"
          >
            See Prev
          </Button>
        )}
        {data?.length > cursor + 8 && (
          <Button
            onClick={() => {
              setCursor(cursor + 8);
            }}
            className="bg-[#DAA520] mt-[30px] text-white border-none px-3 py-1 w-[160px] h-[50px] text-[18px] font-[600]"
          >
            See Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
