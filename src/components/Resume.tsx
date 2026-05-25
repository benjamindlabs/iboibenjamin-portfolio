import React, { useRef } from "react";
import "../resume.css";

interface ResumeProps { externalRef?: React.Ref<HTMLDivElement> }

const Resume = ({ externalRef }: ResumeProps) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="resume-container">
      <div className="resume" ref={resumeRef}>
        {/* Header */}
        <h1 className="name">IBOI BENJAMIN</h1>
        <p className="contact">
          📧{" "}
          <a href="mailto:benjamindlabs@gmail.com">
            benjamindlabs@gmail.com
          </a>{" "}
          | 📞 +234 901 399 7660 |{" "}
          <a
            href="https://github.com/benjamindlabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/benjamindlabs
          </a>{" "}
          |{" "}
          <a
            href="https://iboibenjamin-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            iboibenjamin-portfolio.vercel.app
          </a>
        </p>

        {/* Professional Summary */}
        <h2>PROFESSIONAL SUMMARY</h2>
        <p>
          Full-stack developer skilled in designing secure systems, building
          scalable platforms, and optimizing performance to improve speed and
          efficiency. Experienced in integrating AI-driven automation,
          developing Web3 applications, and delivering clean, user-focused
          interfaces.
        </p>

        {/* Professional Experience */}
        <h2>PROFESSIONAL EXPERIENCE</h2>

        <div className="job">
          <h3>
            Fullstack Developer (Contract) | Edlivky Hospital Management System
          </h3>
          <p className="job-meta">
            Healthcare SaaS – Edlivky Medical Center | Feb 2025 – May 2025
          </p>
          <ul>
            <li>
              Built and deployed a modern hospital administration dashboard
              managing hundreds of patient records, streamlining workflows for
              doctors, nurses, and administrators.
            </li>
            <li>
              Developed backend architecture in PHP/MySQL with role-based
              access control, implementing secure authentication and encryption
              measures to protect sensitive patient data.
            </li>
            <li>
              Integrated Chart.js for real-time analytics dashboards, providing
              actionable insights into hospital operations and improving
              decision-making.
            </li>
            <li>
              Reduced appointment scheduling time by 40% through the integration
              of Flatpickr date handling, enhancing the booking experience for
              both staff and patients.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Web3 Fullstack Developer | ArtMint NFT Marketplace</h3>
          <p className="job-meta">Blockchain Startup MVP | Aug 2024 – Present</p>
          <ul>
            <li>
              Designed and developed an Ethereum-based NFT marketplace
              supporting minting, trading, and auctions, enabling artists and
              collectors to transact securely.
            </li>
            <li>
              Created and optimized smart contracts in Solidity with Hardhat and
              OpenZeppelin, reducing gas costs by 35% while ensuring contract
              security and scalability.
            </li>
            <li>
              Integrated IPFS for decentralized storage of media assets and
              Supabase for real-time updates, ensuring seamless marketplace
              functionality.
            </li>
            <li>
              Engineered a Next.js 14 + Tailwind CSS UI, improving page load
              speed by 35% and enhancing user experience with a responsive,
              mobile-friendly design.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>
            Frontend Developer (Contract) | Edlivky School Management Portal
          </h3>
          <p className="job-meta">
            Edlivky Coding Academy | Dec 2024 – Feb 2025
          </p>
          <ul>
            <li>
              Developed a responsive school management platform for over 250
              student enrollments, enabling efficient course assignment,
              tracking, and grading.
            </li>
            <li>
              Built reusable UI components with shadcn/ui to ensure design
              consistency across the platform and improve maintainability.
            </li>
            <li>
              Collaborated on backend optimization in Node.js/MongoDB, reducing
              API response times by 28% and improving platform responsiveness.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Fullstack Developer | Rare Decor Home</h3>
          <p className="job-meta">
            Luxury Interior E-commerce Platform | Jul 2024 – Nov 2024
          </p>
          <ul>
            <li>
              Developed a full-stack e-commerce platform featuring user
              authentication, a secure payment gateway, and an AI chatbot for
              customer support.
            </li>
            <li>
              Built advanced product filtering and sorting features, improving
              search speed by 50% and enhancing product discovery.
            </li>
            <li>
              Integrated inventory management for over 200 SKUs, ensuring
              real-time stock updates and automated low-stock alerts.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Fullstack Developer | NairaLend Financial Platform</h3>
          <p className="job-meta">
            Fintech Loan Management System | Aug 2023 – Jul 2024
          </p>
          <ul>
            <li>
              Created a secure loan application and management system with
              authentication, user profiles, and loan tracking.
            </li>
            <li>
              Designed a mobile-first UI that reduced form completion time by
              40%, improving accessibility for mobile users.
            </li>
            <li>
              Implemented repayment tracking and automated risk assessment
              workflows, streamlining loan processing and reducing default risk.
            </li>
          </ul>
        </div>

        {/* Technical Expertise */}
        <h2>TECHNICAL EXPERTISE</h2>
        <p>
          <strong>Languages:</strong> JavaScript, TypeScript, Solidity, PHP,
          HTML5, CSS3 <br />
          <strong>Frontend:</strong> React, Next.js, Tailwind CSS, shadcn/ui,
          Flowbite, Alpine.js <br />
          <strong>Backend:</strong> Node.js, Supabase, REST APIs, PostgreSQL,
          MySQL, MongoDB <br />
          <strong>Blockchain:</strong> Ethereum, Hardhat, Ethers.js, IPFS,
          OpenZeppelin <br />
          <strong>Tools:</strong> Git, GitHub, Postman, Vercel, ESLint, Prettier{" "}
          <br />
          <strong>Specialties:</strong> Web3 DApp Development, AI & Automation
          Integration (Chatbots, n8n Workflows, ManyChat Agents), Performance
          Optimization, Secure Authentication Systems
        </p>

        {/* Projects */}
        <h2>PROJECTS</h2>
        <ul>
          <li>
            <strong>Edlivky Hospital Management System</strong> –{" "}
            <a
              href="https://github.com/benjamindlabs/edlivkyhospital"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <strong>ArtMint NFT Marketplace</strong> –{" "}
            <a
              href="https://art-mint.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </li>
          <li>
            <strong>Edlivky School Management Portal</strong> –{" "}
            <a
              href="https://edlivkycodingschool.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </li>
          <li>
            <strong>Rare Decor Home</strong> –{" "}
            <a
              href="https://rare-decor.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </li>
          <li>
            <strong>NairaLend Financial Platform</strong> –{" "}
            <a
              href="https://nairalend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </li>
        </ul>

        {/* Education */}
        <h2>EDUCATION</h2>
        <p>University of Benin – Public Administration | 2014 – 2018</p>

        {/* Certifications */}
        <h2>CERTIFICATIONS</h2>
        <p>
          Diploma in Fullstack Web Development – Edlivky Coding Academy (Aug
          2025)
        </p>
      </div>
    </div>
  );
};

export default Resume;
