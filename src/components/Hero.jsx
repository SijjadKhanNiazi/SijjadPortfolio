// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import sijjadImg from "../assets/sijjad.jpeg";

const Hero = () => {
  const fullText = "M Sijjad Khan";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 2000);
    }
  }, [index]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-black via-gray-900 to-indigo-900"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE (TEXT) */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-4">
            Frontend Developer | React Enthusiast
          </p>

          <p className="text-gray-400 mb-8 max-w-lg">
            I build fast, responsive and user-friendly web apps using modern
            technologies like React, Tailwind & JavaScript. Currently exploring
            AI & Machine Learning
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
            {["React", "JavaScript", "Tailwind", "C++", "AI/ML"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-blue-800/40 text-blue-200 rounded-full border border-blue-500/30"
                >
                  {skill}
                </span>
              ),
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shadow-lg hover:-translate-y-1"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/SijjadKhanNiazi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-blue-400 text-blue-200 rounded-lg hover:bg-blue-900/40 transition hover:-translate-y-1"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-[450px]">
            {/* Glow background */}
            <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-20 rounded-full"></div>

            {/* Image */}
            <img
              src={sijjadImg}
              alt="Muhammad Sijjad Khan"
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
