import { Button } from "antd";
import Image from "next/image";
import React from "react";
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
const Contact = () => {
  return (
    <div className="w-full">
      <section className="bg-[url('/assets/contact/bg.svg')] bg-cover bg-no-repeat w-full h-[50vh] flex flex-row items-center justify-end px-10">
        <Image
          src="/assets/contact/contact-text.svg"
          alt="contact"
          width={400}
          height={150}
          className="object-cover"
        />
      </section>
      <section className="flex flex-row items-start justify-center gap-20 px-20  py-32 flex-wrap max-md:justify-start max-md:px-3 max-md:gap-10">
        <div className="w-[50%] flex flex-col items-start max-md:w-full">
          <Image
            src="/assets/contact/lets-talk-text.svg"
            alt="contact"
            width={500}
            height={500}
            className="object-cover"
          />
          <p className="ps-5 text-[20px] leading-[32px]">
            Questions, comments, or suggestions? Simply fill in the form and
            we’ll be in touch shortly.
          </p>
          <div className="flex flex-col items-start gap-4 ps-5 py-5">
            {addressIconData.map((item) => {
              return (
                <div
                  key={item.value}
                  className="flex flex-row items-center gap-4"
                >
                  <Image
                    src={item.src}
                    alt="icon"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                  <p className="text-[24px]">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[500px] max-md:w-full flex flex-col items-start pt-10 gap-7">
          <div className="flex flex-row items-center gap-5 w-full">
            <input placeholder="First Name" className="w-[50%]" />
            <input placeholder="Last Name" className="w-[50%]" />
          </div>
          <input placeholder="Email*" required className="w-full" />
          <input placeholder="Phone Number*" required className="w-full" />
          <textarea placeholder="Message*" cols={20} className="w-full" />
          <Button className="w-full bg-[linear-gradient(180deg,_#817641_0%,_#F9C409_100%)] rounded-full py-5 flex items-center justify-center text-white font-[700] text-[18px]">
            Send Message
          </Button>
        </div>
      </section>
      <section className="flex flex-col items-center gap-5 mt-10 max-md:px-2">
        <Image
          src="/assets/contact/reach-us-text.svg"
          alt="contact"
          width={500}
          height={150}
          className="object-cover"
        />
        <div className="flex flex-row items-center justify-center gap-32 py-10 flex-wrap ">
          <div className="flex flex-row items-center gap-7">
            <div className="bg-white w-3 h-[110px]"></div>
            <div className="flex flex-col items-start">
              <Image
                src="/assets/contact/general-text.svg"
                alt="contact"
                width={350}
                height={150}
                className="object-cover"
              />
              <p className="text-[32px] max-md:text-[24px]">
                Info@nayamfilms.com
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-7">
            <div className="bg-white w-3 h-[110px]"></div>
            <div className="flex flex-col items-start">
              <Image
                src="/assets/contact/ceo-text.svg"
                alt="contact"
                width={100}
                height={150}
                className="object-cover"
              />
              <p className="text-[32px] max-md:text-[24px]">
                Ghaffar-Khan@nayamfilms.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
