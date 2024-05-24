import ContactUs from "../components/home/ContactUs";
import Hero from "../components/home/Hero.jsx";
import Portfolio from "../components/home/Portfolio.jsx";

export default function Home() {
  return (
    <>
      <div className="p-4 flex flex-col gap-12">
        <Hero />
        <Portfolio />
        <ContactUs />
      </div>
    </>
  );
}
