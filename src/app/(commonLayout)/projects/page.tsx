import { ProjectCard } from "@/components/home/ProjectCard";
import { getAllProjects } from "@/services/project";
import { TProject } from "@/types/project";
import React from "react";

const AllProjectsPage = async () => {
  const { data } = await getAllProjects();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold sm:text-4xl dark:text-white">
            Our Projects
          </h1>
          <p className="mt-4 text-xl dark:text-gray-300">
            Explore our collection of innovative projects
          </p>
        </div>

        {data?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.map((project: TProject) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjectsPage;
