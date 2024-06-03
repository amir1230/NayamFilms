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
    src: "/assets/service/equip-rental.svg",
    title: "Equipement Rental",
    desc: "At Nayam Films, find Riyadh's widest array of digital cameras, lenses, lighting, grip, and sound equipment, sourced from top global manufacturers. Our experienced crew meticulously maintains gear to the highest standards for reliability. Offering production space and studio facilities, we continually update our inventory to meet your evolving needs seamlessly.",
  },
  {
    src: "/assets/service/post-prod.svg",
    title: "Post Production",
    desc: "At Nayam Films, our post-production team is dedicated to perfecting every detail, from video editing to visual effects, animation, and color grading. With a passion for excellence, we utilize cutting-edge software to deliver top-quality results, ensuring your vision comes to life with a unique touch and precision.",
  },
  {
    src: "/assets/service/pre-prod.svg",
    title: "Pre-Production",
    desc: "Nayam Films excels in pre-production, meticulously planning every detail from concept development to casting and location scouting. With a focus on precision and innovation, our dedicated team ensures every aspect is carefully executed, setting the stage for a seamless production journey and bringing your vision to life with dedication.",
  },
  {
    src: "/assets/service/photography.svg",
    title: "Photography",
    desc: "At Nayam Films, photography is more than freezing time; it's communication through art. Specializing in products, interiors, landscapes, people, events, and food, we capture every moment's essence. Our local photographers ensure excellence in every shot, while our table-top photography elevates visual storytelling with top-tier talent.",
  },
  {
    src: "/assets/service/audio-prod.svg",
    title: "Audio Production",
    desc: "Nayam Films offers top-tier recording and sound design services, specializing in crafting captivating audio for various media. Collaborating with premier voice talent, we provide bespoke music tracks and an extensive royalty-free music library, all while accommodating your budgetary needs.",
  },
  {
    src: "/assets/service/event.svg",
    title: "Event Coverage",
    desc: "At Nayam Films, we excel in event coverage, from brand activations to award ceremonies. With seasoned expertise, we ensure seamless coverage from pre-planning to final delivery. Utilizing the latest techniques and manned by experienced crew, we guarantee professionalism and precision in every aspect of event documentation.",
  },
  {
    src: "/assets/service/casting.svg",
    title: "Casting",
    desc: "At Nayam Films, casting is meticulous, tailored to your project's needs. Our manager sifts through a database of 1500+ talents, updated regularly. Understanding Saudi culture, we prioritize local talent. We also provide extras for background scenes, ensuring every aspect of your production is executed excellently.",
  },

  {
    src: "/assets/service/location.svg",
    title: "Location",
    desc: "At Nayam Films, our extensive locations database showcases the region's diverse beauty, from deserts to ski slopes. With meticulous scouting and permission processes, we offer captivating and cost-effective locations for your shoot. Whatever your vision, we're dedicated to finding the perfect backdrop to bring it to life.",
  },
];
const equipData = [
  {
    name: "Camera Bodies",
    src: "/assets/service/equipments/cover.svg",
    desc: [
      "Red Gemini 5K Digital DSMC 2",
      "ARRI Mini LF",
      "Z CAM E2-S6 ",
      "Sony A7S Mark III",
      "Sony FX3",
      "Sony A7S Mark II",
      "GoPro - Hero 6-7-8-9-10",
      "DJI Mavic Air 2S",
    ],
  },
  {
    name: "Lenses",
    src: "/assets/service/equipments/cover.svg",
    desc: ["Zeiss - Set CP.3 - PL (05 Pcs) 18mm, 25mm, 35mm, 50mm, 85mm"],
  },
  {
    name: "Camera Stabilizers & Grip",
    src: "/assets/service/equipments/cover.svg",
    desc: [
      "DJI - Ronin 2",
      "GFM - Quad Dolly",
      "Panther - Light Weight Dolly",
      "Panther - Foxy Crane Advanced",
    ],
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

const EquipCard = ({ data }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-3 relative w-[375px]">
        <div className="bg-white aspect-square rounded-[16px] flex flex-col items-center justify-center">
          <Image
            src={data.src}
            alt={data.name}
            width={375}
            height={227}
            className="object-cover relative"
          />
        </div>

        <h1 className="text-[#ECCE32] mt-2 text-[20px]">{data.name}</h1>
        <div className="flex flex-col items-center gap-1">
          {data.desc.map((item) => {
            return (
              <>
                <p className="text-center">{item}</p>
              </>
            );
          })}
        </div>
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
          return <CardComp key={item.title} data={item} />;
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
        <div className="my-14 flex items-start gap-9 flex-wrap">
          {equipData.map((item) => {
            return <EquipCard key={item} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
