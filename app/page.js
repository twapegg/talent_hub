import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import AboutUs from "@/components/AboutUs";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <Hero />
      <Offer/>
      <AboutUs/>
    </main>
  );
}
