import  AboutMeSection  from "@/components/Homepage/About";
import  HeroSection  from "@/components/Homepage/Hero";
import  WorkExperienceSection  from "@/components/Homepage/Project";
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
