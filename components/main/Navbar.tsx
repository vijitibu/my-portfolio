"use client";

import { useState, useEffect } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const sectionIds = ["about-me", "skills", "experiences", "projects", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-[65px] fixed top-0 z-[100] px-6 md:px-10 bg-[#030014cc] backdrop-blur-md border-b border-[#2A0E61]/50">
      <div className="w-full h-full flex items-center justify-between gap-4">
        {/* LEFT: Logo + Nav Links */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <a href="#about-me" className="flex items-center">
            <Image src="/NavLogo.png" alt="logo" width={40} height={40} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 bg-[#03001480] px-5 py-2 rounded-full text-gray-300 text-sm font-medium">
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
                className={`relative px-3 py-1 whitespace-nowrap transition-all duration-300 ${
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
        </div>

        {/* RIGHT: Title + Socials */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block text-sm text-gray-300 font-semibold whitespace-nowrap">
            Viji’s Web Dev Portfolio - Design. Code. Repeat.
          </span>
          <div className="flex gap-3">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-6 h-6"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start mt-2 px-4 py-3 bg-[#030014] rounded-lg text-gray-200 gap-2 z-[100]">
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
