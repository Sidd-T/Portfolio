'use client'

import Link from "next/link";
import Image from "next/image";

import "../../styles/glitch.css";
import "../../styles/effects.css";

import { Orbitron } from "next/font/google";
import { useMenu } from "@/context/MenuContext";
import { Piano } from "@mui/icons-material";
import { useEffect } from "react";


const orbitron = Orbitron({subsets: ['latin']})

const About = () => {

  const { menuDataID, menuHandler } = useMenu();

  useEffect(() => {
    menuHandler(1);
  }, [])

  return (
    <>
      <section
        id="about"
        className="relative z-10 overflow-hidden bg-[url(/images/light-wood.jpg)] pb-16 pt-[120px] dark:bg-[url(/images/charred-timber.jpg)] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className={`${orbitron.className} mb-5 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight`}>
                  {" "} 
                  <span className={`bg-gradient-to-r dark:from-[#00ff6a] dark:to-[#00d9ff] from-[#8300e7] to-[#0612ba] hero glitch layers`} data-text="Portfolio n. 51">
                    DIY ANALOG SYNTHESIZER
                  </span> 
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-dark dark:text-body-color-dark sm:text-lg md:text-xl">
                  This page will walkthrough a build of a analog synthsizer. The synth contains 5 modules. These are the MIDI-CV, VCO, VCF, ADSR, and VCF.
                  <br></br><br></br>
                  All the required resources are on the Github repo, and this page will detail invidual steps and explanations.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    className="rounded-xl bg-gradient-to-r dark:from-green-600 dark:to-cyan-600 from-[#8300e7] to-[#0612ba] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:scale-105"
                    href={"https://drive.google.com/drive/folders/1pZ6bsg_FEnXTB3pdEgBZhEAXTNcCiry6?usp=sharing"}
                  >
                    <span className="-ml-2 flex flex-row justify-center items-center gap-4 shadow-2xl dark:shadow-green-500/50 shadow-indigo-500/50">
                      <Piano className="text-3xl dark:block" /> {/* Scaled icon */}
                      <span>View Demos</span>
                    </span>
                  </Link>
                  <Link
                    href="https://github.com/Sidd-T/AnalogSynthesizer"
                    className="inline-block rounded-xl bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5 hover:scale-105"
                  >
                    <span className="-ml-2 flex flex-row justify-center items-center gap-4">
                      <Image
                        src={'/images/github.png'}
                        alt="github logo"
                        width={30}
                        height={30}
                        className="invert dark:block"
                      />
                      <span>GitHub Repo</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
