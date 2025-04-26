'use client'

import Link from "next/link";
import Image from "next/image";

import "../../styles/glitch.css";
import "../../styles/effects.css";

import { Orbitron } from "next/font/google";
import { useNavbar } from "@/context/NavbarContext";
import { Piano } from "@mui/icons-material";


const orbitron = Orbitron({subsets: ['latin']})

const Hero = () => {

  const { navbarOpen, navbarToggleHandler } = useNavbar();

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[url(/images/light-wood.jpg)] pb-16 pt-[120px] dark:bg-[url(/images/charred-timber.jpg)] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container fadeInFromTop">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className={`${orbitron.className} mb-5 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight`}>
                  {"Portfolio "} 
                  <span className={`bg-gradient-to-r dark:from-[#00ff6a] dark:to-[#00d9ff] from-[#8300e7] to-[#0612ba] hero glitch layers`} data-text="Portfolio n. 51">
                    n. 510
                  </span> 
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-dark dark:text-body-color-dark sm:text-lg md:text-xl">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r dark:from-[#00ff6a] dark:to-[#00d9ff] from-[#8300e7] to-[#0612ba] hero glitch layers" data-text="R̴̢̮͘E̵͎̓D̸̟͊͘A̴Ć̴̯͇̏T̶͓̃̚ͅË̸̪D̴̞̉͠">{"████████"}</span>, 
                  a developer, engineer, jazz pianist, and music producer from 
                  <span className="bg-gradient-to-r dark:from-[#00ff6a] dark:to-[#00d9ff] from-[#8300e7] to-[#0612ba] hero glitch layers" data-text="R̴̢̮͘E̵͎̓D̸̟͊͘A̴Ć̴̯͇̏T̶͓̃̚ͅË̸̪D̴̞̉͠">{"███████"}</span>. 
                  This site includes work in software, hardware, music, SFX, sheet music, and game dev. Check out my projects by opening the sidebar.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    className="rounded-xl bg-gradient-to-r dark:from-green-600 dark:to-cyan-600 from-[#8300e7] to-[#0612ba] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:scale-105"
                    onClick={navbarToggleHandler}
                  >
                    <span className="-ml-2 flex flex-row justify-center items-center gap-4 shadow-2xl dark:shadow-green-500/50 shadow-indigo-500/50">
                      <Piano className="text-3xl dark:block" /> {/* Scaled icon */}
                      <span>Toggle Piano Sidebar</span>
                    </span>
                  </button>
                  <Link
                    href="https://github.com/Sidd-T"
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
                      <span>My GitHub</span>
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

export default Hero;
