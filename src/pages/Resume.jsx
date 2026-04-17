// src/pages/Resume.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Resume = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-400 mb-10">
          Resume / Career Snapshot
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Education
          </h2>
          <ul className="text-lg space-y-2">
            <li>Bachelor of Software Engineering – Batch Topper</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Experience
          </h2>
          <ul className="text-lg space-y-2">
            <li>
              Ex‑Computer Science Instructor (Teaching + Development, 1+ year)
            </li>
            <li>Open to frontend & React‑based roles</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Notable Projects (Short)
          </h2>
          <ul className="text-lg space-y-2 list-disc list-inside">
            <li>
              <strong>CLICS</strong> – Centralized loan‑information system with
              RAG & scraping
            </li>
            <li>
              <strong>Recipiee</strong> – Recipe app with React
            </li>
            <li>
              <strong>Online Voting System</strong> – C++ OOP project
            </li>
          </ul>
        </section>

        <div className="mt-6">
          <a
            href="/assets/Sijjad_Khan_CV.pdf" // your uploaded PDF
            target="_blank"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Download Full CV
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
