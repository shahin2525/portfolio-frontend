"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { CalendarDays, Clock } from "lucide-react";
import { TBlog } from "@/types/blog";

interface BlogCardProps {
  blog: TBlog;
  customDelay?: number;
}

export function BlogCard({ blog, customDelay = 0 }: BlogCardProps) {
  // Extract first paragraph as excerpt
  const excerpt = blog.content.split("\n")[0].substring(0, 100) + "...";

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
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-600 text-white">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>May 15, 2023</span>{" "}
            {/* You might want to add date to your TBlog type */}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>5 min read</span>{" "}
            {/* You can calculate this from content length */}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
          {blog.title}
        </h3>

        <p className="text-slate-400 mb-4 line-clamp-3">{excerpt}</p>

        <Link
          //{`/blog/${blog._id}`}
          href="#"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
