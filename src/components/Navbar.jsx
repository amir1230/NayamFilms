"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { DrawerComp } from "./Drawer";
import { Columns3, X } from "lucide-react";
const navData = [
  {
    name: "Home",
    src: "/assets/navbar/home.svg",
    link: "/",
  },
  {
    name: "Service",
    src: "/assets/navbar/service.svg",
    link: "/services",
  },
  {
    name: "Portfolio",
    src: "/assets/navbar/portfolio.svg",
    link: "/about",
  },
  // {
  //   name: "News & Events",
  //   src: "/assets/navbar/news.svg",
  //   link: "/news",
  // },
  {
    name: "Contact",
    src: "/assets/navbar/contact.svg",
    link: "/contact",
  },
];
const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <DrawerComp open={open} setOpen={setOpen} title="Main menu">
          <div className="relative">
            <div className="flex flex-row items-center justify-end">
              <X
                onClick={() => {
                  setOpen(false);
                }}
                className="text-white w-7 h-7"
              />
            </div>
            <div className="flex flex-col items-start gap-3">
              {navData.map((item, index) => (
                <>
                  <Image
                    onClick={() => {
                      router.push(item.link);
                    }}
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
                        : 100
                    }
                    className="object-fill cursor-pointer"
                  />
                </>
              ))}
            </div>
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
                onClick={() => {
                  router.push(item.link);
                }}
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
