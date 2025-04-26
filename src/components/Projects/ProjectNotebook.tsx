import React, { ReactNode, useMemo } from 'react';
import "../../styles/notebook.css";

import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({subsets: ['latin']})


interface NotebookProps {
  index: number;
  image: string;
  title: string;
  description: string | ReactNode;
  coverNum: number;
  setSelectedNotebook: Function;
}

const ProjectNotebook: React.FC<NotebookProps> = ({ index, image, title, description, coverNum, setSelectedNotebook }) => {
  // Memoize the random rotation to prevent it from changing on every re-render
  const randomRotation = useMemo(() => `${Math.floor(Math.random() * 5)}deg`, []);

  return (
    <div 
      className={`mt-6 mx-auto w-[50vh] h-[70vh] bg-white rounded-xl shadow-[rgba(0,0,15,0.3)_10px_-4px_4px_3px] flex flex-col pb-[50%] notebook-cover-${coverNum % 4} 
      border-l-8 border-2 border-[rgba(0,0,0,0.6)]`}
      style={{ transform: `rotate(${randomRotation})` }} // Apply the random rotation
      onClick={() => { setSelectedNotebook(index + 1); }}
    >
      {/* Image section */}
      <div className="py-4 px-6 w-full h-full rounded-xl">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-xl inset-shadow-xl border-2 border-[rgba(0,0,0,0.3)]" />
      </div>
      {/* Text section */}
      <div className="py-4 px-6">
        <h2 className={`text-xl lg:text-2xl xl:text-3xl font-semibold text-white ${orbitron.className}`}>{title}</h2>
        <p className="text-white mt-2 overflow-auto">{description}</p>
      </div>
    </div>
  );
};

export default ProjectNotebook;
