
import React from 'react';
import { Card, CardContent } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React 18", color: "#61DAFB" },
        { name: "Next.js 14", color: "#000000" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Vite", color: "#646CFF" },
        { name: "Tailwind CSS", color: "#06B6D4" },
      ]
    },
    {
      title: "Backend", 
      skills: [
        { name: "Supabase", color: "#3ECF8E" },
        { name: "PHP", color: "#777BB4" },
        { name: "Node.js", color: "#339933" },
        { name: "MySQL", color: "#4479A1" },
        { name: "PostgreSQL", color: "#336791" },
      ]
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "Claude API", color: "#D97706" },
        { name: "OpenAI GPT", color: "#10B981" },
        { name: "Google Gemini", color: "#2563EB" },
        { name: "Prompt Engineering", color: "#8B5CF6" },
        { name: "AI Video Generation (Kling/Veo3)", color: "#EC4899" },
        { name: "AI Image Generation", color: "#F43F5E" },
        { name: "n8n", color: "#FF6C37" },
        { name: "LLM Integration", color: "#14B8A6" },
      ]
    },
    {
      title: "Web3 & Blockchain",
      skills: [
        { name: "Solidity", color: "#363636" },
        { name: "Ethers.js", color: "#29ABE2" },
        { name: "Hardhat", color: "#FFF100" },
        { name: "IPFS", color: "#65C2CB" },
      ]
    },
    {
      title: "UI Libraries",
      skills: [
        { name: "shadcn/ui", color: "#000000" },
        { name: "Radix UI", color: "#161618" },
        { name: "Headless UI", color: "#66A3FF" },
        { name: "Flowbite", color: "#1C64F2" },
      ]
    },
    {
      title: "Dev Tools",
      skills: [
        { name: "Git/GitHub", color: "#F05032" },
        { name: "Vercel", color: "#000000" },
        { name: "ESLint", color: "#4B32C3" },
        { name: "Cursor", color: "#000000" },
      ]
    }
  ];

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
                    className="group cursor-pointer flex items-center gap-2"
                  >
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
                      style={{ backgroundColor: skill.color }}
                    >
                      {skill.name.charAt(0)}
                    </div>
                    <span className="text-gray-200 dark:text-gray-100 text-sm">
                      {skill.name}
                    </span>
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
