import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <Image
        src="/assets/hero/poster.svg"
        alt="hero"
        width={1320}
        height={607}
        className="object-cover w-full"
      />
    </div>
  );
};

export default Hero;
