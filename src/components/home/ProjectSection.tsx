// components/ProjectsSection.tsx
"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { TProject } from "@/types/project";

// import { Project } from "./ProjectCard";
// import { ProjectCard } from "./ProjectCard";

interface ProjectsSectionProps {
  projects: TProject[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const displayedProjects = projects.slice(0, 6); // Show max 6 projects

  return (
    <section className="w-full py-5 md:py-8 lg:py-10 bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project._id}
              project={project}
              customDelay={index * 0.1} // For staggered animation
            />
          ))}
        </div>
      </div>
    </section>
  );
}
