import React from 'react';

const HeroSection = ({ data }) => {
  // Wir nehmen das erste Objekt aus dem "about" Array
  const profile = data.about[0];
  
  // Wir nutzen den letzten Satz aus der Bio als Hero-Text, da er am prägnantesten ist
  const heroText = profile.bio[3]; 

  // GitHub URL finden (falls vorhanden)
  

  return (
    <header className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Linke Seite: Text */}
        <div className="flex-1 space-y-6">
          {/* Badge / Rolle */}
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
            {profile.role}
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight ">
            Design meets code.<br />
            <span className="text-indigo-600">Clear & detailed.</span>
          </h1>

          {/* Intro Text */}
          <p className="text-lg text-slate-600 leading-relaxed">
            Hi, I am <strong>{profile.name}</strong>. {heroText}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="/contact"
              className="px-6 py-3 cosmic-button transition shadow-lg shadow-slate-900/20"
            >
              Get In Touch
            </a>
            <a 
              href="https://github.com/Sinthujan-Sivanantham"
              className="px-6 py-3 rounded-4xl border border-slate-300 text-slate-700 bg-white  font-medium hover:border-slate-400 hover:bg-slate-50 transition"
            >
              GitHub Profil
            </a>
          </div>
        </div>

        {/* Rechte Seite: Bild */}
        <div className="w-48 h-48 md:w-80 md:h-80 relative shrink-0 group">
          {/* Dekorativer Hintergrund-Klecks */}
          <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition duration-500"></div>
          
          {/* Profilbild */}
          <img 
            src={profile.photo} 
            alt={profile.name} 
            className="relative w-full h-full object-cover rounded-2xl shadow-2xl rotate-3 group-hover:rotate-0 transition duration-500 bg-slate-200 border-4 border-white"
          />
        </div>

      </div>
    </header>
  );
};

export default HeroSection;