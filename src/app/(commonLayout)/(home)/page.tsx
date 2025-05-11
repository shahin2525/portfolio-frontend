import About from "@/components/home/about/About";
import { BannerSection } from "@/components/home/Banner";
import { BlogsSection } from "@/components/home/blog/BlogSection";
import { IntroSection } from "@/components/home/Designation";
import { ProjectsSection } from "@/components/home/ProjectSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { getAllBlogs } from "@/services/blog";
import { getAllProjects } from "@/services/project";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "...",
};
const HomePage = async () => {
  const { data } = await getAllProjects();
  const { data: blogs } = await getAllBlogs();
  // console.log("data", data);
  return (
    <div>
      <IntroSection />
      <BannerSection />
      <About />
      <SkillsSection />
      <ProjectsSection projects={data} />
      <BlogsSection blogs={blogs} />
    </div>
  );
};

export default HomePage;
