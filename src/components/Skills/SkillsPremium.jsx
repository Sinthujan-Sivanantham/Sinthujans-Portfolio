import React from "react";
import * as Icons from "lucide-react";
import skills from "../../data/skills.json";

export default function SkillsPremium() {
  
  // Hilfsfunktion zum Rendern einer Sektion
  const renderSection = (title, items) => {
    if (!items || items.length === 0) return null;

    return (
      <section key={title} className="container mx-auto py-12 px-4">
        {/* Titel mit Gradient */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400 mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            // Icon dynamisch laden
            const IconComponent = Icons[item.icon];

            // Fallback, falls Icon-Name falsch ist oder fehlt
            if (!IconComponent) return null;

            return (
              <div
                key={item.name || index}
                className="group flex flex-col gap-4 p-6 rounded-2xl dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 text-for
                shadow-lg hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300 dark:shadow-[0_0_22px_rgba(255,255,255,0.15)]"
              >
                <div className="flex items-center justify-between">
                  {/* Icon Container */}
                  <div
                    className="w-12 h-12 rounded-xl flex justify-center items-center shadow-sm transition-transform group-hover:scale-110"
                    style={{ 
                      backgroundColor: item.backgroundColor || '#e0e7ff', // Fallback Farbe
                      color: '#1f2937' // Dunkle Icon Farbe für Kontrast
                    }}
                  >
                    <IconComponent size={24} />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm   text-gray-900 dark:text-white leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="space-y-8 pb-20">
      {renderSection("Core Skills", skills.coreSkills)}
      {renderSection("Tools I Use Daily", skills.toolsDaily)}
      {renderSection("Currently Learning", skills.currentlyLearning)}
    </div>
  );
}