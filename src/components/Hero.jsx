// src/components/Hero.jsx
import React, { useState, useEffect } from "react";

const Hero = () => {
  const fullText = "Muhammad Sijjad Khan";
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

  const handleImageError = (e) => {
    e.target.src =
      "https://media.licdn.com/dms/image/v2/D4D35AQExYY3vKBBDeQ/profile-framedphoto-shrink_400_400/B4DZz_estxIcAc-/0/1773812763785?e=1776963600&v=beta&t=G30-viWkgCpvklUvrtYip7ZmA_cSl_0kjnk-7_FduyQ";
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-center items-center text-center px-4 pt-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-indigo-900"></div>

      {/* Glow effect */}
      <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 top-20 left-20"></div>
      <div className="absolute w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-20 bottom-20 right-20"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Profile Image */}
        <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-500 shadow-xl mx-auto hover:scale-105 transition">
          <img
            src="../assets/sijjad.jpeg"
            alt="Muhammad Sijjad Khan"
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-4">
          Frontend Developer | React Enthusiast
        </p>

        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          I build fast, responsive and user-friendly web apps using modern
          technologies like React, Tailwind & JavaScript. Currently exploring AI
          & Machine Learning
        </p>

        {/* Skills badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["React", "JavaScript", "Tailwind", "C++", "AI/ML"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm bg-blue-800/40 text-blue-200 rounded-full border border-blue-500/30"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
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
    </section>
  );
};

export default Hero;
