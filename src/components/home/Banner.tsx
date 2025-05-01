// components/BannerSection.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Download } from "lucide-react";

import logo2 from "@/app/assets/profile2 (2).png";

export function BannerSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[400px] md:h-[350px] bg-slate-900 flex items-center"
    >
      <div className="container px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 mx-auto">
        {" "}
        {/* Balanced horizontal padding */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 h-full">
          {" "}
          {/* Centered content */}
          {/* Image - Left Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] mx-4" /* Balanced margin */
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
              <Image
                src={logo2}
                alt="Md. Shahin"
                height={500}
                width={500}
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          {/* Content - Right Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 px-4 md:px-6 lg:px-8 max-w-[600px]" /* Balanced padding */
          >
            <h2 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 md:mb-4">
              {" "}
              {/* Consistent spacing */}
              Current Education
            </h2>

            <div className="space-y-2 md:space-y-3 text-slate-300 font-bold">
              <p className="text-base md:text-lg leading-tight">
                <span className="font-semibold text-blue-400">Studying: </span>
                BSS Honours final year in Political Science
              </p>
              <p className="text-base md:text-lg leading-tight">
                <span className="font-semibold text-blue-400">At: </span>
                Mohammadpur Kendriya College,Nurjahan road, Mohammadpur,
                Dhaka-1207, Dhaka, Bangladesh
              </p>
              <p className="text-base md:text-lg leading-tight">
                <span className="font-semibold text-blue-400">Focus: </span> Web
                Development & AI
              </p>
            </div>

            {/* Download Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-4 md:mt-5" /* Consistent top margin */
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white text-sm md:text-base px-6" /* Balanced padding */
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
