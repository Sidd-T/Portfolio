import React from "react";
import { School } from "@mui/icons-material";
import { Orbitron } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ['latin'] });

const Card3 = ({ cardOpen }: { cardOpen: boolean }) => {
  return (
    <div className=" bg-gradient-to-t from-gray-100 from-10% via-blue-800 via-40% to-blue-900 to-60% text-white rounded-2xl w-full h-full flex flex-col justify-start">
      <div className={`${orbitron.className} bg-[url('https://www.transparenttextures.com/patterns/axiom-pattern.png')] bg-black/40
      // xs:text-md md:text-lg xs:p-4 flex flex-row items-centers rounded-t-2xl
      // border-b border-blue-900`}>
        <div className="mr-auto">
          <School className="xs:text-md md:text-lg mr-2 self-center mb-1" />
          {"Education"}
        </div>
        <div>UofT</div>
      </div>
      
      <div className="flex-grow rounded-b-2xl flex flex-row gap-8 items-start pt-4 bg-[url('https://www.transparenttextures.com/patterns/axiom-pattern.png')]"> 
        

        {/* Left side: details */}
        <div className="flex-grow flex flex-col gap-4 my-auto pb-[40%] sm:pt-[5%] md:pt-0 lg:pt-0 2xl:pt-[5%] pl-8"> 
          <div className={`${orbitron.className} ${cardOpen ? 'text-xl' : 'text-md'} font-bold border-b border-blue-900`}>
          University of Toronto
          </div>
          <ul className={`${!cardOpen ? 'hidden' : ''} sm:space-y-2 pb-4`}>
            <li>
              <div className={`font-bold italic`}>
                Bachelor's In Applied Science
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center italic">
                <strong className=" text-gray-300 sm:text-md xs:text-sm w-2/5">Major:</strong>
                <div className="w-3/5"> {`Electrical & Computer Engineering`}</div>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center italic">
                <strong className="xs:text-black sm:text-gray-300 lg:text-black xl:text-gray-300 sm:text-md xs:text-sm w-2/5">Certificate:</strong>
                <div className="xs:text-black sm:text-white lg:text-black xl:text-white w-3/5"> {`Music Technology`}</div>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center italic">
                <strong className=" xs:text-black sm:text-gray-300 lg:text-black xl:text-gray-300 sm:text-md xs:text-sm w-2/5">Certificate:</strong>
                <div className="w-3/5 xs:text-black sm:text-white lg:text-black xl:text-white w-3/5"> {`AI Engineering`}</div>
              </div>
            </li>
          </ul>
        </div>

        {/* Right side: Image */}
        <div className="pr-6 w-2/5">
          <Image
            src="/images/uoft.png" 
            alt="image on card"
            width={0}
            height={0}
            layout="responsive"
            className="rounded-lg object-contain w-[50%] max-w-xs" 
          />
        </div>
      </div>
    </div>
  );
};

export default Card3;
