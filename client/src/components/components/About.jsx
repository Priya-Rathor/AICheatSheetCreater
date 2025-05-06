import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 text-gray-800 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-300 opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-200 opacity-30 rounded-full blur-2xl -z-10" />

      <div className="relative z-10 px-6 sm:px-10 py-16 max-w-7xl mx-auto">

        {/* Hero */}
        <motion.section
          className="text-center mb-20"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
            About Our Project
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We use AI to make learning fun, efficient, and personalized. Whether you're prepping for exams or exploring new tech, our tools help you learn smarter.
          </p>
        </motion.section>

        {/* Mission */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.img
            src="https://source.unsplash.com/720x480/?learning,ai"
            alt="Learning Illustration"
            className="rounded-3xl shadow-xl hover:scale-105 transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div>
            <motion.h2
              className="text-3xl font-bold text-purple-600 mb-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Mission & Vision
            </motion.h2>
            <p className="text-gray-700 leading-relaxed">
              We’re on a mission to simplify education using generative AI. Our vision is to enable anyone, anywhere, to access high-quality learning tools that are interactive, intuitive, and impactful.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">What Makes Us Unique</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'AI-Driven Learning', color: 'bg-gradient-to-r from-pink-400 to-red-400', desc: 'Smart tools that adapt to your needs.' },
              { title: '1-Click Cheat Sheets', color: 'bg-gradient-to-r from-purple-400 to-indigo-400', desc: 'Instantly generate rich summaries.' },
              { title: 'Answer Evaluation', color: 'bg-gradient-to-r from-blue-400 to-cyan-400', desc: 'Get real-time grading & feedback.' },
              { title: 'Clean UI', color: 'bg-gradient-to-r from-yellow-300 to-orange-400', desc: 'Elegant and responsive layout.' },
              { title: 'API Ready', color: 'bg-gradient-to-r from-green-300 to-emerald-400', desc: 'Easily integrate with your systems.' },
              { title: 'Made for Learners', color: 'bg-gradient-to-r from-rose-300 to-fuchsia-400', desc: 'We’re built by learners, for learners.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl text-white p-6 shadow-lg hover:scale-105 transition ${item.color}`}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { name: 'Rohit Gupta', role: 'Founder & Developer', img: 'https://source.unsplash.com/100x100/?person,man' },
              { name: 'Anjali Sharma', role: 'AI Researcher', img: 'https://source.unsplash.com/100x100/?person,woman' },
              { name: 'Vikram Patel', role: 'UI/UX Designer', img: 'https://source.unsplash.com/100x100/?face,designer' },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-200 p-6 rounded-2xl text-center w-64 shadow-md hover:shadow-xl transition hover:bg-purple-50"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-purple-300"
                />
                <h4 className="text-purple-700 font-semibold text-lg">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
