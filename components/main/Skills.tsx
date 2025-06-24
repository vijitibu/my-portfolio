"use client";
import React from "react";
import { motion } from "framer-motion";
import SkillsDataProvider from "../sub/SkillsDataProvider";
import SkillText from "../sub/SkillText";
import { Skill_data, Frontend_skill, Full_stack } from "@/constants";

// Merge and remove duplicates by skill_name
const mergedSkills = [...Skill_data, ...Frontend_skill];
const uniqueSkills = mergedSkills.filter(
  (item, index, self) =>
    index === self.findIndex((t) => t.skill_name === item.skill_name)
);

const Skills = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-10 h-full relative overflow-hidden py-10 px-4"
      id="skills"
      style={{ transform: "scale(0.95)" }}
    >
      <SkillText />

      {/* Frontend + General Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-4 w-full max-w-6xl place-items-center">
        {uniqueSkills.map((image, index) => (
          <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            skillName={image.skill_name}
          />
        ))}
      </div>

      {/* Full Stack Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-10 w-full max-w-6xl place-items-center">
        {Full_stack.map((image, index) => (
          <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            skillName={image.skill_name}
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

export default Skills;
