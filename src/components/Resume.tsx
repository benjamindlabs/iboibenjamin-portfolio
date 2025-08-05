
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { Download, Phone, Mail, MapPin, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const generatePDF = () => {
    if (!resumeRef.current) return;

    const options = {
      margin: 0.5,
      filename: 'Iboi_Benjamin_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        allowTaint: false
      },
      jsPDF: {
        unit: 'in',
        format: 'a4',
        orientation: 'portrait'
      }
    };

    html2pdf().set(options).from(resumeRef.current).save();
  };

  return (
    <>
      {/* Hidden Resume Preview Card for PDF generation only */}
      <div className="fixed -top-[9999px] left-0 opacity-0 pointer-events-none">
        <Card ref={resumeRef} className="bg-white text-black p-8 mb-6 shadow-2xl w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 border-b border-gray-300 pb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">IBOI BENJAMIN ORIAIFO</h1>
          <p className="text-lg text-gray-600 font-medium">FULL STACK DEVELOPER</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-3 h-3 text-blue-600" />
                </div>
                CONTACT
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(+234) 9013997660</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>benjamindlabs@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Benin City, Edo State, Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>github.com/benjamindlabs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                  <span>iboibenjamin-portfolio.vercel.app/</span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">SKILLS</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <span className="font-medium">• Frontend:</span> React 18, Next.js 14, TypeScript, JavaScript, Vite
                </div>
                <div>
                  <span className="font-medium">• Backend:</span> Supabase (Auth/DB), PHP, Node.js, REST APIs, MySQL, PostgreSQL
                </div>
                <div>
                  <span className="font-medium">• Web3:</span> Solidity, Ethers.js, IPFS/Pinata, Hardhat, OpenZeppelin
                </div>
                <div>
                  <span className="font-medium">• UI Libraries:</span> shadcn/ui, Radix UI, Flowbite, Headless UI
                </div>
              </div>
            </div>

            {/* Certification Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">CERTIFICATION</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <div className="font-medium">Edlivky Coding Academy -</div>
                  <div className="text-gray-600">Benin City, Nigeria</div>
                  <div className="mt-2">
                    <div>• Frontend Development Certificate - 2024</div>
                    <div>• Backend Development (PHP) Certificate - 2024</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">SOFT SKILLS</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• Communication & Team Leadership</div>
                <div>• Self-Learning & Rapid Adaptation</div>
                <div>• Problem-Solving & Critical Thinking</div>
                <div>• Scalability</div>
                <div>• Problem-Solving & Performance Tuning</div>
                <div>• Creative Thinking & Initiative</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Summary */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                PROFILE SUMMARY
              </h3>
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-3">
                  Full-stack developer skilled in crafting and deploying modern web applications.
                  Proficient in building scalable solutions using React, Next.js, and PHP.
                  Strong expertise in performance optimization, secure backend design, and clean code workflows.
                </p>
                <p className="mb-3">
                  Also an AI automation expert, with capabilities in AI-based media tools and automation.
                </p>
                <p>
                  Known for leading with clarity and delivering with precision.
                </p>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">WORK EXPERIENCE</h3>
              <div className="space-y-6">
                {/* ArtMint Project */}
                <div>
                  <h4 className="font-bold text-gray-900">ArtMint NFT Marketplace</h4>
                  <p className="text-sm text-gray-600 mb-2">art-mint.vercel.app</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Decentralized NFT platform for minting, listing, and trading digital assets.
                    Built with Next.js 14, Solidity, IPFS, and Supabase. Features wallet integration,
                    smart contract execution, and secure asset storage.
                  </p>
                </div>

                {/* Hospital System */}
                <div>
                  <h4 className="font-bold text-gray-900">Edlivky Hospital Admin System</h4>
                  <p className="text-sm text-gray-600 mb-2">https://github.com/benjamindlabs/edlivkyhospital</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Comprehensive hospital management dashboard built with PHP, Tailwind CSS, and MySQL.
                    Features include patient records, appointment tracking, charts, and secure user authentication.
                  </p>
                </div>

                {/* E-commerce */}
                <div>
                  <h4 className="font-bold text-gray-900">Rare Decor E-Commerce Site</h4>
                  <p className="text-sm text-gray-600 mb-2">raredecor.vercel.app</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    A sleek online store for luxury interior decor, featuring user authentication,
                    product browsing, shopping cart, and seamless checkout. Built with React, Supabase, and shadcn/ui.
                  </p>
                </div>

                {/* NairaLend */}
                <div>
                  <h4 className="font-bold text-gray-900">NairaLend Financial Platform</h4>
                  <p className="text-sm text-gray-600 mb-2">nairalend.vercel.app</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    A responsive loan application system with user authentication,
                    role-based access control (RBAC), and an application tracking system.
                    Built with React, Supabase, and modern validation libraries.
                  </p>
                </div>

                {/* Coding Academy */}
                <div>
                  <h4 className="font-bold text-gray-900">Edlivky Coding Academy</h4>
                  <p className="text-sm text-gray-600 mb-2">edlivkycodingschool.vercel.app</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Built a modern education platform with interactive course browsing,
                    theme switching, and clean UI components powered by React and Radix UI.
                  </p>
                </div>
              </div>
            </div>

            {/* AI & Automation Expertise */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI & AUTOMATION EXPERTISE</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>• Built AI tools using ManyChat, integrated with external APIs</div>
                <div>• Edited and enhanced videos/images using Runway ML, Pika, and Midjourney</div>
                <div>• Strategic use of tools like Cursor, v0.dev, and AI agents for development acceleration</div>
                <div>• Streamlined workflows and pipeline acceleration</div>
              </div>
            </div>
          </div>
        </div>
        </Card>
      </div>
    </>
  );
};

export default Resume;
