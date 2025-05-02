import { BannerSection } from "@/components/home/Banner";
import { BlogsSection } from "@/components/home/blog/BlogSection";
import { IntroSection } from "@/components/home/Designation";
import { ProjectsSection } from "@/components/home/ProjectSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { getAllBlogs } from "@/services/blog";
import { getAllProjects } from "@/services/project";
import React from "react";

const HomePage = async () => {
  const { data } = await getAllProjects();
  const { data: blogs } = await getAllBlogs();
  // console.log("data", data);
  return (
    <div>
      <IntroSection />
      <BannerSection />
      <SkillsSection />
      <ProjectsSection projects={data} />
      <BlogsSection blogs={blogs} />
    </div>
  );
};

export default HomePage;
