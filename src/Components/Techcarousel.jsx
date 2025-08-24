import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinux,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiCplusplus,
  SiShadcnui,
  SiFirebase,
  SiCloudinary,
  SiSocketdotio,
  SiPrisma,
  SiPostgresql,
  SiRender,
  SiMysql,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

// ✅ Expanded Tech stack with correct icons
const techs = [
  { label: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { label: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { label: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { label: "React", icon: <FaReact className="text-cyan-400" /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { label: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { label: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { label: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { label: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { label: "C++", icon: <SiCplusplus className="text-blue-300" /> },
  { label: "Python", icon: <FaPython className="text-yellow-400" /> },
  { label: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { label: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { label: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { label: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
  { label: "ShadCN", icon: <SiShadcnui className="text-violet-400" /> },
  { label: "Acrenity UI", icon: <SiShadcnui className="text-pink-300" /> }, // placeholder
  { label: "GitHub", icon: <FaGithub className="text-white" /> },
  { label: "Linux", icon: <FaLinux className="text-orange-400" /> },
  { label: "Socket.IO", icon: <SiSocketdotio className="text-gray-200" /> },
  { label: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { label: "Prisma", icon: <SiPrisma className="text-white" /> },
  { label: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
  { label: "Vercel", icon: <SiVercel className="text-white" /> },
  { label: "Render", icon: <SiRender className="text-indigo-400" /> },
];

function MarqueeRow({ reverse = false, speed = 50 }) {
  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0f0f0f] to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0f0f0f] to-transparent z-20" />

      <div
        className={`animate-marquee ${reverse ? "reverse" : ""} flex gap-4 w-max py-1`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...techs, ...techs].map((tech, i) => (
          <div
            key={`${tech.label}-${i}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700 bg-[#1a1a1a] text-white text-sm whitespace-nowrap hover:bg-[#2c2c2c] transition-colors duration-300"
          >
            <span className="text-lg">{tech.icon}</span>
            <span className="font-medium">{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechCarousel() {
  return (
    <div className="space-y-2">
      <MarqueeRow speed={100} />
      <MarqueeRow reverse speed={100} />
      <MarqueeRow speed={100} />
    </div>
  );
}
