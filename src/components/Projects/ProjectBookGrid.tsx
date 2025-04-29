import React, { useState } from 'react';
import ProjectNotebook from './ProjectNotebook';
import { NotebookData } from '@/types/notebook';
import "../../styles/wallet.css"

interface NotebookGridProps {
  notebooks: NotebookData[];
  setSelectedNotebook: Function;
}

const ProjectBookGrid: React.FC<NotebookGridProps> = ({ notebooks, setSelectedNotebook }) => {

  let translate = 0
  console.log(translate);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-4">
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
