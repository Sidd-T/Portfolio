import React from "react";
import { Info } from "@mui/icons-material";
import { Orbitron } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ['latin'] });

const Card4 = ({ cardOpen }: { cardOpen: boolean }) => {
  return (
    <div className=" bg-gradient-to-br from-purple-700 from-30% via-indigo-800 via-50% to-indigo-900 to-60% text-white rounded-2xl w-full h-full flex flex-col justify-start">
      <div className={`${orbitron.className} bg-[url('https://www.transparenttextures.com/patterns/axiom-pattern.png')] bg-black/40
      // text-xs xs:text-md md:text-lg p-1 xs:p-4 flex flex-row items-centers rounded-t-2xl
      // border-b border-black`}>
        <div className="mr-auto">
          <Info className="text-xs xs:text-md md:text-lg mr-2 self-center mb-1" />
          {"For Recruiters"}
        </div>
        <div className="hidden sm-inline">Info</div>
      </div>
      
      <div className="overflow-x-hidden overflow-y-auto sm:overflow-hidden flex-grow rounded-b-2xl flex flex-row gap-8 items-start pt-4 bg-[url('https://www.transparenttextures.com/patterns/axiom-pattern.png')]"> 
        

        {/* Left side: details */}
        <div className="flex-grow flex flex-col gap-4 my-auto pb-[40%] sm:pt-[5%] md:pt-0 lg:pt-0 2xl:pt-[5%] pl-2 sm: pl-8"> 
          <div className={`${orbitron.className} ${cardOpen ? 'text-xs sm:text-xl' : 'text-xs sm:text-md'} font-bold border-b border-purple-900`}>
          Software Development, 2 years of professional experience (contact for resume)
          </div>
          <ul className={`${!cardOpen ? 'hidden' : ''} sm:space-y-2 pb-4`}>
            <li>
              <div className={`font-bold italic text-xs sm:text-md`}>
                Frontend (React/JS/TS), Backend (C#/.NET), Mobile/Cross Platform (Flutter)
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center italic text-xs sm:text-md">
                <strong className=" text-gray-300 sm:text-md xs:text-sm w-2/5">Electrical:</strong>
                <div className="w-3/5"> {`LTSpice, PCB, Oscilloscope/Multimeters, Circuit Design`}</div>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center italic text-xs sm:text-md">
                <strong className="xs:text-black sm:text-gray-300 lg:text-black xl:text-gray-300 sm:text-md xs:text-sm w-2/5">Music:</strong>
                <div className="xs:text-black sm:text-white lg:text-black xl:text-white w-3/5"> {`Certificate from UofT, Completed RCM`}</div>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center italic text-xs sm:text-md">
                <strong className=" xs:text-black sm:text-gray-300 lg:text-black xl:text-gray-300 sm:text-md xs:text-sm w-2/5">Other:</strong>
                <div className="w-3/5 xs:text-black sm:text-white lg:text-black xl:text-white w-3/5"> {`Python, MatLab, Unity, Godot, Esri ArcGIS`}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card4;
