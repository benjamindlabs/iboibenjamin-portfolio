
import React from 'react';
import { Card, CardContent } from './ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Development Certificate",
      company: "Edlivky Coding Academy",
      period: "2024",
      description: "Comprehensive frontend development training with hands-on projects and modern web technologies",
      skills: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"]
    },
    {
      title: "Backend Development Certificate",
      company: "Edlivky Coding Academy",
      period: "2025",
      description: "Advanced backend development specialization with modern server-side technologies",
      skills: ["PHP OOP", "Supabase", "MySQL", "REST APIs", "Database Design"]
    },
    {
      title: "Team Leadership & Project Management",
      company: "Professional Development",
      period: "2024 - Present",
      description: "Proven experience leading development teams and managing technical projects from conception to deployment",
      skills: ["Team Leadership", "Project Management", "Code Review", "Mentoring", "Agile Methodology"]
    },
    {
      title: "AI & Automation Expertise",
      company: "Self-Directed Learning",
      period: "2023 - Present",
      description: "Specialized knowledge in AI tools and automation workflows for enhanced productivity and development",
      skills: ["n8n", "ManyChat", "Runway ML", "Midjourney", "Cursor", "v0.dev"]
    }
  ];

  return (
    <section id="experience" className="relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-8 text-center" data-aos="fade-up">
        Certifications & Expertise
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="bg-gray-800/50 dark:bg-gray-700/50 border-gray-700 dark:border-gray-600 backdrop-blur-sm hover:bg-gray-800/70 dark:hover:bg-gray-700/70 transition-all duration-300 hover:scale-105"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 150}
            data-aos-duration="1000"
          >
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-gray-100">
                    {exp.title}
                  </h3>
                  <p className="text-emerald-400 font-semibold text-sm">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 dark:text-gray-300 text-xs">
                    {exp.period}
                  </p>
                </div>
                
                <p className="text-gray-300 dark:text-gray-200 leading-relaxed text-sm">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-emerald-400/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
