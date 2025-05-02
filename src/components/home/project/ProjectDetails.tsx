// "use client";

// import { TProject } from "@/types/project";
// import Image from "next/image";

// const ProjectDetails = ({ listing }: { listing: TProject }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-white p-4 rounded-md my-5 shadow-sm bg-[#F5EEDC]">
//       <div>
//         <Image
//           src={listing?.multipleImages[0] || ""}
//           alt="listing image"
//           width={500}
//           height={500}
//           className="rounded-md w-full object-cover h-80"
//         />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mx-auto place-items-center">
//           {listing?.multipleImages
//             ?.slice(0, 3)
//             .map((image: string, idx: number) => (
//               <Image
//                 key={idx}
//                 src={image}
//                 alt="multiple image"
//                 width={500}
//                 height={500}
//                 className="rounded-md w-full object-cover h-40"
//               />
//             ))}
//         </div>
//       </div>
//       <div className="bg-white rounded-md p-4 ">
//         <h2 className="font-bold text-xl mb-4">
//           Location : {listing?.location}
//         </h2>
//         <p className="font-bold text-justify text-gray-500  text-sm">
//           Description : {listing?.description}
//         </p>
//         <div className="flex items-center justify-between my-5 text-gray-500 text-sm font-bold">
//           <p className=" py-1">
//             Number of Bedrooms : {listing?.numberOfBedrooms}
//           </p>
//         </div>
//         <hr />
//         <p className="my-2 font-bold">
//           Price :<span className="font-semibold"> ${listing?.rentAmount}</span>
//         </p>
//         <hr />
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
"use client";

import { TProject } from "@/types/project";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectDetails = ({ project }: { project: TProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 rounded-lg border bg-card text-card-foreground shadow-lg"
    >
      {/* Image Gallery Section */}
      <div className="space-y-4">
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="relative aspect-video overflow-hidden rounded-lg border"
        >
          <Image
            src={project?.images[0] || "/placeholder.jpg"}
            alt={project?.title || "project-de"}
            height={700}
            width={700}
            className="object-cover w-full"
            priority
          />
        </motion.div>

        {project?.images?.length > 1 && (
          <div className="grid grid-cols-3 gap-3">
            {project.images.slice(0, 3).map((image, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square overflow-hidden rounded-lg border"
              >
                <Image
                  src={image}
                  alt={`${project.title} preview ${idx + 1}`}
                  width={800} // Fixed dimensions
                  height={450}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Project Details Section */}
      <div className="space-y-6">
        <div>
          <motion.h1
            className="text-3xl font-bold tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project?.title}
          </motion.h1>

          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="capitalize">
              {project?.my_role}
            </Badge>
            {project?.status && (
              <Badge variant="secondary" className="capitalize">
                {project.status}
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Description</h3>
            <p className="text-muted-foreground">{project?.description}</p>
            {project?.shortDescription && (
              <p className="text-sm text-muted-foreground mt-2">
                {project?.shortDescription}
              </p>
            )}
          </div>

          {project?.features && project?.features?.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {project?.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="font-semibold text-lg">Technologies</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project?.technologies?.map((tech, idx) => (
                <Badge key={idx} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          {project?.liveLink && (
            <Button asChild>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}

          {project?.githubRepo && (
            <Button variant="outline" asChild>
              <a
                href={project?.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>

        <div className="text-sm text-muted-foreground">
          {project?.createdAt && (
            <p>Created: {new Date(project?.createdAt).toLocaleDateString()}</p>
          )}
          {project?.updatedAt && (
            <p>Updated: {new Date(project?.updatedAt).toLocaleDateString()}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
