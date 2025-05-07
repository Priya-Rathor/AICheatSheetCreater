import React from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb, Code2, Sparkles, Settings2, ShieldCheck, Rocket, ArrowRight, Users, BookOpen, Laptop2
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'AI Cheat Sheet Generator',
      icon: <Lightbulb size={28} />,
      description: 'Generate beginner-friendly summaries and code examples instantly.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Real-Time Answer Evaluation',
      icon: <Code2 size={28} />,
      description: 'Evaluate responses with scoring, feedback, and tips for improvement.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Elegant, Minimal UI',
      icon: <Sparkles size={28} />,
      description: 'A beautiful interface that focuses on clarity and productivity.',
      color: 'from-pink-400 to-rose-500',
    },
    {
      title: 'Custom API Integration',
      icon: <Settings2 size={28} />,
      description: 'Easily plug into your LMS, app, or dashboard via APIs.',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      title: 'Data Security & Privacy',
      icon: <ShieldCheck size={28} />,
      description: 'End-to-end encryption and privacy-first architecture.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Blazing Fast Performance',
      icon: <Rocket size={28} />,
      description: 'Optimized for both mobile and desktop usage.',
      color: 'from-indigo-500 to-violet-500',
    },
  ];

  const useCases = [
    {
      title: 'Students & Self-learners',
      icon: <BookOpen size={28} />,
      desc: 'Revise concepts, practice questions, and get instant feedback.',
    },
    {
      title: 'Developers & Engineers',
      icon: <Laptop2 size={28} />,
      desc: 'Generate cheat sheets for libraries, compare logic, and improve code.',
    },
    {
      title: 'Trainers & Teams',
      icon: <Users size={28} />,
      desc: 'Create content, automate assessments, and monitor learner progress.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
          Explore Our Features
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Powerful tools to enhance your learning, automate workflows, and bring AI into your daily productivity.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className={`p-6 rounded-2xl text-white shadow-xl bg-gradient-to-r ${feature.color} hover:scale-105 transition-transform`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="mr-3">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
            </div>
            <p className="text-sm opacity-90">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* How it Works Section */}
      <div className="bg-white rounded-3xl p-12 max-w-6xl mx-auto shadow-xl mb-24">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 text-gray-700 text-center">
          {[
            { title: 'Enter Your Topic', step: 'Type the subject or library name.' },
            { title: 'AI Generates Output', step: 'Cheat sheet with code & explanations.' },
            { title: 'Download or Share', step: 'Export to PDF or copy to clipboard.' },
          ].map((item, i) => (
            <div key={i} className="p-6 border-l-4 border-purple-400">
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-sm">{item.step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-12">Who Is It For?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {useCases.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center justify-center mb-4 text-purple-600">{item.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
