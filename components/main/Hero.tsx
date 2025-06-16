import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section
      className="relative flex items-start justify-center min-h-screen w-full overflow-hidden"
      id="about-me"
    >
      <HeroContent />
    </section>
  );
};

export default Hero;
