"use client";

import React from "react";
import { motion } from "framer-motion";
import { Experiences } from "@/constants/experiences";

const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  index,
  technologies,
  link,
}: {
  title: string;
  company: string;
  duration: string;
  description: string[];
  index: number;
  technologies: string[];
  link?: string; // ✅ Make link optional
}) => {
  return (
    <motion.div
      className="bg-[#0F1020] rounded-xl p-6 border border-[#2A0E61]/40 cursor-pointer"
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 0px 15px rgba(42, 14, 97, 0.6)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-[#F6DFDB]">{title}</h3>
      <p className="text-sm text-[#AAA6C3]">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-300 transition"
          >
            {company}
          </a>
        ) : (
          company
        )}
      </p>
      <p className="text-xs text-[#635f7d] mb-3">{duration}</p>

      <p className="text-sm text-[#E5E5E5] leading-7 mb-4">
        {description.join(" ")}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-[#2A0E61] text-white px-3 py-1 rounded-full border border-[#6942ef] hover:bg-[#3c1b88] transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-8 relative py-20 px-6 text-white overflow-hidden"
      id="experiences"
    >
      <motion.h2
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
        {Experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            index={index}
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            description={exp.description}
            technologies={exp.technologies}
            link={exp.link} // ✅ Pass the optional link
          />
        ))}
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
