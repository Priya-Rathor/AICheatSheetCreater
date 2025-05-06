import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, User } from 'lucide-react';

export default function ContactUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-16 px-4 sm:px-12 overflow-hidden">
      {/* Background Blob */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 blur-[100px] rounded-full z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700">
            Have questions or suggestions? We’d love to hear from you. Just drop your message, and our team will reach out shortly.
          </p>

          <div className="space-y-4 text-gray-700 text-sm">
            <p className="flex items-center gap-2">
              <Mail className="text-blue-500" size={18} /> contact@yourproject.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="text-pink-500" size={18} /> +91-98765-43210
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="text-purple-500" size={18} /> 123 Innovation Ave, Tech City
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-2xl space-y-6 border border-white/40"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("✅ Message sent!");
          }}
        >
          {/* Name Field */}
          <div className="relative">
            <User className="absolute top-4 left-4 text-purple-500" />
            <input
              type="text"
              placeholder="Your Name"
              required
              className="pl-12 pr-4 py-3 w-full rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/70 backdrop-blur-sm"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute top-4 left-4 text-blue-500" />
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="pl-12 pr-4 py-3 w-full rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70 backdrop-blur-sm"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              rows="4"
              placeholder="Your message..."
              required
              className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/70 backdrop-blur-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
