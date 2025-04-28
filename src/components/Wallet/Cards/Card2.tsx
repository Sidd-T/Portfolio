import React from "react";
import { Piano } from "@mui/icons-material";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ['latin'] });

const Card2 = ({ cardOpen }: { cardOpen: boolean }) => {
  return (
    <div className="bg-gradient-to-tr from-gray-500 to-gray-900 text-white rounded-2xl w-full h-full flex flex-col justify-between">
      <div className={`${orbitron.className} text-xs xs:text-md md:text-lg xs:p-4 flex flex-row items-center bg-[url('https://www.transparenttextures.com/patterns/black-thread.png')] rounded-t-2xl`}>
        <div className="mr-auto">
          <Image src={`/images/logo/logo.svg`} alt={'logo'} width={0} height={0} layout="responsive" className="rounded-lg object-contain w-[50%] max-w-xs scale-[60%] xs:scale-[70%] sm:scale-[90%] md:scale-[100%]" />
        </div>
        <div className="text-xs sm:text-md lg:text-lg">About This Site</div>
      </div>
      
      <div className="overflow-auto flex-grow flex flex-col gap-2 pt-2 sm:pt-4 xl:pt-8 2xl:pt-12 bg-[url('https://www.transparenttextures.com/patterns/black-thread.png')]"> 
        <Link
          href="https://github.com/NextJSTemplates/startup-nextjs"
          className=" inline-block rounded-xl bg-black mx-auto w-[90%] xs:w-[60%] sm:w-[50%] py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5 hover:scale-105 transition-all"
        >
          <span className="w-full sm:h-full -ml-2 flex flex-row justify-center items-center gap-4 ">
            <Image
              src={'/images/github.png'}
              alt="github logo"
              width={30}
              height={30}
              className="invert dark:block scale-[70%] ml-2 xs:ml-0 xs-scale-[100%]"
            />
            <span className="text-xs xs:text-sm sm:text-md">{'Link to GitHub Repo for Template'}</span>
          </span>
        </Link>

        <div className="flex flex-col justify-between gap-2 lg:gap-2 xl:gap-4 my-auto w-[90%] mx-auto"> 
          <div className={`${!cardOpen ? 'hidden' : ''} text-xs xs:text-xs sm:text-lg md:text-lg lg:text-sm xl:text-md 2xl:text-lg self-center text-center xl:mb-8`}>
            {`This site uses React Typescript with NextJS.`}
            <br />
            {`Styling is done with Tailwind, and uses Material Icons.`}
            <br />
            {`The initial code was taken from the NextJS Startup template, see repo above.`}
          </div>
          <div className="flex flex-row gap-2">
            <Link
              href="https://react.dev/"
              className="inline-block rounded-xl bg-black mx-auto p-3 bg-transparent hover:scale-150 transition-all duration-300"
            >
                <Image
                  src={'/images/react.png'}
                  alt="github logo"
                  width={30}
                  height={30}
                  className=""
                />
            </Link>
            <Link
              href="https://www.typescriptlang.org/"
              className="inline-block rounded-xl bg-black mx-auto p-3 bg-transparent hover:scale-150 transition-all duration-300"
            >
                <Image
                  src={'/images/typescript.png'}
                  alt="github logo"
                  width={30}
                  height={30}
                  className=""
                />
            </Link>
            <Link
              href="https://nextjs.org/"
              className="inline-block rounded-xl bg-black mx-auto p-3 bg-transparent hover:scale-150 transition-all duration-300"
            >
                <Image
                  src={'/images/nextjs.png'}
                  alt="github logo"
                  width={30}
                  height={30}
                  className=""
                />
            </Link>
            <Link
              href="https://tailwindcss.com/"
              className="inline-block rounded-xl bg-black mx-auto p-3 bg-transparent hover:scale-150 transition-all duration-300"
            >
                <Image
                  src={'/images/tailwind.png'}
                  alt="github logo"
                  width={30}
                  height={30}
                  className="translate-y-1"
                />
            </Link>
            <Link
              href="https://mui.com/"
              className="inline-block rounded-xl bg-black mx-auto p-3 bg-transparent hover:scale-150 transition-all duration-300"
            >
                <Image
                  src={'/images/materialui.png'}
                  alt="github logo"
                  width={30}
                  height={30}
                  className=""
                />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
