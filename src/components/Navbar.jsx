// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.offsetTop - 120;
          if (window.scrollY >= offset) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/80 backdrop-blur-xl border-b border-gray-800 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => scrollTo("home")}
            className="cursor-pointer text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition"
          >
            Sijjad.dev
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item} className="group">
                <button
                  onClick={() => scrollTo(item)}
                  className={`relative capitalize text-sm tracking-wide transition ${
                    active === item
                      ? "text-blue-400"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {item}

                  {/* underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
                      active === item ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              </li>
            ))}

            {/* CTA Button */}
            <li>
              <button
                onClick={() => scrollTo("contact")}
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow hover:shadow-blue-500/20"
              >
                Hire Me
              </button>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`w-6 h-[2px] bg-white transition ${
                isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-[2px] bg-white transition ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-[2px] bg-white transition ${
                isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6 mt-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`block text-left text-lg capitalize w-full ${
                active === item
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}

          {/* CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="w-full py-2 bg-blue-600 rounded-lg text-white"
          >
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
