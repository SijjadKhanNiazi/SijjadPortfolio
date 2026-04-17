// src/pages/SkillsServices.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SkillsServices = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Git & GitHub",
    "C++",
    "OOP",
    "Basic AI & Machine Learning",
  ];

  const services = [
    "Frontend Development (React)",
    "Responsive Web Design",
    "Basic UI Development",
    "Website Maintenance",
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-400 mb-8">
          Skills & Services
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="p-4 bg-gray-800 rounded-lg border border-blue-600 text-center hover:bg-blue-900 transition"
              >
                <span className="text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Services I Offer
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {services.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsServices;
