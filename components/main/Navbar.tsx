"use client";

import { useState, useEffect } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const sectionIds = ["about-me", "skills", "experiences", "projects", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Listen for scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#about-me" className="flex items-center">
          <Image src="/NavLogo.png" alt="logo" width={50} height={50} />
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            Viji’s Web Dev Portfolio - Design. Code. Repeat.
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-300 text-sm font-medium">
          {[
            { label: "About", href: "#about-me" },
            { label: "Skills", href: "#skills" },
            { label: "Experience", href: "#experiences" },
            { label: "Projects", href: "#projects" },
            { label: "Contact Me", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3 py-1 transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? "text-white font-bold"
                  : "hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-purple-400 transition-all ${
                  activeSection === link.href.slice(1)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={25}
                height={25}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start mt-2 px-4 py-3 bg-[#030014] rounded-lg text-gray-200 gap-2">
          {[
            { label: "About", href: "#about-me" },
            { label: "Skills", href: "#skills" },
            { label: "Experience", href: "#experiences" },
            { label: "Projects", href: "#projects" },
            { label: "Contact Me", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-full py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
