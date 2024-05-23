"use client";
import React, { useState } from "react";
import Image from "next/image";
import { DrawerComp } from "./Drawer";
import { Columns3 } from "lucide-react";
const navData = [
  {
    name: "Home",
    src: "/assets/navbar/home.svg",
  },
  {
    name: "Service",
    src: "/assets/navbar/service.svg",
  },
  {
    name: "Portfolio",
    src: "/assets/navbar/portfolio.svg",
  },
  {
    name: "News & Events",
    src: "/assets/navbar/news.svg",
  },
  {
    name: "Contact",
    src: "/assets/navbar/contact.svg",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <DrawerComp open={open} setOpen={setOpen} title="Main menu">
          <div className="flex flex-col items-start gap-3">
            {navData.map((item, index) => (
              <>
                <Image
                  key={item.name}
                  src={item.src}
                  alt={item.name}
                  width={
                    index === 0
                      ? 79
                      : index === 1
                      ? 118
                      : index === 2
                      ? 118
                      : index === 3
                      ? 171
                      : index === 4
                      ? 118
                      : 100
                  }
                  height={
                    index === 0
                      ? 39
                      : index === 1
                      ? 39
                      : index === 2
                      ? 39
                      : index === 3
                      ? 39
                      : index === 4
                      ? 39
                      : 100
                  }
                  className="object-fill cursor-pointer"
                />
              </>
            ))}
          </div>
        </DrawerComp>
      )}
      <div className="h-[80px] w-full flex flex-row items-center justify-between py-5 px-5">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={256}
          height={62}
          className="object-cover"
        />
        <div className="flex flex-row items-center max-lg:hidden">
          {navData.map((item, index) => (
            <>
              <Image
                key={item.name}
                src={item.src}
                alt={item.name}
                width={
                  index === 0
                    ? 79
                    : index === 1
                    ? 118
                    : index === 2
                    ? 118
                    : index === 3
                    ? 171
                    : index === 4
                    ? 118
                    : 100
                }
                height={
                  index === 0
                    ? 39
                    : index === 1
                    ? 39
                    : index === 2
                    ? 39
                    : index === 3
                    ? 39
                    : index === 4
                    ? 39
                    : 100
                }
                className="object-fill cursor-pointer"
              />
              {index !== navData.length - 1 && (
                <Image
                  key={index}
                  src="/assets/navbar/line.svg"
                  alt="line"
                  width={55}
                  height={35}
                  className="object-cover"
                />
              )}
            </>
          ))}
        </div>
        <div className="lg:hidden">
          <Columns3
            onClick={() => {
              setOpen(true);
            }}
            className="w-8 h-8 text-orange-700 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
