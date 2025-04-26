import React from "react";
import { Piano } from "@mui/icons-material";
import { Orbitron } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ['latin'] });

// Sample data array for the list items, each containing JSX for labels and text
const listItems = [
  { 
    event: "Bar gig",
    location: "Imperial Pub, Toronto",
    date: "Feb 22, 5-7 pm"
  },
  { 
    event: "FanExpo Community Zone Performance",
    location: "Metro Toronto Con Centre",
    date: "Aug 1-4, all day"
  },
];

const Card1 = ({ cardOpen }: { cardOpen: boolean }) => {
  return (
    <div className=" bg-gradient-to-tr from-green-500 from-10% to-cyan-600 to-70% text-white rounded-2xl w-full h-full flex flex-col justify-start">
      <div className={`${orbitron.className} bg-[url('https://www.transparenttextures.com/patterns/escheresque.png')] bg-white/30
      // xs:text-md md:text-lg xs:p-4 flex flex-row items-centers rounded-t-2xl
      // border-b border-cyan-900`}>
        <div className="mr-auto">
          <Piano className="xs:text-md md:text-lg mr-2 self-center mb-1" />
          {"Performances"}
        </div>
        <div>Music</div>
      </div>
      
      <div className="flex-grow rounded-b-2xl flex flex-row gap-8 items-start pt-4 bg-[url('https://www.transparenttextures.com/patterns/escheresque.png')]"> 
        {/* Right side: Image */}
        <div className="ml-6 w-2/5 my-auto pb-[10%]">
          <Image
            src="/images/thelick.png" 
            alt="image on card"
            width={0}
            height={0}
            layout="responsive"
            className="bg-white/5 object-contain w-[50%] rounded-xl border border-orange-400 max-w-xs invert" 
          />
        </div>

        {/* Left side: List of event details */}
        <div className="flex-grow flex flex-col gap-4 py-auto"> 
          <div className={`${orbitron.className} ${cardOpen ? 'text-xl' : 'text-md'} font-bold border-b border-cyan-900`}>
          Upcoming Events
          </div>
          <ul className={`${!cardOpen ? 'hidden' : ''} space-y-2 mb-4`}>
            {listItems.map((item, index:number) => (
              <li key={index} className="xs:text-sm md:text-md lg:text-xs xl:text-md 2xl:text-lg border-b border-cyan-800 mr-4 italic">
                <div className="flex flex-row items-center"><strong className="italic text-gray-300 sx:text-md xs:text-sm w-2/5">Event:</strong><div className="w-3/5"> {item.event}</div></div>
                <div className="flex flex-row items-center"><strong className="italic text-gray-300 sx:text-md xs:text-sm w-2/5">Location:</strong><div className="w-3/5"> {item.location}</div></div>
                <div className="flex flex-row items-center"><strong className="italic text-gray-300 sx:text-md xs:text-sm w-2/5">Date:</strong><div className="w-3/5"> {item.date}</div></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card1;
