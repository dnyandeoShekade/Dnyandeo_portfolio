import  AboutMeSection  from "@/components/homepage/About";
import HeroSection from "@/components/homepage/HeroSection";
import  WorkExperienceSection  from "@/components/homepage/Project";
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
