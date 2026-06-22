
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 8,
      title: "Aximind",
      description: "Full-featured AI CRM with conversational interface, memory, automation, voice, and analytics. Built as a single-tenant SaaS with workspace isolation, real-time collaboration, and AI-driven sales intelligence. Designed to replace traditional CRMs with an AI-native experience where users speak and the system acts.",
      image: "/uploads/aximind.png",
      category: "AI",
      stats: "Next.js · TypeScript · Supabase · Groq AI · Vercel · Tailwind CSS · Recharts",
      liveUrl: "https://aximind.vercel.app/",
      githubUrl: "#",
      badge: "AI · LIVE"
    },
    {
      id: 9,
      title: "C³OS Cold Outreach Scraper",
      description: "Lead generation engine that runs daily, scraping 1000+ prospects and sending personalized emails automatically. Built with a modular architecture that makes it easy to add new data sources, proxies, and AI models. Designed for agencies running high-volume cold outreach campaigns with minimal human intervention.",
      image: "/uploads/c3os.png",
      category: "AI",
      stats: "Python · FastAPI · Supabase · Tavily AI · Resend · GitHub Actions · BuiltWith API",
      liveUrl: "https://c3os-scrapper.streamlit.app/",
      githubUrl: "#",
      badge: "AI · LIVE"
    },
    {
      id: 1,
      title: "Phomax",
      description: "Full e-commerce platform for smart glasses with prescription customisation per product, dual payment infrastructure supporting Nigerian customers via Paystack and international customers via Stripe, Apple Pay and Google Pay, Pancake CRM integration for automated sales tracking, and role-based admin controls. Built solo from design to deployment.",
      image: "/uploads/phomax.png",
      category: "E-Commerce",
      stats: "Next.js · Supabase · Paystack · Stripe · Pancake CRM · Vercel",
      liveUrl: "https://www.getphomax.com/",
      githubUrl: "#",
      badge: "COMMERCIAL · LIVE"
    },
    {
      id: 2,
      title: "AutoVision Initiative",
      description: "National web platform for Nigeria's smart glasses access programme managing citizen applications, provider onboarding, appointment scheduling, and eligibility verification at scale. Three user roles with RBAC, real-time monitoring, and optimised SQL pipelines for behaviour analysis.",
      image: "/uploads/autovision.png",
      category: "Government",
      stats: "Next.js · Supabase · PostgreSQL · RBAC · Vercel",
      liveUrl: "https://www.autovisioninitiative.org/",
      githubUrl: "#",
      badge: "COMMERCIAL · LIVE"
    },
    {
      id: 3,
      title: "Fakedar",
      description: "AI-powered document and image authenticity detection tool. Analyses uploaded files to identify signs of manipulation, forgery, or AI generation — with applications in HR, legal, finance, and government verification workflows. Currently in active development.",
      image: "/uploads/fakedar.png",
      category: "AI",
      stats: "AI Vision Models · LLM APIs · Next.js · Supabase",
      liveUrl: "#",
      githubUrl: "#",
      badge: "AI · IN DEVELOPMENT"
    },
    {
      id: 4,
      title: "ArtMint NFT Marketplace",
      description: "Decentralized NFT platform with minting and trading. Smart contracts using OpenZeppelin and Hardhat. Metadata stored on Supabase and IPFS via Pinata. MetaMask wallet integration with gas estimation. Reduced smart contract gas costs by 35% through optimisation.",
      image: "/uploads/artmint.png",
      category: "Web3",
      stats: "Next.js 14 · Solidity · Supabase · Ethers.js · IPFS",
      liveUrl: "https://art-mint.vercel.app/",
      githubUrl: "https://github.com/benjamindlabs/ArtMint.git",
      badge: ""
    },
    {
      id: 5,
      title: "NairaLend Financial Platform",
      description: "Loan management platform with authentication, repayment tracking, and relational data models for the Nigerian fintech space. Improved form completion efficiency by 40% through UX-driven data flow optimisation.",
      image: "/uploads/nairalend.png",
      category: "FinTech",
      stats: "React · TypeScript · Supabase · Zod",
      liveUrl: "https://nairalend.vercel.app/",
      githubUrl: "https://github.com/benjamindlabs/NairaLend.git",
      badge: ""
    },
    {
      id: 6,
      title: "Edlivky Hospital Management System",
      description: "Backend-first hospital management platform with scheduling, secure access control, and operational analytics dashboards. Improved scheduling efficiency by 40% through structured data modelling and role-based access design.",
      image: "/uploads/edlivkyhospital.png",
      category: "Healthcare",
      stats: "PHP · MySQL · Tailwind CSS · Alpine.js",
      liveUrl: "#",
      githubUrl: "https://github.com/benjamindlabs/edlivkyhospital.git",
      badge: ""
    },
    {
      id: 7,
      title: "Rare Decor E-Commerce",
      description: "High-end decor shop with cart, checkout, and secure login. UI built using shadcn/ui, Embla Carousel. Used Zod and React Hook Form for validation.",
      image: "/uploads/raredecor.png",
      category: "E-Commerce",
      stats: "React 18 · Supabase · Tailwind CSS · Radix UI",
      liveUrl: "https://rare-decor.vercel.app/",
      githubUrl: "https://github.com/benjamindlabs/rare-decor.git",
      badge: ""
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
      case 'Government':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'AI':
        return 'bg-violet-500/20 text-violet-400 border-violet-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="relative z-10 py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-4">
          Commercial Projects
        </h2>
        <p className="text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
          Enterprise-grade platforms built for government and businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
        {projects
          .filter((p) => p.title === 'Phomax' || p.title === 'AutoVision Initiative')
          .map((project, index) => (
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
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium border bg-amber-500/20 text-amber-400 border-amber-500/30">
                      {project.badge}
                    </span>
                  )}
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
                    {project.liveUrl !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-gray-500/10 border-gray-500/30 text-gray-400 hover:bg-gray-500/20"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl === "#" && project.githubUrl === "#" && (
                      <div className="flex-1 text-center py-2">
                        <span className="text-gray-500 dark:text-gray-400 text-sm italic">
                          Coming soon
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-4">
          Personal Projects
        </h2>
        <p className="text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
          Independent builds, SaaS products, and experiments across various domains.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects
          .filter((p) => p.title !== 'Phomax' && p.title !== 'AutoVision Initiative')
          .map((project, index) => (
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
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium border bg-amber-500/20 text-amber-400 border-amber-500/30">
                      {project.badge}
                    </span>
                  )}
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
                    {project.liveUrl !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-gray-500/10 border-gray-500/30 text-gray-400 hover:bg-gray-500/20"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl === "#" && project.githubUrl === "#" && (
                      <div className="flex-1 text-center py-2">
                        <span className="text-gray-500 dark:text-gray-400 text-sm italic">
                          Coming soon
                        </span>
                      </div>
                    )}
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
