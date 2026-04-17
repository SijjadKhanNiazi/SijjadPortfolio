// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate developer focused on building modern web experiences,
            solving real-world problems, and continuously learning new
            technologies.
          </p>
        </div>

        {/* Main Intro */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Who I Am
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm{" "}
              <span className="text-white font-medium">
                Muhammad Sijjad Khan
              </span>
              , a Software Engineering student and passionate frontend developer
              with a strong interest in building scalable and user-friendly web
              applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Alongside development, I have experience in teaching computer
              science, which has strengthened my problem-solving and
              communication skills. I enjoy turning complex ideas into simple
              and elegant solutions.
            </p>
          </div>

          {/* Right Card */}
          <div className="p-6 bg-gray-900/60 backdrop-blur rounded-xl border border-gray-800 shadow-xl">
            <h4 className="text-xl font-semibold text-blue-400 mb-4">
              Quick Info
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>🎓 Software Engineering Student (Top Performer)</li>
              <li>💼 1+ Year Teaching Experience</li>
              <li>💻 Frontend Developer (React Specialist)</li>
              <li>🤖 Exploring AI & Machine Learning</li>
              <li>📍 Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Journey / Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-400 text-center mb-10">
            My Journey
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/60 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h4 className="text-lg font-semibold text-white mb-2">
                Development
              </h4>
              <p className="text-gray-400 text-sm">
                Built multiple projects using React, JavaScript, and modern UI
                frameworks focusing on performance and responsiveness.
              </p>
            </div>

            <div className="p-6 bg-gray-900/60 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h4 className="text-lg font-semibold text-white mb-2">
                Teaching
              </h4>
              <p className="text-gray-400 text-sm">
                Taught computer science concepts, helping students understand
                programming fundamentals and problem-solving techniques.
              </p>
            </div>

            <div className="p-6 bg-gray-900/60 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h4 className="text-lg font-semibold text-white mb-2">
                AI Exploration
              </h4>
              <p className="text-gray-400 text-sm">
                Currently working on AI-based systems including RAG and
                intelligent chatbots using modern LLM tools.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Skills Snapshot */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="p-6 bg-gray-900/60 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Education
            </h3>
            <p className="text-gray-300">
              Bachelor’s in Software Engineering
              <br />
              <span className="text-gray-400">
                Strong academic performance with focus on software development,
                OOP, and system design.
              </span>
            </p>
          </div>

          <div className="p-6 bg-gray-900/60 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Core Strengths
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Problem Solving & Logical Thinking</li>
              <li>• Clean & Maintainable Code</li>
              <li>• Responsive UI Development</li>
              <li>• Fast Learning & Adaptability</li>
            </ul>
          </div>
        </div>

        {/* Languages */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Languages
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {["Urdu", "English", "Saraiki"].map((lang, i) => (
              <span
                key={i}
                className="px-5 py-2 bg-gray-900 border border-gray-700 rounded-full text-gray-300 hover:border-blue-500 transition"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
