

import React, { useState } from "react";
import ExContact from "../Component/ExContact";
import Header from "./Header";
import Footer from "./Footer";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://server-ekmv.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Server error. Please try again later.");
    }
  };

  return (
    <>
      <Header />

      {/* Full Screen Smooth Section */}
      <div className="min-h-screen px-4 py-16 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Form Card */}
          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.1)] border border-yellow-200">
            <h2 className="text-4xl font-extrabold text-yellow-800 text-center mb-3">
              Let’s Talk!
            </h2>
            <p className="text-center text-gray-600 mb-10 text-lg">
              Got a question or feedback? Send us a message and we’ll respond soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Full Name */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-yellow-700 mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg border border-yellow-200 bg-white shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-yellow-700 mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg border border-yellow-200 bg-white shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-yellow-700 mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full p-3 rounded-lg border border-yellow-200 bg-white shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-yellow-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="4"
                  className="w-full p-3 rounded-lg border border-yellow-200 bg-white shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition text-black"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-yellow-600 hover:bg-yellow-700 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-200"
              >
                Send Message
              </button>
            </form>

            {status && (
              <p className="text-center mt-6 font-medium text-yellow-700 text-lg">
                {status}
              </p>
            )}
          </div>

          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.15)] border border-yellow-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12107.485515533876!2d76.21796875541995!3d23.841631499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbaglamukhi%20temple%20nalkheda%20madhya%20pradesh!5e1!3m2!1sen!2sin!4v1755799960066!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              className="min-h-[450px]"
            ></iframe>
          </div>
        </div>
      </div>

      <ExContact />
      <Footer />
    </>
  );
}
  