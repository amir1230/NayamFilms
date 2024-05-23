import Image from "next/image";
import React from "react";
const socialIconsData = [
  {
    src: "/assets/footer/social/fb.svg",
  },
  {
    src: "/assets/footer/social/insta.svg",
  },
  {
    src: "/assets/footer/social/x.svg",
  },
  {
    src: "/assets/footer/social/yt.svg",
  },
];
const addressIconData = [
  {
    src: "/assets/footer/social/loc.svg",
    value: "NYC, United States",
  },
  {
    src: "/assets/footer/social/mail.svg",
    value: "Ourstudio@hello.com",
  },
  {
    src: "/assets/footer/social/call.svg",
    value: "+1 386-688-3295",
  },
];
const Footer = () => {
  return (
    <div className="bg-black py-10 px-20 w-full mt-24">
      <div className="flex flex-row items-start justify-between max-md:flex-wrap">
        <div className="flex flex-col">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={330}
            height={69}
            className="object-cover"
          />
          <p className="ms-2">
            Lorem ipsum dolor sit amet,
            <br /> consec tetur adipiscing elit,
            <br /> sed do eiusmod.
          </p>
          <div className="flex flex-row items-center gap-4 mt-6">
            {socialIconsData.map((item) => {
              return (
                <>
                  <Image
                    src={item.src}
                    alt="social-icon"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <Image
            src="/assets/footer/get-in-touch.svg"
            alt="get-in-touch"
            width={155}
            height={44}
            className="object-cover -ms-2"
          />
          <div className="flex flex-col items-start gap-4 mt-4">
            {addressIconData.map((item) => {
              return (
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={item.src}
                    alt="icon"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                  <p>{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="mt-20 text-center text-[14px]">
        Copyright NAYAM FILMS © 2024 - NAYAM FILMS SMC - PVT LTD.
      </p>
    </div>
  );
};

export default Footer;
