import { AboutMeSection } from "@/Components/homepage/About";
import { HeroSection } from "@/Components/homepage/Hero";
import { ProjectSection } from "@/Components/homepage/Project";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutMeSection/>
      <ProjectSection/>
    </div>
  );
}
