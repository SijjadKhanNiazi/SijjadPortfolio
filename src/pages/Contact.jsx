// src/pages/Contact.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = () => {
    const message = `Hi Muhammad Sijjad Khan, I came from your portfolio website and would like to connect.`;
    const whatsappUrl = `https://wa.me/03144919624?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const SERVICE_ID = "service_qszvkaa";
  const TEMPLATE_ID = "template_mmmfbhi";
  const PUBLIC_KEY = "S0n9dwmpdRYk47YxP";

  const sendEmail = async (data) => {
    const params = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: "sijjadkhan603@gmail.com",
    };

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendEmail(formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("FAILED", err);
      alert("Failed to send message. Try again or use WhatsApp.");
    }
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-24">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Let's Work Together
        </h1>
        <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
          Have a project idea, collaboration, or just want to connect? Feel free
          to reach out — I’m always open to discussing new opportunities.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-8 bg-gray-900/60 backdrop-blur rounded-xl border border-gray-800 space-y-6 shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Send a Message
            </h2>

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white font-medium hover:scale-[1.02] transition shadow-lg hover:shadow-blue-500/20"
            >
              Send Message 🚀
            </button>
          </form>

          {/* INFO PANEL */}
          <div className="space-y-6">
            <div className="p-8 bg-gray-900/60 backdrop-blur rounded-xl border border-gray-800 shadow-xl">
              <h2 className="text-2xl font-semibold text-blue-400 mb-6">
                Contact Info
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>
                  📧 <strong>Email:</strong>
                  <br />
                  <a
                    href="mailto:sijjadkhan603@gmail.com"
                    className="text-blue-300 hover:underline"
                  >
                    sijjadkhan603@gmail.com
                  </a>
                </p>

                <p>
                  📱 <strong>Phone:</strong>
                  <br />
                  +92 314 4919624
                </p>

                <p>
                  📍 <strong>Location:</strong>
                  <br />
                  Punjab, Pakistan
                </p>

                <p>
                  💼 <strong>Availability:</strong>
                  <br />
                  Open for freelance & internships
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="p-6 bg-gradient-to-r from-green-600 to-green-700 rounded-xl text-center shadow-lg">
              <p className="mb-4 text-white font-medium">Prefer quick chat?</p>

              <button
                onClick={handleWhatsApp}
                className="px-6 py-3 bg-white text-green-700 rounded-lg font-semibold hover:scale-105 transition"
              >
                💬 Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
