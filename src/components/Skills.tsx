
import React from 'react';
import { Card, CardContent } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React 18", level: 5, color: "#61DAFB" },
        { name: "Next.js 14", level: 4, color: "#000000" },
        { name: "TypeScript", level: 4, color: "#3178C6" },
        { name: "Vite", level: 4, color: "#646CFF" },
        { name: "Tailwind CSS", level: 5, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend", 
      skills: [
        { name: "Supabase", level: 4, color: "#3ECF8E" },
        { name: "PHP", level: 4, color: "#777BB4" },
        { name: "Node.js", level: 3, color: "#339933" },
        { name: "MySQL", level: 4, color: "#4479A1" },
        { name: "PostgreSQL", level: 3, color: "#336791" },
      ]
    },
    {
      title: "Web3 & Blockchain",
      skills: [
        { name: "Solidity", level: 3, color: "#363636" },
        { name: "Ethers.js", level: 3, color: "#29ABE2" },
        { name: "Hardhat", level: 3, color: "#FFF100" },
        { name: "IPFS", level: 3, color: "#65C2CB" },
      ]
    },
    {
      title: "UI Libraries",
      skills: [
        { name: "shadcn/ui", level: 5, color: "#000000" },
        { name: "Radix UI", level: 4, color: "#161618" },
        { name: "Headless UI", level: 4, color: "#66A3FF" },
        { name: "Flowbite", level: 3, color: "#1C64F2" },
      ]
    },
    {
      title: "Dev Tools",
      skills: [
        { name: "Git/GitHub", level: 4, color: "#F05032" },
        { name: "Vercel", level: 4, color: "#000000" },
        { name: "ESLint", level: 4, color: "#4B32C3" },
        { name: "Cursor", level: 4, color: "#000000" },
      ]
    }
  ];

  const renderStars = (level) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-sm ${i < level ? 'text-yellow-400' : 'text-gray-600 dark:text-gray-500'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="skills" className="relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-8 text-center" data-aos="fade-up">
        Main Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <Card
            key={categoryIndex}
            className="bg-gray-800/50 dark:bg-gray-700/50 border-gray-700 dark:border-gray-600 backdrop-blur-sm hover:bg-gray-800/70 dark:hover:bg-gray-700/70 transition-all duration-300"
            data-aos={categoryIndex % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={categoryIndex * 100}
            data-aos-duration="1000"
          >
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white group-hover:scale-110 transition-transform duration-200"
                          style={{ backgroundColor: skill.color }}
                        >
                          {skill.name.charAt(0)}
                        </div>
                        <span className="text-gray-200 dark:text-gray-100 text-sm">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 ml-7">
                      {renderStars(skill.level)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
