'use client'

import SectionTitle from "../Common/SectionTitle";
import ProjectBookGrid from "./ProjectBookGrid";
import { Orbitron } from "next/font/google";
import { useNavbar } from "@/context/NavbarContext";
import { useState, useEffect, useRef, useMemo } from "react";
import "../../styles/scrollbar.css"
import { softwareProjectsData, hardwareProjectsData } from "./ProjectsData";
import NotebookPage from "./NotebookPage";
import { NotebookData } from "../../types/notebook";

const orbitron = Orbitron({subsets: ['latin']})

const Projects = () => {
  const { navbarOpen } = useNavbar();
  const [softwareProjects, setSoftwareProjects] = useState<boolean>(true);
  const [selectedNotebook, setSelectedNotebook] = useState<number>(-1);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [notebooks, setNotebooks] = useState<NotebookData[]>();

  useEffect(() => {
    setNotebooks((softwareProjects) ? softwareProjectsData : hardwareProjectsData)
  }, [softwareProjects]);

  // Reference to the scrollable div
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  // Function to handle scroll event
  const handleScroll = () => {
    if (scrollableDivRef.current) {
      setScrollPosition(scrollableDivRef.current.scrollTop);
    }
  };

  // Add event listener to track scroll position
  useEffect(() => {
    const div = scrollableDivRef.current;
    if (div) {
      div.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (div) {
        div.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const paragraph: React.ReactNode = (
    <>
      &quot;I&apos;m so twisted silly string is just like regular string to me&quot;
    </>
  );

  return (
    <>
      <section id="projects" className="py-10 bg-[url(/images/light-wood.jpg)] dark:bg-[url(/images/charred-timber.jpg)]">
        <div className={`bg-transparent hover:bg-opacity-35 hover:bg-white hover:dark:bg-white/10 p-4 sm:p-6 md:p-10 rounded-2xl transition-all duration-700 ${(navbarOpen) ? "mx-2 md:mx-10" : "mx-4 sm:mx-10 md:mx-28"}`}>
          <SectionTitle
            title="Projects"
            paragraph={paragraph}
            center
            mb="1vh"
          />

          <div className="w-full">
            <div className="scale-[70%] sm:scale-[100%] mt-8 mb-4 flex justify-center md:mb-12 lg:mb-16">
              <span
                onClick={() => setSoftwareProjects(true)}
                className={`${
                  softwareProjects
                    ? "pointer-events-none bg-gradient-to-r dark:from-[#00ff6a] dark:to-[#00d9ff] from-[#8300e7] to-[#0612ba] text-transparent bg-clip-text"
                    : "text-dark dark:text-white"
                } mr-4 cursor-pointer text-3xl font-semibold ${orbitron.className} ${selectedNotebook > 0 ? 'pointer-events-none' : ''}`}
              >
                Software
              </span>
              <div
                onClick={() => setSoftwareProjects(!softwareProjects)}
                className={`flex cursor-pointer items-center ${selectedNotebook > 0 ? 'pointer-events-none' : ''}`}
              >
                <div className="relative">
                  <div className="h-5 w-14 rounded-full bg-black shadow-inner"></div>
                  <div
                    className={`${
                      softwareProjects ? "" : "translate-x-full"
                    } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r dark:from-green-500 dark:to-cyan-500 from-[#8300e7] to-[#0612ba] transition`}
                  >
                    <span className="active h-4 w-4 rounded-full bg-white"></span>
                  </div>
                </div>
              </div>
              <span
                onClick={() => setSoftwareProjects(false)}
                className={`${
                  softwareProjects
                    ? "text-dark dark:text-white"
                    : "pointer-events-none bg-gradient-to-r dark:from-[#00ff6a] dark:to-[#00d9ff] from-[#8300e7] to-[#0612ba] text-transparent bg-clip-text"
                } ml-4 cursor-pointer text-3xl font-semibold ${orbitron.className} ${selectedNotebook > 0 ? 'pointer-events-none' : ''}`}
              >
                Hardware
              </span>
            </div>
          </div>



          <div className="relative w-full">
            {/* Scrollable grid container */}
            <div
              ref={scrollableDivRef}
              className={`w-full h-[100vh] no-scrollbar ${
                selectedNotebook > 0 ? 'overflow-hidden' : 'overflow-auto'
              }`}
            >
              <ProjectBookGrid
                notebooks={softwareProjects ? softwareProjectsData : hardwareProjectsData}
                setSelectedNotebook={setSelectedNotebook}
              />
            </div>

            {/* Overlay notebook detail */}
            {selectedNotebook > 0 && (
              <div className="absolute top-0 left-0 w-full h-full z-50 dark:bg-white/25 bg-black/20 rounded-2xl transition-all duration-300">
                <div className="flex flex-col h-full fadeInFromBottom">
                  <div className="m-auto transform" style={{ transform: `${(window.innerWidth <= 500) ? 'translateX(-2.3rem)' : ''} ${(window.innerWidth <= 450) ? 'translateX(-3rem)' : ''} ${(window.innerWidth <= 400) ? 'translateX(-0rem)' : ''}` }}>
                    <NotebookPage
                      image={notebooks[selectedNotebook - 1].image}
                      title={notebooks[selectedNotebook - 1].title}
                      description={notebooks[selectedNotebook - 1].description}
                      githubLink={notebooks[selectedNotebook - 1]?.githubLink || ''}
                      descriptionFull={notebooks[selectedNotebook - 1].descriptionFull || ''}
                      src={notebooks[selectedNotebook - 1].src || ''}
                      setSelectedNotebook={setSelectedNotebook}
                      images={notebooks[selectedNotebook - 1].images || []}
                      menuID={notebooks[selectedNotebook - 1].menuID || 0}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Projects;
