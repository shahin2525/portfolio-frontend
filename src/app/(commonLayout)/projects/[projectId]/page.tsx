import ProjectDetails from "@/components/home/projects/ProjectDetails";

import { getSingleProject } from "@/services/project";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId: productId } = await params;

  const { data: project } = await getSingleProject(productId);
  console.log("data1", project);

  return (
    <div>
      <ProjectDetails project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
