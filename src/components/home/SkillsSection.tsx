// components/SkillsSection.tsx
"use client";

import { motion } from "framer-motion";
// import {
//   Typescript,
//   ReactJs,
//   NextJs,
//   TailwindCss,
//   Nodejs,
//   Mongodb,
//   Html5,
//   Css3,
//   Javascript,
//   Python,
//   Git,
//   Firebase,
// } from "@/components/icons"; // You'll need to create or import these icons
import {} from "lucide-react";
import { NextJs } from "../icons";
import TypeScriptIcon from "../icons/typescriptIcon";

import TailwindIcon from "../icons/TailwindIcon";
import NodeJSIcon from "../icons/NodejsIcon";
import ExpressIcon from "../icons/ExpressjsIcon";
import MongoDBIcon from "../icons/MongodbIcon";
import HTMLIcon from "../icons/HTMLIcon";
import CSSIcon from "../icons/CssIcon";
import JavaScriptIcon from "../icons/JavascriptIcon";
import FirebaseIcon from "../icons/FirebaseIcon";
import ReactIcon from "../icons/ReactIcon";
import JWTIcon from "../icons/JwtIcon";
import GitIcon from "../icons/GitIcon";
import PythonIcon from "../icons/Python";
import MongooseIcon from "../icons/MongooseIcon";
const skills = [
  { name: "Next.js", level: 90, icon: <NextJs className="h-6 w-6" /> },
  {
    name: "TypeScript",
    level: 85,
    icon: <TypeScriptIcon className="h-6 w-6" />,
  },
  //className="h-6 w-6"
  { name: "React", level: 88, icon: <ReactIcon /> },
  {
    name: "Tailwind CSS",
    level: 92,
    icon: <TailwindIcon />,
  },
  { name: "Node.js", level: 80, icon: <NodeJSIcon /> },
  {
    name: "Express.js",
    level: 75,
    icon: <ExpressIcon />,
  },
  { name: "MongoDB", level: 78, icon: <MongoDBIcon /> },
  {
    name: "Mongoose",
    level: 72,
    icon: <MongooseIcon />,
  },

  { name: "HTML5", level: 95, icon: <HTMLIcon /> },
  { name: "CSS3", level: 90, icon: <CSSIcon /> },
  {
    name: "JavaScript",
    level: 87,
    icon: <JavaScriptIcon />,
  },
  { name: "Python", level: 65, icon: <PythonIcon /> },
  {
    name: "Postman",
    level: 75,
    icon: <span className="text-lg font-bold">P</span>,
  },
  { name: "Firebase", level: 70, icon: <FirebaseIcon /> },
  {
    name: "JWT",
    level: 68,
    icon: <JWTIcon />,
  },
  { name: "Git", level: 82, icon: <GitIcon /> },
];

export function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-12 md:py-16 lg:py-20 bg-slate-900"
    >
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-12"
        >
          My Skills Set
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-blue-400 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-slate-700 p-2 rounded-md">{skill.icon}</div>
                <h3 className="font-medium text-slate-100">{skill.name}</h3>
              </div>

              {/* Animated Skill Bar */}
              <div className="w-full bg-slate-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-blue-500"
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-xs text-slate-400">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
