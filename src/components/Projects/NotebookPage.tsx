import React, { useState } from 'react';
import "../../styles/notebook.css";
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { NotebookData } from '../../types/notebook';
import { useMenu } from '@/context/MenuContext';
import { Caveat, Handlee } from 'next/font/google';

import NextJsImage from '../Lightbox/NextJSImage';
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

const caveat = Caveat({subsets: ['latin']});
const handlee = Handlee({weight: '400', subsets: ['latin']} );

import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const NotebookPage: React.FC<NotebookData> = ({ image, title, description, githubLink, descriptionFull, src, setSelectedNotebook, images, menuID }) => {

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);  
  const { menuDataID, menuHandler } = useMenu();

  const slides:StaticImageData[] = [];
  images.forEach((image:string) => {
    slides.push({src: `${image}`, height: 1080, width: 1920});
  })

  const changeIndexUp = () => {

    let newIndex;
    if (selectedIndex === images.length-1){
      newIndex = 0;
    }
    else {
      newIndex = selectedIndex + 1;
    }
    setSelectedIndex(newIndex);
  }

  const changeIndexDown = () => {
    let newIndex;
    if (selectedIndex === 0){
      newIndex = (images.length  - 1);
    }
    else {
      newIndex = selectedIndex - 1;
    }
    setSelectedIndex(newIndex);
  }

  return (
    <>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        render={{ slide: NextJsImage }}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        index={selectedIndex}
        on={{ view: ({ index: currentIndex }) => setSelectedIndex(currentIndex) }}
      />
      <div className=''>
        <div 
          className={`paper scale-[60%] sm:scale-[90%] sm:scale-[90%] md:scale-[95%] mx-auto w-[70vh] h-[100vh] bg-white rounded-xl shadow-[rgba(0,0,15,0.3)_10px_-4px_4px_3px] flex flex-col pb-[50%]
          border-l-8 border-2 border-[rgba(0,0,0,0.6)]`} // Add relative positioning to parent container
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedNotebook(-1)}
            className="absolute top-4 right-8 text-4xl font-bold text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            &times;
          </button>

          <h2 className={`py-4 text-xl lg:text-2xl xl:text-3xl font-bold text-dark ${handlee.className}`}>{title}</h2>

          <div className="w-full max-h rounded-xl py-1 flex flex-row items-center justify-between">
            <button className='w-[5%]' onClick={changeIndexDown}>
              <ArrowBackIosNew />
            </button>
            <img
              src={`${images[selectedIndex]}`}
              alt={title}
              className="w-auto h-auto max-w-[50vh] max-h-[32vh] object-contain rounded-xl inset-shadow-xl border-2 border-[rgba(0,0,0,0.3)] cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            />
            <button className='w-[5%]' onClick={changeIndexUp}>
              <ArrowForwardIos />
            </button>
          </div>

          <div className="py-4 px-6 h-[42%]">
            <p className={`text-dark mt-2 h-full overflow-auto ${caveat.className}`}>{descriptionFull}</p>
          </div>

          <div className='mt-auto mb-6 flex flex-row gap-4'>
            {(githubLink != "") ? 
              <Link
                href={githubLink}
                className="inline-block w-1/2 rounded-xl bg-black/80 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 hover:scale-105"
              >
                <span className="-ml-2 flex flex-row justify-center items-center gap-4">
                  <Image
                    src={'/images/github.png'}
                    alt="github logo"
                    width={30}
                    height={30}
                    className="invert dark:block"
                  />
                  <span>View GitHub</span>
                </span>
              </Link>
              : <></>
            }
            {(src != "") ? 
              <Link
                className="rounded-xl w-1/2 bg-gradient-to-r dark:from-green-600/80 dark:to-cyan-600/80 
                from-[#8300e7]/80 hover:from-[#8300e7] dark:hover:from-green-600 dark:hover:to-cyan-600 to-[#0612ba]/80 hover:to-[#0612ba] px-8 py-4 
                text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105"
                href={src}
                onClick={() => menuHandler(menuID)}
              >
                <span className="-ml-2 flex flex-row justify-center items-center gap-4 shadow-2xl dark:shadow-green-500/50 shadow-indigo-500/50">
                  <span>Visit Project</span>
                </span>
              </Link>
              : <></>
            }
          </div>
          
        </div>
      </div>
      
    </>
    
  );
};

export default NotebookPage;
