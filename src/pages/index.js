import Image from "next/image";
import Hero from '@/images/Hero.svg'
import HeroSection from '@/components/hero/HeroSection'
import Header from "@/components/header/Header";
import Facts from "@/components/facts/Facts";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen">
        <Header />
        <HeroSection />
        <Image className="absolute -z-10" fill objectFit="cover" src={Hero} />
      </div>
      <Facts />
      <Services />
    </main>
  );
}
