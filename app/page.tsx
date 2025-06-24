import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import ContactMe from "@/components/sub/ContactMe";
import ExperienceSection from "@/components/sub/ExperienceSection";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Hero />
        <Skills />
        {/* <Encryption /> */}
        <ExperienceSection />
        <Projects />
        <ContactMe />
      </div>
    </main>
  );
}
