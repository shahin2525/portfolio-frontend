"use client";

import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";
import { TBlog } from "@/types/blog";

interface BlogsSectionProps {
  blogs: TBlog[];
}

export function BlogsSection({ blogs }: BlogsSectionProps) {
  const displayedBlogs = blogs.slice(0, 6); // Show max 6 blogs

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
          Latest Blogs
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedBlogs.map((blog, index) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              customDelay={index * 0.1} // Staggered animation
            />
          ))}
        </div>

        {blogs.length > 6 && (
          <div className="text-center mt-10">
            <button className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              View All Blogs
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
