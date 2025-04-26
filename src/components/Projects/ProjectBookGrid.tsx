import React, { useState } from 'react';
import ProjectNotebook from './ProjectNotebook';
import { NotebookData } from '@/types/notebook';
import { Close } from '@mui/icons-material';
import NotebookPage from './NotebookPage';
import "../../styles/wallet.css"

interface NotebookGridProps {
  notebooks: NotebookData[];
  selectedNotebook: number;
  setSelectedNotebook: Function;
  scrollPosition: number
}

const ProjectBookGrid: React.FC<NotebookGridProps> = ({ notebooks, selectedNotebook, setSelectedNotebook, scrollPosition }) => {

  const translate = Math.floor(scrollPosition/10) + 5;

  return (
    <div className="relative">
      {(selectedNotebook > 0) && (
        <div 
          className='dark:bg-white/25 bg-black/20 rounded-2xl h-full w-full absolute z-10 transition-all duration-300'
        >
          <div className='flex flex-col h-full fadeInFromBottom'>
            <div className={`mx-auto transform`} style={{ transform: `translateY(${translate}vh)` }}>
              <NotebookPage
                image={notebooks[selectedNotebook-1].image}
                title={notebooks[selectedNotebook-1].title}
                description={notebooks[selectedNotebook-1].description}
                githubLink={notebooks[selectedNotebook-1]?.githubLink || ""}
                descriptionFull={notebooks[selectedNotebook-1].descriptionFull || ""}
                src={notebooks[selectedNotebook-1].src || ""}
                setSelectedNotebook={setSelectedNotebook}
                images={notebooks[selectedNotebook-1].images || []}
              />
            </div>

          </div>
          
          
          
        </div>
      )}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 p-4">
        {notebooks.map((notebook, index) => (
          <div className='scale-[95%] hover:scale-100 transition-all duration-300' key={index}>
            <ProjectNotebook
              index={index}
              image={notebook.image}
              title={notebook.title}
              description={notebook.description}
              coverNum={index}
              setSelectedNotebook={setSelectedNotebook}
            />
          </div> 
        ))}
      </div>
    </div>
  );
};

export default ProjectBookGrid;
