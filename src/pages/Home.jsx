import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../pages/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />

      {/* Sections */}
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
