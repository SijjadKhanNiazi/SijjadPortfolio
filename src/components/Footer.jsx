// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Branding */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-3">
              Sijjad.dev
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate frontend developer crafting modern, responsive and
              user-friendly web applications using React and modern
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item)}
                      className="capitalize hover:text-blue-400 transition"
                    >
                      {item}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h3>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/SijjadKhanNiazi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/engineersijjad/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/sijjadxclusive/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg hover:border-pink-500 hover:text-pink-400 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/sk.niazi.1447342"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-500 transition"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Muhammad Sijjad Khan. All rights
            reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={() => scrollTo("home")}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
