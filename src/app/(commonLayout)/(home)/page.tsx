import { BannerSection } from "@/components/home/Banner";
import { IntroSection } from "@/components/home/Designation";
import { ProjectsSection } from "@/components/home/ProjectSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { getAllProjects } from "@/services/project";
import React from "react";

const HomePage = async () => {
  const { data } = await getAllProjects();
  // console.log("data", data);
  return (
    <div>
      <IntroSection />
      <BannerSection />
      <SkillsSection />
      <ProjectsSection projects={data} />
    </div>
  );
};

export default HomePage;
