'use client'

import React, { useEffect, useState } from "react";
import WalletCard from "./WalletCard";

import "../../styles/wallet.css";

const CardHolder = ({ leftSide, setCardOpenIdx, setSignedCardOpenIdx }: { leftSide: boolean, setCardOpenIdx: Function, setSignedCardOpenIdx:Function }) => {
  const numDivs = 4;
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768); 
      setIsLargeScreen(window.innerWidth >= 992); 
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getTopValue = (index:number) => {
    return isLargeScreen ? index * 4.9 + 1 : isMediumScreen ? index * 4.2 + 1 : index * 3 + 1;
  } 

  const hasCard = (index:number) => {
      if (leftSide && (index === 2 || index === 3)) {
        return false;
      }
      if (!leftSide && index === 1) {
        return false;
      }
      else {
        return true;
      }
  }

  return (
    <div
      className={`${
        leftSide ? "ml-1" : "mr-1"
      } bg-black w-[46%] h-[98%] my-auto rounded-md leather2-dark relative border-2 border-dashed border-[#2e210b]`}
    >
      {/* Stack the angled divs */}
      {Array.from({ length: numDivs }).map((_, index:number) => (
        <>
          <div
            key={(leftSide) ? (index+1) : -1*(index+1)} // need unique indices
            className={`w-[99%] h-[65%] mx-auto absolute ${leftSide ? "angled-top-left" : "angled-top-right"} bg-[#2e210b]`}
            style={{
              top: `${getTopValue(index)}vh`,
              zIndex: 10 + index, 
            }}
          >
            <div className={`${leftSide ? "angled-top-left-inside" : "angled-top-right-inside"} leather2-light`}>
            </div>
          </div>
          {(hasCard(index)) &&
            <div
              key={(leftSide) ? (index+1)*10 + index : -10*(index+1) - index} // need unique indices
              className={`w-[99%] h-[65%] mx-auto absolute`}
              style={{
                top: `${getTopValue(index) - 1}vh`,
                zIndex: 9 + index,
              }}
              onClick={() => {
                setCardOpenIdx(index+1);
                const side:number = (leftSide) ? -1 : 1;
                setSignedCardOpenIdx(side*(index+1));
              }}
            >
              <WalletCard index={index} cardOpen={false} leftSide={leftSide}/>
            </div>
          }
        </>
      ))}
    </div>
  );
};

export default CardHolder;
