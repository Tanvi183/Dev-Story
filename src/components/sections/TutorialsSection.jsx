"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaDatabase } from "react-icons/fa";

const TutorialsSection = () => {
  const tutorials = [
    {
      icon: FaReact,
      title: "React Best Practices",
      level: "Intermediate",
      duration: "45 min",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: FaNodeJs,
      title: "Node.js Microservices",
      level: "Advanced",
      duration: "60 min",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: FaPython,
      title: "Python for Data Science",
      level: "Beginner",
      duration: "30 min",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: FaDocker,
      title: "Docker & Kubernetes",
      level: "Intermediate",
      duration: "50 min",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FaAws,
      title: "AWS Cloud Architecture",
      level: "Advanced",
      duration: "75 min",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: FaDatabase,
      title: "Database Design Patterns",
      level: "Intermediate",
      duration: "40 min",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section id="tutorials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Learn From Experts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive tutorials to level up your skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 hover:shadow-xl transition transform group-hover:-translate-y-2">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${tutorial.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition`}
                >
                  <tutorial.icon className="text-3xl text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {tutorial.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                    {tutorial.level}
                  </span>
                  <span>{tutorial.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
            Browse All Tutorials
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TutorialsSection;
