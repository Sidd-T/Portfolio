'use client'

import React, { useState, useEffect } from "react";
import { Close } from "@mui/icons-material";
import CardHolder from "./CardHolder";
import WalletCard from "./WalletCard";
import "../../styles/wallet.css"
import { Caveat } from "next/font/google";

const caveat = Caveat({subsets: ['latin']});

const Wallet = ({ walletOpen, onClose }: { walletOpen: boolean, onClose: () => void }) => {
  const [cardOpenIdx, setCardOpenIdx] = useState<number | null>(null);
  const [signedCardOpenIdx, setSignedCardOpenIdx] = useState<number | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  // Check for small screen width on component mount
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize(); // Run on initial load
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`${(walletOpen) ? '' : 'hidden'} fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-60 backdrop-blur-sm flex flex-col items-center justify-center z-[9900]`}>
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-10 shadow-xl text-white text-2xl bg-white/10 hover:bg-white/30 rounded-xl px-6 py-2 hover:scale-[120%] 
        ring-white focus:ring-2 transition-all duration-700"
      >
        <Close/>
      </button>

      {/* Wallet */}
      <div className="fadeInFromBottom drop-shadow-[0_35px_35px_rgb(75,75,75)] bg-[#000000] w-[95%] md:w-[85%] lg:w-[80%] xl:w-[65%] h-[28%] xs:h-[30%] md:h-[40%] lg:h-[45%] xl:h-[50%] my-auto rounded-2xl leather-dark flex flex-row">
        <CardHolder leftSide={true} setCardOpenIdx={setCardOpenIdx} setSignedCardOpenIdx={setSignedCardOpenIdx}/>
        <div className="w-[8%] h-[98%] my-auto border-t-2 border-b-2 border-[#2e210b] border-dashed ">
          <div className="w-full h-full border-l-2 border-r-2 border-[#2e210b] leather-dark" />
        </div>
        <CardHolder leftSide={false} setCardOpenIdx={setCardOpenIdx} setSignedCardOpenIdx={setSignedCardOpenIdx}/>
      </div>

      {/* Text */}
      <div className={`w-4/5 h-[10%] mb-8 text-3xl text-white flex justify-center text-center`}>
        <div className={`mx-auto dialog-text ${caveat.className}`}>
          {(isSmallScreen) ? <p>Who leaves their wallet<br></br>on the floor...</p>: 'Who leaves their wallet on the floor...'}
        </div> 
      </div>

      {/* Opened Card */}
      <div className={`${(cardOpenIdx !== null) ? '' : 'hidden'} fixed top-0 left-0 h-screen w-screen bg-black  bg-opacity-60 backdrop-blur-sm flex flex-col items-center justify-center z-[9999]`}>
        
        {/* Card */}
        <div className="xs:w-[95%] md:w-[80%] lg:w-[50%] h-[70%] my-auto fadeInFromBottom drop-shadow-[0_35px_35px_rgba(75,75,75, 0.75)]">
          <WalletCard index={signedCardOpenIdx} cardOpen={true} leftSide={null}/>
        </div>
        
        {/* Close Button */}
        <button
          onClick={() => {
            setCardOpenIdx(null);
            setSignedCardOpenIdx(null);
          }}
          className="absolute top-12 right-50 shadow-xl text-white text-2xl bg-white/10 hover:bg-white/30 rounded-xl px-6 py-2 hover:scale-[120%] 
          ring-white focus:ring-2 transition-all duration-700"
        >
          {"Put Back "}
        </button>
      </div>

    </div>
  )

}

export default Wallet;