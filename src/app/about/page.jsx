import Image from "next/image";
import React from "react";

const aboutCards = [
  {
    src: "/assets/about/experience.svg",
    desc: "With almost a decade in the industry, Nayam Films is a renowned name in media production. We've delivered unmatched creativity and innovation in commercials, corporate films, documentaries, and feature films. Our commitment to excellence has earned us a reputation for reliability as we evolve with the latest technologies. Looking ahead, we're excited to push storytelling boundaries further.",
  },
  {
    src: "/assets/about/vision.svg",
    desc: "At Nayam Films, our vision is clear: to inspire global audiences through storytelling. For nearly a decade, we've pushed creative boundaries, delivering narratives that resonate deeply. Looking ahead, our commitment remains steadfast—to shape the future of storytelling, one captivating project at a time.",
  },
  {
    src: "/assets/about/future.svg",
    desc: "Nayam Films looks ahead to an exciting journey of growth and innovation. Our goals include expanding global presence, forging partnerships with industry leaders, and pushing creative boundaries. We aim to enhance capabilities with cutting-edge tech, fostering a diverse work environment where creativity thrives. With dedication to excellence, we're shaping the future of media production.",
  },
  {
    src: "/assets/about/international.svg",
    desc: "Nayam Films proudly spans Islamabad, Pakistan, Saudi Arabia, and the UAE, resonating with audiences across diverse cultural landscapes. With projects transcending borders, we're a leading force in media production across South Asia and the Middle East. Committed to excellence, we deliver unmatched creativity and innovation globally.",
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
            As CEO of Nayam Films, I lead a team of talented and passionate
            individuals dedicated to filmmaking. Grounded in humility yet driven
            by creativity, we pride ourselves on executing projects with flair
            and within budget. Our core values center around dedication to our
            craft, fostering meaningful relationships, and fostering a
            collaborative environment. Together, we embark on a journey fueled
            by passion and innovation, leaving an indelible mark on the world of
            cinema. Join us on this exhilarating adventure where possibilities
            are endless.
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
        <div className="flex flex-row items-start justify-center flex-wrap gap-20 my-20">
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
