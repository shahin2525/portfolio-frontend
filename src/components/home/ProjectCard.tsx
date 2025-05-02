"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { TProject } from "@/types/project";

interface ProjectCardProps {
  project: TProject;
  customDelay?: number;
}

export function ProjectCard({ project, customDelay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: customDelay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300 shadow-lg"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {" "}
        {/* Changed to aspect-video */}
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full border-slate-600 hover:border-blue-400 hover:text-blue-400"
        >
          <Link
            href={`/project/${project._id}`}
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            View Details
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
