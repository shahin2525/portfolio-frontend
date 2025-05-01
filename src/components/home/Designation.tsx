// components/IntroSection.tsx
"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export function IntroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const roles = ["Fullstack Developer", "Web Designer", "UI/UX Enthusiast"];

  return (
    <motion.section
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          variants={fadeIn}
          className="flex flex-col items-center text-center"
        >
          {/* Designation with typewriter effect */}
          <motion.h2
            variants={fadeIn}
            className="text-lg md:text-xl font-medium text-slate-300 mb-2"
          >
            <Typewriter
              words={roles}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h2>

          {/* Name with emphasis */}
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-slate-50"
          >
            Hi, I&apos;m{" "}
            <span className="text-blue-400 hover:text-blue-300 transition-colors">
              Md. Shahin
            </span>
          </motion.h1>

          {/* Introduction */}
          <motion.p
            variants={fadeIn}
            className="max-w-[600px] text-lg md:text-xl text-slate-400 mx-auto leading-relaxed"
          >
            I build exceptional digital experiences with Next.js, TypeScript,
            and modern web technologies. Focused on performance, accessibility,
            and clean code.
          </motion.p>

          {/* Animated CTA */}
          <motion.div
            variants={fadeIn}
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-500 h-11 px-8 py-2 shadow-lg shadow-blue-500/20">
              View My Work
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
