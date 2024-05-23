import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";

export default function Home() {
  return (
    <>
      <div className="p-4 flex flex-col gap-12">
        <Hero />
        <Portfolio />
      </div>
    </>
  );
}
