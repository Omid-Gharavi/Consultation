import Image from "next/image";
import Hero from '@/images/Hero.svg'
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen">
        <Header />
        <Image className="absolute -z-10" fill objectFit="cover" src={Hero} />
      </div>
      sdffffffffffffffffffffffff
    </main>
  );
}
