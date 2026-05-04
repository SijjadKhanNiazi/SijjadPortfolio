// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "CLICS – Loan Comparison System",
      category: "Final Year Project (AI + Web)",
      desc: "A smart platform that aggregates and compares loan schemes from multiple Pakistani banks using Retrieval-Augmented Generation (RAG). Enables users to ask natural language queries and get intelligent, contextual answers.",
      tech: ["MERN stack", "LangChain", "RAG", "Scrapy framework", "APIs"],
      highlights: [
        "AI-powered query system (RAG)",
        "Multi-bank data integration",
        "User-friendly UI for comparisons",
      ],
      github: "",
      live: "https://clics.vercel.app/",
    },

    {
      title: "AgriConnect",
      category: "Full-Stack (Agri-FinTech)",
      desc: "Mianwali's local agri-marketplace for real-time Mandi rates and direct peer-to-peer crop/machinery trading.",
      tech: ["React.js", "Supabase", "Tailwind CSS"],
      highlights: [
        "Live Mandi Ticker: Real-time price tracking for 10+ crops.",
        "P2P Marketplace: Direct ad posting with secure storage.",
        "Localization: Roman Urdu UI for rural accessibility.",
        "Secure Auth: Profile & metadata management via Supabase.",
      ],
      github: "https://github.com/SijjadKhanNiazi/agriconnect",
      live: "https://agrimianwali.vercel.app/",
    },
    {
      title: "SKStore",
      category: "Full-Stack (E-Commerce)",
      desc: "A premium MERN platform for local market digitalization featuring seamless product and order management.",
      tech: ["MERN Stack", "Tailwind CSS"],
      highlights: [
        "Dynamic Cart: Real-time quantity & price calculations.",
        "Secure Checkout: Integrated shipping & payment workflow.",
        "User Dashboard: Order history and profile management.",
        "JWT Auth: Protected routes for sensitive user data.",
        "Responsive UI: Modern, futuristic cross-device design.",
      ],
      github: "https://github.com/SijjadKhanNiazi/MERN-Ecom",
      live: "",
    },
    {
      title: "CareerStream (Job Platform)",
      category: "Full Stack Web App",
      desc: "A modern job portal that connects job seekers with opportunities. Users can explore jobs, track applications, and build career profiles in a streamlined interface.",
      tech: ["React", "Tailwind", "JavaScript"],
      highlights: [
        "Job listing & filtering system",
        "Clean dashboard UI",
        "Scalable frontend architecture",
      ],
      github: "https://github.com/SijjadKhanNiazi/careerStream",
      live: "https://lnkd.in/dK_4Uid9",
    },
    {
      title: "Recipiee – Recipe Web App",
      category: "Frontend Project",
      desc: "A beautifully designed recipe platform where users can browse, search, and manage recipes with a modern and responsive interface.",
      tech: ["React", "CSS", "API"],
      highlights: [
        "Responsive UI design",
        "Dynamic recipe search",
        "Clean UX experience",
      ],
      github: "https://github.com/SijjadKhanNiazi/Recipee_SemesterProject",
    },
    {
      title: "AI Chatbot with JSON",
      category: "AI Project",
      desc: "An intelligent chatbot that allows users to interact with documents (PDF/JSON) using natural language queries powered by LLMs.",
      tech: ["LangChain", "Python", "LLM"],
      highlights: [
        "Document-based Q&A",
        "Semantic search",
        "Conversational memory",
      ],
      github: "https://github.com/SijjadKhanNiazi/Simply-RAG-bot-langchain-",
    },
    {
      title: "Online Voting System",
      category: "C++ OOP Project",
      desc: "A console-based secure voting system built using Object-Oriented Programming principles, ensuring structured data handling and user authentication.",
      tech: ["C++", "OOP"],
      highlights: [
        "Secure voting logic",
        "User authentication",
        "Modular code design",
      ],
    },
    {
      title: "ATM Management System",
      category: "OOP Project",
      desc: "Simulation of ATM operations using OOP concepts including transactions, balance management, and user verification.",
      tech: ["C++"],
      highlights: [
        "Transaction handling",
        "Balance management",
        "Clean OOP structure",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A collection of my work showcasing frontend development, AI
          integration, and problem-solving skills across multiple domains.
        </p>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-xl bg-gray-900/60 backdrop-blur border border-gray-800 hover:border-blue-500 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Category */}
              <span className="text-xs text-blue-400 uppercase tracking-wide">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mt-2 mb-3 group-hover:text-blue-300 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-blue-900/40 text-blue-300 rounded border border-blue-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="text-xs text-gray-400 space-y-1 mb-5">
                {project.highlights.map((h, i) => (
                  <li key={i}>• {h}</li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-sm px-3 py-1.5 border border-gray-600 rounded hover:border-blue-400 hover:text-blue-300 transition"
                  >
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="text-sm px-3 py-1.5 bg-blue-600 rounded text-white hover:bg-blue-700 transition"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
