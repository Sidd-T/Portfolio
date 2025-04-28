"use client";

import menuData from "../Header/menuData";
import { useState, useEffect, useRef } from "react";
import "../../styles/piano.css";
import "../../styles/effects.css";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({subsets: ['latin']})

const Sidebar = ({ navbarOpen }: { navbarOpen: boolean }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check for small screen width on component mount
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // 640px is the default breakpoint for 'sm' in Tailwind
    };

    handleResize(); // Run on initial load
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [maxVisibleItems, setMaxVisibleItems] = useState(menuData.length);
  const sampleItemRef = useRef(null);

  useEffect(() => {
    const updateVisibleItems = () => {
      const content = document.getElementById('content');
      const footer = document.getElementById('footermain');
      const sampleItem = sampleItemRef.current;

      if (content && footer && sampleItem) {
        const contentHeight = content.offsetHeight;
        const footerHeight = footer.offsetHeight;
        const itemHeight = sampleItem.offsetHeight;

        const itemsThatFit = Math.floor((contentHeight+footerHeight) / itemHeight);
        setMaxVisibleItems(isSmallScreen ? 8 : itemsThatFit);
      }
    }
    
    // Initial calculation
    updateVisibleItems();

    // Add listener
    window.addEventListener('resize', updateVisibleItems);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, [isSmallScreen]);

  // State to track the hovered ID
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleScroll = (scrollPos: string | undefined) => {
    if (scrollPos === undefined) return;

    const element = document.getElementById(scrollPos);
    if (element) {
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };


  return (
    <div
      className={`fixed xs:fixed sm:static overflow-y-auto scrollbar-hidden z-50 w-full h-full bg-gray-dark dark:shadow-sticky-dark transition-all duration-300 ${
        navbarOpen ? "translate-x-0 opacity-100 w-5/6 xs:w-4/6 sm:w-full" : "-translate-x-full opacity-0 lg:w-0 lg:bg-opacity-100 lg:opacity-100 lg:top-0"
      } lg:translate-x-0`}
    >
      <div className="flex flex-row h-full">
        <div className="w-[90%]">
          <h2 className="px-5 p-5 sm:py-14 wood rounded-br-lg border-b-4 border-black text-xl font-bold text-black dark:text-white"></h2>
          <ul>
            {menuData.slice(0, maxVisibleItems).map((menuItem, index) => {
              // Generate dynamic ID based on index and keyType
              const leftId = `${index + 0.5}`;
              const rightId = `${index - 0.5}`;

              return (
                <li key={index} className="flex flex-col relative" ref={(index === 0) ? sampleItemRef : null}>
                  {/* White Key */}
                  {(menuItem?.title) ?
                    <button
                      onClick={() => handleScroll(menuItem.scrollPos)}
                      className={`${orbitron.className} flex rounded-r-xl z-30 w-full px-2 sm:px-5 py-8 text-lg lg:text-2xl bg-gradient-to-r from-gray-100 hover:from-green-500 hover:to-cyan-500 from-20% to-white to-50% dark:bg-gray-200 
                      ${"text-dark hover:text-white"}`}
                    >
                      {menuItem.title}
                    </button>
                    :
                    <div
                      className={`flex rounded-r-xl z-30 w-full px-5 py-8 text-lg lg:text-2xl bg-gradient-to-r from-gray-100 hover:from-green-500 hover:to-cyan-500 from-20% to-white to-50% dark:bg-gray-200`}
                    >
                      <p className="invisible">{`${menuItem.note}`}</p>
                    </div>
                  }

                  {/* Black Key (Only when needed based on keyType) */}
                  {(menuItem.keyType === "LEFT" || menuItem.keyType === "BETWEEN") && (
                    <>
                      <div
                        className={`absolute z-40 top-0 right-0 h-[2px] bg-black ${
                          menuItem.keyType === "BETWEEN" ? "w-[30%]" : "w-full"
                        }`}
                      />
                      <div className={`absolute z-40 bottom-0 left-0 w-[71%] h-[22%] bg-black rounded-tr`} />
                      <div 
                        className={`absolute z-40 bottom-0 left-0 w-[70%] h-1/5 bg-gradient-to-r from-gray-400 from-30% to-gray-700 to-50% rounded-tr-lg ${hoveredId === leftId || hoveredId === rightId ? "bg-gradient-to-r from-purple-900 to-indigo-900" : ""}`} 
                      />
                      <div
                        id={leftId}
                        className={`absolute z-40 bottom-0 left-0 w-[64%] h-[15%] rounded-tr-lg bg-gradient-to-r from-gray-500 from-10% to-black to-30% border-r-2 border-gray-800 ${hoveredId === leftId ? "bg-gradient-to-r from-purple-800 to-indigo-800" : ""}`}
                        onMouseEnter={() => setHoveredId(leftId)}
                        onMouseLeave={() => setHoveredId(null)}
                      />
                      <div
                        className={`absolute z-40 bottom-0 right-0 h-[2px] bg-black w-[30%]`}
                      />
                    </>
                  )}

                  {(menuItem.keyType === "RIGHT" || menuItem.keyType === "BETWEEN") && (
                    <>
                      <div
                        className={`absolute z-40 bottom-0 right-0 h-[2px] bg-black w-[30%]`}
                      />
                      <div className={`absolute z-40 top-0 left-0 w-[71%] h-[22%] bg-black rounded-br`} />
                      <div 
                        className={`absolute z-40 top-0 left-0 w-[70%] h-1/5 bg-gradient-to-r from-gray-600 from-30% to-gray-700 to-50% rounded-br-lg ${hoveredId === leftId || hoveredId === rightId ? "bg-gradient-to-r from-purple-900 to-indigo-900" : ""}`}
                      />  
                      <div
                        id={rightId}
                        className={`absolute z-40 top-0 left-0 w-[64%] h-[15%] rounded-br-lg bg-gradient-to-r from-gray-500 from-10% to-black to-30% border-r-2 border-gray-800 ${hoveredId === rightId ? "bg-gradient-to-r from-purple-800 to-indigo-800" : ""}`}
                        onMouseEnter={() => setHoveredId(rightId)}
                        onMouseLeave={() => setHoveredId(null)}
                      />
                      <div
                        className={`absolute z-40 bottom-0 right-0 h-[2px] bg-black ${
                          menuItem.keyType === "BETWEEN" ? "w-[30%]" : "w-full"
                        }`}
                      />
                    </>
                  )}

                  {(menuItem.keyType === "NONE") && (
                    <>
                      <div
                        className={`absolute z-40 top-0 right-0 h-[2px] bg-black w-full`}
                      />
                      <div
                        className={`absolute z-40 bottom-0 right-0 h-[2px] bg-black w-full`}
                      />
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-[2%] bg-black"/>
        <div className="w-[8%] wood-2"/>
      </div>
      
    </div>
  );
};

export default Sidebar;
