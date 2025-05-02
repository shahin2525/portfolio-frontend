import ProjectDetails from "@/components/home/project/ProjectDetails";

import { getSingleProject } from "@/services/project";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId: productId } = await params;

  const { data: project } = await getSingleProject(productId);

  return (
    <div className="px-10 py-8">
      <ProjectDetails project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
