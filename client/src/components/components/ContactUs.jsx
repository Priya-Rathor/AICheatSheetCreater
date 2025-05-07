import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail, MapPin, Phone, User, MessageCircle, Instagram, Linkedin, Twitter
} from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 relative z-10">

        {/* Left Side: Contact Info & Branding */}
        <motion.div
          className="flex flex-col justify-center space-y-8"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
            Let's Talk
          </h2>
          <p className="text-gray-700 text-lg max-w-md">
            We're passionate about building meaningful tools. Reach out with your questions, feedback, or ideas.
          </p>

          <div className="space-y-3 text-sm text-gray-700">
            <p className="flex items-center gap-2"><Mail className="text-blue-500" size={18} /> contact@yourproject.com</p>
            <p className="flex items-center gap-2"><Phone className="text-pink-500" size={18} /> +91-98765-43210</p>
            <p className="flex items-center gap-2"><MapPin className="text-purple-500" size={18} /> 123 Innovation Lane, Tech City</p>
          </div>

          <div className="flex gap-6 pt-4">
            <a href="#" className="text-purple-600 hover:text-purple-800 transition-all duration-200"><Instagram size={22} /></a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition-all duration-200"><Linkedin size={22} /></a>
            <a href="#" className="text-sky-500 hover:text-sky-700 transition-all duration-200"><Twitter size={22} /></a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-10 space-y-6 border border-white/40"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Send a Message
          </h3>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("🎉 Message sent successfully!");
            }}
            className="space-y-5"
          >
            {/* Name */}
            <div className="relative">
              <User className="absolute top-3.5 left-4 text-purple-500" />
              <input
                type="text"
                required
                placeholder="Your Name"
                className="pl-12 pr-4 py-3 w-full rounded-lg border border-purple-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute top-3.5 left-4 text-blue-500" />
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="pl-12 pr-4 py-3 w-full rounded-lg border border-blue-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageCircle className="absolute top-4 left-4 text-pink-500" />
              <textarea
                required
                placeholder="Your message..."
                rows="4"
                className="pl-12 pr-4 py-3 w-full rounded-lg border border-pink-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 rounded-xl shadow-md hover:scale-[1.02] transition-all"
            >
              Submit Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
