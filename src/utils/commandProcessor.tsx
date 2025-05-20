import React from 'react';
import { resumeData } from '../data/resumeData';
import ProjectDisplay from '../components/ProjectDisplay';

export const processCommand = (command: string, currentDirectory: string): React.ReactNode => {
  const cmd = command.trim().toLowerCase();
  const args = cmd.split(' ');
  const baseCommand = args[0];
  
  // Process commands
  switch (baseCommand) {
    case 'help':
      return (
        <div>
          <p className="text-terminal-purple font-bold mb-2">Available Commands:</p>
          <p className="mb-1"><span className="text-terminal-yellow">help</span> - Show this help message</p>
          <p className="mb-1"><span className="text-terminal-yellow">ls</span> - List directories</p>
          <p className="mb-1"><span className="text-terminal-yellow">cat [section]</span> - View content (about, skills, experience, projects/[project_name], contact)</p>
          <p className="mb-1"><span className="text-terminal-yellow">clear</span> - Clear the terminal</p>
          <p className="text-terminal-comment">Example: <span className="text-terminal-foreground italic">cat about</span> or <span className="text-terminal-foreground italic">cat projects/image_processor</span></p>
        </div>
      );
      
    case 'ls':
      if (args[1] === 'projects') {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {Object.keys(resumeData.projects).map((key) => (
              <span key={key} className="text-terminal-cyan">{key}</span>
            ))}
          </div>
        );
      } else {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <span className="text-terminal-cyan">/about</span>
            <span className="text-terminal-cyan">/skills</span>
            <span className="text-terminal-cyan">/experience</span>
            <span className="text-terminal-cyan">/projects</span>
            <span className="text-terminal-cyan">/contact</span>
          </div>
        );
      }
      
    case 'cat':
      if (!args[1]) {
        return <p className="text-terminal-red">Error: Please specify what to display (e.g., cat about)</p>;
      }
      
      // Handle projects with path notation
      if (args[1].startsWith('projects/')) {
        const projectName = args[1].split('/')[1];
        if (!projectName) {
          return <p className="text-terminal-red">Error: Please specify a project name (e.g., cat projects/image_processor)</p>;
        }
        
        const project = resumeData.projects[projectName];
        if (!project) {
          return <p className="text-terminal-red">Error: Project not found</p>;
        }
        
        return <ProjectDisplay project={project} />;
      }
      
      switch (args[1]) {
        case 'about':
          return (
            <div>
              <p className="text-terminal-purple font-bold mb-2">About Me</p>
              <p className="mb-3">{resumeData.about}</p>
              <p className="text-terminal-purple font-bold mb-2">Education</p>
              <p>{resumeData.education.degree}</p>
              <p className="text-terminal-comment mb-2">{resumeData.education.period}</p>
            </div>
          );
          
        case 'skills':
          return (
            <div>
              <p className="text-terminal-purple font-bold mb-2">Skills</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {resumeData.skills.map((skill, index) => (
                  <p key={index} className="text-terminal-yellow">{skill}</p>
                ))}
              </div>
            </div>
          );
          
        case 'experience':
          return (
            <div>
              <p className="text-terminal-purple font-bold mb-2">Professional Experience</p>
              <p className="text-terminal-green font-bold">{resumeData.experience.title} @ {resumeData.experience.company}</p>
              <p className="text-terminal-comment mb-2">{resumeData.experience.period}</p>
              <ul className="list-disc list-inside pl-2">
                {resumeData.experience.description.map((item, index) => (
                  <li key={index} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
          );
          
        case 'contact':
          return (
            <div>
              <p className="text-terminal-purple font-bold mb-2">Contact Information</p>
              <p className="mb-1">
                <span className="text-terminal-yellow">Email: </span>
                <a href={`mailto:${resumeData.contact.email}`} className="text-terminal-cyan hover:underline">
                  {resumeData.contact.email}
                </a>
              </p>
              <p className="mb-1">
                <span className="text-terminal-yellow">GitHub: </span>
                <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
                  {resumeData.contact.github.replace('https://github.com/', '')}
                </a>
              </p>
              <p className="mb-1">
                <span className="text-terminal-yellow">LinkedIn: </span>
                <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
                  {resumeData.contact.linkedin.replace('https://linkedin.com/in/', '')}
                </a>
              </p>
            </div>
          );
          
        case 'projects':
          return (
            <div>
              <p className="mb-2">Use <span className="text-terminal-yellow">ls projects</span> to see all projects</p>
              <p>Then use <span className="text-terminal-yellow">cat projects/[project_name]</span> to view details</p>
            </div>
          );
          
        default:
          return <p className="text-terminal-red">Error: Section '{args[1]}' not found</p>;
      }
      
    case 'clear':
      return <></>;
      
    default:
      return <p className="text-terminal-red">Command not found: {baseCommand}. Type 'help' for available commands.</p>;
  }
};