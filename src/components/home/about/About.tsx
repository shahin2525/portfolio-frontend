// About component with concise 500-word description
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Code, Cpu, Database, GitMerge } from "lucide-react";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        {/* Title Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Full Stack Developer with a passion for building efficient web
            solutions
          </p>
        </motion.div>

        {/* About Content - Under 500 words */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mb-16"
        >
          <p className="font-medium">
            I&apos;m a Full Stack JavaScript/TypeScript developer specializing
            in React, Next.js, and Node.js ecosystems. Currently completing my
            Political Science degree, I bring unique interdisciplinary
            perspective to building web applications that combine technical
            excellence with user-centric design.
          </p>

          <p>
            My frontend expertise includes architecting responsive applications
            with React hooks, TypeScript, and modern state management. I craft
            polished UIs using Tailwind CSS, shadcn/ui, and Ant Design, ensuring
            optimal performance across devices. On the backend, I build scalable
            Node.js APIs with Express, implementing secure authentication and
            efficient database interactions.
          </p>

          <p>
            What distinguishes my approach is the combination of technical
            skills with analytical thinking from my Political Science
            background. I don&apos;t just write code—I solve real problems.
            Whether optimizing API response times, improving Lighthouse scores,
            or designing more intuitive interfaces, I focus on delivering
            measurable results.
          </p>

          <p>
            I&apos;m particularly interested in the intersection of web
            development and AI, having implemented several projects integrating
            machine learning with web interfaces. My current focus includes
            mastering advanced TypeScript patterns and serverless architectures
            to build more efficient applications.
          </p>

          <p>
            Committed to clean code principles and continuous learning, I thrive
            in collaborative environments where I can both contribute and grow.
            My work demonstrates technical proficiency balanced with practical
            problem-solving—the kind that delivers value to end users and
            businesses alike.
          </p>
        </motion.div>

        {/* Skills Cards (same as before) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Frontend Card */}
          <motion.div whileHover={{ y: -5 }}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50">
                    <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>Frontend</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Ant
                  Design
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Backend Card */}
          <motion.div whileHover={{ y: -5 }}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/50">
                    <Cpu className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Backend</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Node.js, Express, RESTful APIs, Authentication, Middleware
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Database Card */}
          <motion.div whileHover={{ y: -5 }}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/50">
                    <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle>Database</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  PostgreSQL, MongoDB, Prisma, Mongoose, Query Optimization
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tools Card */}
          <motion.div whileHover={{ y: -5 }}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900/50">
                    <GitMerge className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle>Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Git, Docker, CI/CD, Testing, Vercel, Cloud Deployment
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
