
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ArtMint NFT Marketplace",
      description: "Decentralized NFT platform with minting and trading. Smart contracts using OpenZeppelin and Hardhat. Metadata stored on Supabase and IPFS via Pinata. MetaMask wallet integration with gas estimation.",
      image: "/uploads/artmint.png",
      category: "Web3",
      stats: "Next.js 14 · Solidity · Supabase · Ethers.js · IPFS",
      liveUrl: "https://art-mint.vercel.app/",
      githubUrl: "https://github.com/benjamindlabs/ArtMint.git"
    },
    {
      id: 2,
      title: "Rare Decor E-Commerce",
      description: "High-end decor shop with cart, checkout, and secure login. UI built using shadcn/ui, Embla Carousel. Used Zod and React Hook Form for validation.",
      image: "/uploads/raredecor.png",
      category: "E-Commerce",
      stats: "React 18 · Supabase · Tailwind CSS · Radix UI",
      liveUrl: "https://rare-decor.vercel.app/",
      githubUrl: "https://github.com/benjamindlabs/rare-decor.git"
    },
    {
      id: 3,
      title: "NairaLend Financial Platform",
      description: "Role-based financial dashboard with Supabase RLS. Mobile-first UI with Radix drawers/dialogs. Dark mode toggle included.",
      image: "/uploads/nairalend.png",
      category: "FinTech",
      stats: "React · TypeScript · Supabase · Zod",
      liveUrl: "https://nairalend.vercel.app/",
      githubUrl: "https://github.com/benjamindlabs/NairaLend.git"
    },
    {
      id: 4,
      title: "Edlivky Hospital Admin System",
      description: "Hospital admin dashboard with login and data handling using PHP OOP. Analytics with Chart.js. Led development team.",
      image: "/uploads/edlivkyhospital.png",
      category: "Healthcare",
      stats: "PHP · MySQL · Tailwind CSS · Alpine.js",
      liveUrl: "#",
      githubUrl: "https://github.com/benjamindlabs/edlivkyhospital.git"
    },
    {
      id: 5,
      title: "Edlivky Coding Academy Platform",
      description: "Learning platform with UI built using shadcn/ui + Radix primitives. Carousel features and theming included. Led development team.",
      image: "/uploads/edlivkyschool.png",
      category: "Education",
      stats: "React · TypeScript · Vite · TanStack Query",
      liveUrl: "https://edlivkycodingschool.vercel.app/",
      githubUrl: "https://github.com/benjamindlabs/edlivkyschool.git"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web3':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'E-Commerce':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'FinTech':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Healthcare':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Education':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="relative z-10 py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-4">
          Projects
        </h2>
        <p className="text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in web development, 
          AI integration, and modern technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="bg-gray-800/50 dark:bg-gray-700/50 border-gray-700 dark:border-gray-600 backdrop-blur-sm hover:bg-gray-800/70 dark:hover:bg-gray-700/70 transition-all duration-300 hover:scale-105 overflow-hidden group"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 150}
            data-aos-duration="1000"
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-200 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="text-emerald-400 text-xs font-medium">
                  {project.stats}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 bg-gray-500/10 border-gray-500/30 text-gray-400 hover:bg-gray-500/20"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
