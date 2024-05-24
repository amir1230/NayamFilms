import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-3 py-16">
      <Image
        src="/assets/about/about.svg"
        alt="portfolio"
        width={400}
        height={150}
        className="object-cover"
      />
      <div className="flex flex-row items-center justify-center flex-wrap gap-20 my-20">
        <Image
          src="/assets/about/ceo.svg"
          alt="portfolio"
          width={450}
          height={150}
          className="object-cover"
        />
        <div className="w-[40%] max-md:w-full max-md:px-5">
          <p className="text-[24px] leading-[36px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <br />
          <br />
          <p className="text-[24px] leading-[36px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
