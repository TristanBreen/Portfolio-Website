import React from 'react';
import { Project } from '../data/resumeData';

interface ProjectDisplayProps {
  project: Project;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ project }) => {
  return (
    <div>
      <p className="text-terminal-purple font-bold text-lg mb-2">{project.name}</p>
      <p className="mb-3">{project.description}</p>
      
      {project.technologies && (
        <div className="mb-3">
          <p className="text-terminal-comment mb-1">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="text-terminal-yellow px-2 py-1 bg-terminal-selection rounded-md text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {project.features && (
        <div className="mb-3">
          <p className="text-terminal-comment mb-1">Key Features:</p>
          <ul className="list-disc list-inside pl-2">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-1">{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectDisplay