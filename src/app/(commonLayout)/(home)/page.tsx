import { BannerSection } from "@/components/home/Banner";
import { IntroSection } from "@/components/home/Designation";
import { SkillsSection } from "@/components/home/SkillsSection";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <IntroSection />
      <BannerSection />
      <SkillsSection />
    </div>
  );
};

export default HomePage;
