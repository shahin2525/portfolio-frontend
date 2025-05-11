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
      className="w-full py-8 md:pt-10 lg:pt-12 md:pb-4 lg:pb-6"
    >
      <div className="container px-4 md:px-6 mx-auto">
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
            Full Stack Developer passionate about building scalable and smart
            web applications
          </p>
        </motion.div>

        {/* Short About Description */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mb-16"
        >
          <p className="font-medium">
            Hi, I&apos;m <strong>Md Shahin</strong> — a Full Stack
            JavaScript/TypeScript Developer with a passion for clean code,
            performance, and real-world problem solving. Here’s a quick
            overview:
          </p>
          <ul>
            <li>
              💻 Specialized in <strong>React, Next.js, Node.js</strong> and
              TypeScript
            </li>
            <li>
              🛠 Skilled in building{" "}
              <strong>role-based dashboards, secure authentication</strong>, and
              dynamic UIs
            </li>
            <li>
              📊 Experienced with <strong>MongoDB, PostgreSQL, Prisma</strong>,
              and REST APIs
            </li>
            <li>
              🚀 Deployed multiple projects using{" "}
              <strong>Vercel, CI/CD, Docker</strong>
            </li>
            <li>
              🧠 Exploring <strong>AI-integrated interfaces</strong> and{" "}
              <strong>serverless architectures</strong>
            </li>
            <li>
              🎓 Final year Political Science student bringing analytical
              thinking to development
            </li>
          </ul>
          <p>
            I love collaborating, learning, and turning complex ideas into
            elegant, working products.
          </p>
        </motion.div>

        {/* Skills Cards */}
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
                  Node.js, Express, RESTful APIs, Middleware, Authentication
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
                  MongoDB, PostgreSQL, Prisma, Mongoose, Query Optimization
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
                  Git, Docker, CI/CD, Vercel, Cloud Deployment, Testing
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
