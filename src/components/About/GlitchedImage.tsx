'use client'

import React, { useEffect, useState } from "react";
import "../../styles/glitch2.css"
import { Orbitron } from "next/font/google";
import Wallet from "../Wallet/Wallet";

const orbitron = Orbitron({subsets: ['latin']})

const GlitchedImage = () => {
  const [hovered, setHovered] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);

  const openLightbox = () => setWalletOpen(true);
  const closeLightbox = () => setWalletOpen(false);

  useEffect(() => {
    if (walletOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    // Cleanup on unmount just in case
    return () => {
      document.body.style.overflow = '';
    };
  }, [walletOpen]);

  return (
    <div className="w-full h-full flex flex-col">
      <Wallet onClose={closeLightbox} walletOpen={walletOpen}/>
      <div className="relative w-full h-full flex justify-center items-center bg-transparent text-white rotate-[3rad]">
        <svg className="filter hidden">
          <filter id="alphaRed">
            <feColorMatrix
              mode="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="joint"
            />
          </filter>
          <filter id="alphaGreen">
            <feColorMatrix
              mode="matrix"
              values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="joint"
            />
          </filter>
          <filter id="alphaBlue">
            <feColorMatrix
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
              result="joint"
            />
          </filter>
          <filter id="alpha">
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div
          className="imgWrap max-w-[40vh] max-h-[40vh] scale-[65%] hover:scale-[100%] transition-all duration-700 rounded-lg"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={openLightbox}
        >
          <div className="relative w-full h-full">
            <img
              className={`red`}
              src="/images/wallet.png"
              alt="Red Filtered"
            />
            <img
              className={`green`}
              src="/images/wallet.png"
              alt="Green Filtered"
            />
            <img
              className={`blue`}
              src="/images/wallet.png"
              alt="Blue Filtered"
            />
          </div>
          <p
            className={`text ${orbitron.className}`}
          >
            <span>[R̴̢̮͘E̵͎̓D̸̟͊͘A̴Ć̴̯͇̏T̶͓̃̚ͅË̸̪D̴̞̉͠]</span>
          </p>
        </div>
      </div>
      <h1
        className={`text-2xl pt-10 self-center transition-opacity duration-300 ${
          !hovered ? "opacity-0" : "opacity-100"
        }`}
      >
        Open?
      </h1>
    </div> 
  );
};

export default GlitchedImage;
