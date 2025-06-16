"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 lg:px-24 mt-10 md:mt-16 lg:mt-20 w-full z-[20]"
      id="about-me"
    >
      {/* Left Section - Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="py-2 px-4 border border-purple-400/50 bg-purple-900/10 backdrop-blur-sm rounded-md flex items-center w-fit shadow-sm"
        >
          <SparklesIcon className="text-purple-300 mr-2 h-5 w-5" />
          <h1 className="text-sm text-purple-200 font-medium">
            Front End Developer
          </h1>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mt-6"
        >
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text drop-shadow-lg">
            VIJI PRABHA
          </span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px] space-y-3"
        >
          <strong>
            I’m a Front-End Developer with over 12 years of experience
          </strong>{" "}
          building scalable and user-centric web applications. I bring expertise
          in <span className="text-white font-medium">React.js</span>,{" "}
          <span className="text-white font-medium">TypeScript</span>,{" "}
          <span className="text-white font-medium">Tailwind CSS</span>,{" "}
          <span className="text-white font-medium">Material-UI</span>, and{" "}
          <span className="text-white font-medium">Next.js</span> to deliver
          responsive, modern interfaces that align with business goals.
          <br />
          <br />
          I’ve built dynamic applications with intuitive UI components,
          integrated
          <span className="text-white font-medium"> Telerik Reporting</span> for
          real-time data visualization, and maintained brand consistency across
          web platforms. By collaborating closely with cross-functional teams, I
          ensure seamless integration between front-end and back-end systems.
          <br />
          {/* <br />I focus on clean, accessible, and performance-optimized code.I
          strive to deliver scalable solutions that are both functional and
          delightful to use. */}
        </motion.p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/sample-resume.pdf"
            download
            className="border border-purple-500 text-purple-300 px-5 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition-colors text-sm font-medium"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Section - Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0"
      >
        <div className="p-2 md:p-3 bg-gradient-to-br from-purple-700 via-purple-500 to-indigo-700 rounded-[24px] shadow-xl">
          <Image
            src="/viji-photo1.png"
            alt="Viji Prabha"
            width={220}
            height={220}
            className="rounded-[20px] shadow-lg border-4 border-white object-cover w-[180px] h-[180px] md:w-[300px] md:h-[300px] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
