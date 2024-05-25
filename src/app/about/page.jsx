import Image from "next/image";
import React from "react";

const aboutCards = [
  {
    src: "/assets/about/experience.svg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    src: "/assets/about/vision.svg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    src: "/assets/about/future.svg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    src: "/assets/about/international.svg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];
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
      <div className="flex flex-col items-center my-20">
        <Image
          src="/assets/about/head1.svg"
          alt="heading1"
          width={1200}
          height={120}
          className="object-cover"
        />
        <Image
          src="/assets/about/head2.svg"
          alt="heading2"
          width={1240}
          height={120}
          className="object-cover"
        />
        <div className="flex flex-row items-center justify-center flex-wrap gap-20 my-20">
          {aboutCards.map((card, index) => {
            return (
              <div
                className="flex flex-row items-center justify-center w-[40%] max-md:w-full max-md:px-5 max-md:flex-wrap"
                key={card.src}
              >
                <div className="max-w-[450px] flex flex-col items-start">
                  <Image
                    src={card.src}
                    alt="portfolio"
                    width={
                      index === 0
                        ? 270
                        : index === 1
                        ? 130
                        : index === 2
                        ? 150
                        : 280
                    }
                    height={60}
                    className="object-cover"
                  />
                  <p className="text-[24px] leading-[36px]">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
