'use client'

import SectionTitle from "../Common/SectionTitle";
import GlitchedImage from "../About/GlitchedImage";

import { useNavbar } from "@/context/NavbarContext";

import "../../styles/effects.css";


const AboutMe = () => {
  const { navbarOpen } = useNavbar();

  const paragraph: React.ReactNode = (
    <>
      &quot;I haven&apos;t taken an IQ test yet, but I think I&apos;m somewhere between the smartest and dumbest person on Earth.&quot;
    </>
  );

  return (
    <>
      <section id="aboutme" className="py-10 bg-[url(/images/light-wood.jpg)] dark:bg-[url(/images/charred-timber.jpg)]">
        <div className={`bg-transparent hover:bg-opacity-35 hover:bg-white hover:dark:bg-white/10 p-10 rounded-2xl transition-all duration-700 ${(navbarOpen) ? "mx-10 md:mx-16" : "mx-10 md:mx-28"}`}>
          <SectionTitle
            title="About Me"
            paragraph={paragraph}
            center
            mb="1vh"
          />

          <div className="flex h-[50vh]">
            <GlitchedImage/>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
