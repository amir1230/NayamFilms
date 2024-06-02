"use client";
import ContactUs from "../components/home/ContactUs";
import Hero from "../components/home/Hero.jsx";
import Portfolio from "../components/home/Portfolio.jsx";
import CarouselSection from "../components/home/CarouselSec/index.jsx";
import { useHomeData } from "../actions/queries.js";

export default function Home() {
  const { data, isLoading, isError } = useHomeData();
  console.log("This is loading ", isLoading);
  console.log("This is data ", data);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="p-4 flex flex-col gap-12">
        <Hero data={data && data[0]?.hero} />
        <CarouselSection />
        <Portfolio data={data && data[0]?.postersCollection?.items} />
        <ContactUs />
      </div>
    </>
  );
}
