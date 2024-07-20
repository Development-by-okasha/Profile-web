import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Cards from "@/components/Cards";
import Scrolling from "@/components/Scrolling";
import Globe from "@/components/Globe";
import Typewrite from "@/components/Typewrite";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Cards />
      <Scrolling />
      <Globe />
      <Typewrite />
    </main>
  );
}
