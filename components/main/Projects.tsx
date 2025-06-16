import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/1.png"
          title="Portfolio Website"
          description="A personal portfolio website showcasing:
- Projects
- Skills
- Contact info

Built using Next.js 14 & Tailwind CSS."
        />
        <ProjectCard
          src="/2.png"
          title="E-Governance project"
          description="Task Management App

An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking."
        />
        <ProjectCard
          src="/3.png"
          title="Autonomous College Degree Certificate printing portal"
          description="This portal is for printing the Degree Certificate for all the courses in
Autonomous College. It is handled by Section"
        />
      </div>
    </div>
  );
};

export default Projects;
