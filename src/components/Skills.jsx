// src/components/Skills.jsx
import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 65 },
        { name: "TypeScript", level: 65 },
        { name: "Tailwind CSS", level: 80 },
        { name: "GSAP", level: 80 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 75 },
        { name: "Supabase", level: 60 },
      ],
    },
    {
      title: "Programming",
      skills: [
        { name: "C++", level: 85 },
        { name: "OOP", level: 90 },
      ],
    },
    {
      title: "AI & Learning",
      skills: [
        { name: "Machine Learning", level: 60 },
        { name: "LangChain", level: 75 },
        { name: "RAG Systems", level: 75 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 85 },
        { name: "MS Office", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A strong combination of frontend, backend, and AI technologies used to
          build scalable and modern applications.
        </p>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-900/60 backdrop-blur rounded-xl border border-gray-800 hover:border-blue-500 transition"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-blue-400 mb-5">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-800 rounded">
                      <div
                        className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "Problem Solving",
            "Responsive Design",
            "Clean Code",
            "Team Collaboration",
          ].map((soft, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm bg-blue-900/30 text-blue-300 rounded-full border border-blue-500/20"
            >
              {soft}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
