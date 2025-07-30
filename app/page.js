import { AboutMeSection } from "@/Components/Homepage/About";
import { HeroSection } from "@/Components/Homepage/Hero";
import { WorkExperienceSection } from "@/Components/Homepage/Project";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutMeSection/>
      <WorkExperienceSection/>
    </div>
  );
}
