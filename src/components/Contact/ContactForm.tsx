import React from "react";

import "../../styles/note.css"
import "../../styles/glitch.css";
import { Caveat } from "next/font/google";

const caveat = Caveat({subsets: ['latin']});

const ContactInfo = () => {

  const CopyToClipboard = () => {
    const textToCopy:string = 'sidd.topiwala02@gmail.com';
  
    const handleCopy = () => {
      navigator.clipboard.writeText(textToCopy)
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    };
  }

  return (
      <div className="xs:w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%]">
        <div className="sticky-outer">
          <div className="sticky">
            <svg width="0" height="0">
              <defs>
                <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                  <path
                    d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                    stroke-linejoin="round"
                    stroke-linecap="square"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="sticky-content cursor-pointer" onClick={CopyToClipboard}>
              <p className={`mb-12 text-base !leading-relaxed text-dark dark:text-white sm:text-xl md:text-2xl ${caveat.className}`}>
                Email (click to copy): <br></br>
                <span 
                  className="bg-gradient-to-r dark:from-[#00ff6a] dark:to-[#00d9ff] from-[#8300e7] to-[#0612ba] hero glitch layers" 
                  data-text="R̴̢̮͘E̵͎̓D̸̟͊͘A̴Ć̴̯͇̏T̶͓̃̚ͅË̸̪D̴̞̉͠">{"█████████████████"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactInfo;
