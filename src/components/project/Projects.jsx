import React from 'react';
import ProjectCard from './ProjectCard';

import projectData from '../../data/Projects.json'; 

export default function Projects() {
  return (
    <div className=" text-slate-200 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Sektion */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
           My Projects
          </h1>
          <p className="text-lg text-slate-400 text-foreground max-w-2xl mx-auto">
           An overview of my current work in web development, design, and full-stack programming.
          </p>
        </div>

        {/* Grid Layout - Hier wird über das JSON Array iteriert */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-2xl  hover:shadow-xl hover:-translate-y-1 
        transition-all duration-300  dark:shadow-[0_0_22px_rgba(255,255,255,0.15)]">
          {projectData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
}