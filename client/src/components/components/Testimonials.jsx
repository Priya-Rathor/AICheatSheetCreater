import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Rohit Gupta',
    role: 'Full Stack Developer',
    image: 'https://source.unsplash.com/100x100/?man,developer',
    quote:
      "This tool completely transformed the way I learn new libraries. The cheat sheets are concise, beautiful, and insanely helpful!",
  },
  {
    name: 'Anjali Sharma',
    role: 'AI Researcher',
    image: 'https://source.unsplash.com/100x100/?woman,face',
    quote:
      "I'm impressed by how intelligently the AI generates explanations. It's like having a tutor available 24/7.",
  },
  {
    name: 'Rahul Verma',
    role: 'Educator & Trainer',
    image: 'https://source.unsplash.com/100x100/?man,profile',
    quote:
      "I use this app to help my students quickly revise topics. It's accurate, fast, and saves me hours of prep work.",
  },
];

export default function Testimonials() {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
          What Users Say
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Real stories from developers, learners, and educators who rely on our platform daily.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-left transition hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-purple-400"
              />
              <div>
                <h4 className="font-semibold text-purple-700">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">“{item.quote}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
