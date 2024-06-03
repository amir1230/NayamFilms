"use client";
import ContactUs from "../components/home/ContactUs";
import Hero from "../components/home/Hero.jsx";
import Portfolio from "../components/home/Portfolio.jsx";
import CarouselSection from "../components/home/CarouselSec/index.jsx";
import { useCarouselData, useHomeData } from "../actions/queries.js";
import { LoadingComp } from "../components/Loading";
export default function Home() {
  const {
    data: homeData,
    isLoading: homeLoading,
    isError: homeError,
  } = useHomeData();
  const {
    data: carouselData,
    isLoading: carouselLoading,
    isError: carouselError,
  } = useCarouselData();

  if (homeLoading || carouselLoading) return <LoadingComp />;
  return (
    <>
      <div className="p-4 flex flex-col gap-12">
        <Hero data={homeData && homeData[0]?.hero} />
        <CarouselSection data={carouselData} />
        <Portfolio data={homeData && homeData[0]?.postersCollection?.items} />
        <ContactUs />
      </div>
    </>
  );
}
