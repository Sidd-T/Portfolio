import ScrollUp from "@/components/Common/ScrollUp";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects/Projects";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import Contact from "@/components/Contact/Contact";
import Music from "@/components/Music/Music";

export const metadata: Metadata = {
  title: "Portfolio n. 510",
  description: "my portfolio website",
  // other metadata
};

export default function Home() {
  return (
    <>
    <div id="content">
      <ScrollUp />
      <Hero />
      <AboutMe />
      <Projects />
      <Music/>
      <Contact />
      </div>
    </>
  );
}
