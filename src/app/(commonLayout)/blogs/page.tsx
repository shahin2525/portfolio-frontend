import { BlogCard } from "@/components/home/blog/BlogCard";
import { getAllBlogs } from "@/services/blog";
import { TBlog } from "@/types/blog";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs Page",
  description: "...",
};
const AllBlogsPage = async () => {
  const { data } = await getAllBlogs();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold sm:text-4xl dark:text-white">
            My All Blogs
          </h1>
          <p className="mt-4 text-xl dark:text-gray-300">
            Discover our latest articles and insights
          </p>
        </div>

        {/* Category Filter (optional) */}
        <div className="flex justify-center mb-8 gap-2 flex-wrap">
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm">
            All Topics
          </button>
          <button className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm hover:bg-slate-300 dark:hover:bg-slate-600">
            Technology
          </button>
          <button className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm hover:bg-slate-300 dark:hover:bg-slate-600">
            Development
          </button>
          <button className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm hover:bg-slate-300 dark:hover:bg-slate-600">
            Design
          </button>
        </div>

        {data?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No blog posts found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.map((blog: TBlog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}

        {/* Pagination (optional) */}
        {data?.length > 0 && (
          <div className="flex justify-center mt-12">
            <nav className="flex gap-2">
              <button className="px-4 py-2 rounded-md bg-blue-600 text-white">
                1
              </button>
              <button className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600">
                2
              </button>
              <button className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600">
                3
              </button>
              <button className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600">
                Next →
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlogsPage;
