import React from 'react';

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-500/10 text-green-400 border-green-500/20';
    case 'In Development':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    case 'planned':
      return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    default:
      return 'bg-gray-500/10 text-gray-400';
  }
};

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1">
      
      {/* Header: Kategorie & Status */}
      <div className="p-6 pb-0 flex justify-between items-start">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
          <img src={project.category.icon} alt={project.category.name} className="w-4 h-4 grayscale opacity-70" />
          {project.category.name}
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
      </div>

      {/* Body: Titel & Beschreibung */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features Liste */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-300 mb-3">Features:</h4>
          <ul className="grid grid-cols-1 gap-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-slate-400">
                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech Stack */}
      <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-700/50 flex items-center gap-4 overflow-x-auto">
        {project.technologies.map((tech, idx) => (
          <div key={idx} className="flex items-center gap-2 group/tech" title={tech.name}>
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className="w-6 h-6 transition-transform group-hover/tech:scale-110" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}