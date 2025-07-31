import  AboutMeSection  from "@/components/homepage/About";
import  HeroSection  from "@/components/homepage/Hero";
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
