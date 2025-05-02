'use client'
import "../../styles/music.css"
import { MusicNote } from "@mui/icons-material";
import Link from 'next/link'; // Import Link from next/link

import { Monoton } from "next/font/google";

const monoton = Monoton({ weight: '400', subsets: ['latin'] })

const MusicContent = () => {
  return (
    <div className="flex flex-row justify-between items-center wrap">
      
      {/* Record Player */}
      <div className="turntable dark:bg-[#127549] bg-[#9a6fa7] transition-all duration-300 drop-shadow-xl transform -rotate-[0.125rad] scale-[150%]">
        <div className="record">
          <div className="inner text-black"></div>
        </div>
        <div className="overlay"></div>
        <div className="arm-holder">
          <div className="arm"></div>
        </div>
        <div className="dial"></div>
      </div>

      {/* Arced Text */}
      <div className={`relative w-64 h-64 flex flex-col justify-center items-center italic dark:text-white scale-[150%] 
      transition-all duration-100 md:translate-x-0 sm:-translate-x-8 xs:-translate-x-16 -translate-x-[50vw] -translate-y-[2vh] ${monoton.className}`}>

        <Link href="https://soundcloud.com/n-510" className="transition-all duration-300 absolute top-[2vh] transform rotate-[-15deg] dark:bg-white/20 bg-white/50 hover:scale-[105%] hover:rotate-[-3deg] rounded-xl">
          <span className="mx-4 text-2xl font-medium squiggle"><MusicNote />{'SOUNDCLOUD'}<MusicNote /></span>
        </Link>

        <Link href="https://drive.google.com/drive/folders/1t1YI0wkNjwHD-9YSGaS7FBUKYPimpeO5?usp=sharing" className="transition-all duration-300 absolute top-[15vh] transform rotate-[0deg] dark:bg-white/20 bg-white/50 hover:scale-[105%] hover:rotate-[-6deg] rounded-xl">
          <span className="mx-4 text-2xl font-medium squiggle"><MusicNote />{'SFX DRIVE'}<MusicNote /></span>
        </Link>

        <Link href="https://drive.google.com/drive/folders/1-KdvXq2Z3vZKKVO_NSM1rVqYGhMJnPGe?usp=sharing" className="transition-all duration-300 absolute top-[28vh] transform rotate-[10deg] dark:bg-white/20 bg-white/50 hover:scale-[105%] hover:rotate-[2deg] rounded-xl">
          <span className="mx-4 text-2xl font-medium squiggle"><MusicNote />{'SHEET MUSIC DRIVE'}<MusicNote /></span>
        </Link>

      </div>
    </div>
  );
};

export default MusicContent;
