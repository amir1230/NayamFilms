import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const cardsData = [
  {
    src: "/assets/service/film-prod.svg",
    title: "Film Production",
    desc: "At Nayam Films, our diverse team excels in feature film production, ranging from studio interviews to high-end commercial shoots and full-length features. With a dedication to surpassing client expectations, we ensure success regardless of time or budget constraints. Count on us to elevate every aspect of your project.",
  },
  {
    src: "/assets/service/pre-prod.svg",
    title: "Pre-Production",
    desc: "odio enim. Imperdiet mauris iaculis velit mauris. Consequat quam neque maecenas nisi odio sed auctor etiam morbi. ",
  },
  {
    src: "/assets/service/post-prod.svg",
    title: "Post Production",
    desc: "odio enim. Imperdiet mauris iaculis velit mauris. Consequat quam neque maecenas nisi odio sed auctor etiam morbi. ",
  },
  {
    src: "/assets/service/casting.svg",
    title: "Casting",
    desc: "odio enim. Imperdiet mauris iaculis velit mauris. Consequat quam neque maecenas nisi odio sed auctor etiam morbi. ",
  },
  {
    src: "/assets/service/audio-prod.svg",
    title: "Audio Production",
    desc: "odio enim. Imperdiet mauris iaculis velit mauris. Consequat quam neque maecenas nisi odio sed auctor etiam morbi. ",
  },
  {
    src: "/assets/service/location.svg",
    title: "Location",
    desc: "odio enim. Imperdiet mauris iaculis velit mauris. Consequat quam neque maecenas nisi odio sed auctor etiam morbi. ",
  },
  {
    src: "/assets/service/photography.svg",
    title: "Photography",
    desc: "odio enim. Imperdiet mauris iaculis velit mauris. Consequat quam neque maecenas nisi odio sed auctor etiam morbi. ",
  },
  {
    src: "/assets/service/equip-rental.svg",
    title: "Equipement Rental",
    desc: "odio enim. Imperdiet mauris iaculis velit mauris. Consequat quam neque maecenas nisi odio sed auctor etiam morbi. ",
  },
  {
    src: "/assets/service/event.svg",
    title: "Event Coverage",
    desc: "odio enim. Imperdiet mauris iaculis velit mauris. Consequat quam neque maecenas nisi odio sed auctor etiam morbi. ",
  },
];
const CardComp = ({ data }) => {
  const { src, title, desc } = data;
  return (
    <>
      <div className="flex flex-col items-center gap-3 relative w-[375px]">
        <div className="relative flex flex-col items-center justify-center">
          <Image
            src={src}
            alt={title}
            width={375}
            height={227}
            className="object-cover relative"
          />
          <div className="bg-label-bg bg-cover bg-center px-20 py-14 absolute bottom-[-40px] text-black font-[700] text-[24px]">
            {title}
          </div>
        </div>

        <p className="mt-10 text-center">{desc}</p>
      </div>
    </>
  );
};

const EquipCard = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-3 relative w-[375px]">
        <div className="bg-white aspect-square rounded-[16px] flex flex-col items-center justify-center">
          <Image
            src="/assets/service/equipments/cover.svg"
            alt="equipment"
            width={375}
            height={227}
            className="object-cover relative"
          />
        </div>

        <h1 className="text-[#ECCE32] mt-2 text-[20px]">Equipement</h1>
        <p className="text-center">description</p>
      </div>
    </>
  );
};
const Services = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-3 py-16">
      <Image
        src="/assets/service/services.svg"
        alt="portfolio"
        width={340}
        height={100}
        className="object-cover"
      />
      <p className="w-[653px] text-center max-md:w-full">
        Nayam Films, with bases in Islamabad, Riyadh, and Dubai, offers
        comprehensive production and rental services. Our expertise spans the
        creation of feature films, TV commercials, corporate films,
        documentaries, branded entertainment, photo-shoots, event coverage, TV
        shows and animations.
      </p>
      <div className="flex flex-row items-start justify-center flex-wrap gap-20 my-24">
        {cardsData.map((item) => {
          return <CardComp data={item} />;
        })}
      </div>
      <div className="flex flex-col items-center max-md:w-[90%] md:w-[80%]">
        <Image
          src="/assets/service/equipments/heading.svg"
          alt="portfolio"
          width={800}
          height={140}
          className="object-cover"
        />
        <div className="flex flex-row items-center justify-end w-full p-2 border-b-[1px] border-b-white">
          <div className="flex items-center gap-2">
            <p>View All</p>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
        <div className="my-14 flex items-center gap-9 flex-wrap">
          {[0, 1, 2].map((item) => {
            return <EquipCard key={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
