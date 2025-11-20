
import * as Icons from "lucide-react";
import skills from "../../data/profile.json";


export default function SkillsPremium() {
  const renderSection = (title, items) => (
    <section className="container mb-12  ">
      <h3 className="  font-semibold  m-auto mb-6 mt-6 lg:text-2xl">{title}</h3>
      <div className="grid grid-row   m-auto gap-4  md:grid-cols-2 lg:grid-cols-3 ">
        {items.map((item, index) => {
          const Icon = Icons[item.icon];
          return (
            <div
              key={index}
              className=" container flex items-center gap-4 p-10 border border-blue-700 rounded-xl
                         hover:border-white hover:scale-105 transition cursor-default"
            >
              <Icon size={26} className="text-blue-700" />
              <p className=" text-sm">{item.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
  return (
    <div className=" space-y-16">
      {renderSection("Core Skills", skills.coreSkills)}
      {renderSection("Tools I Use Daily", skills.toolsDaily)}
      {renderSection("Currently Learning", skills.currentlyLearning)}
    </div>
  );
}