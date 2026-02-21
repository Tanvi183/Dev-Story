"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaUsers, FaBook, FaTrophy } from "react-icons/fa";

const AboutSection = () => {
  const stats = [
    { icon: FaUsers, value: "10K+", label: "Active Developers" },
    { icon: FaBook, value: "500+", label: "Stories Shared" },
    { icon: FaGlobe, value: "50+", label: "Countries" },
    { icon: FaTrophy, value: "200+", label: "Tutorials" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About Dev-Story
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Dev-Story is a global platform where developers share their journeys, 
              challenges, and triumphs. We believe every developer has a unique story 
              worth telling.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Whether you're just starting your coding journey or you're a seasoned 
              professional, our community is here to support, inspire, and help you grow.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
                Join Our Community
              </button>
              <button className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-full font-semibold hover:bg-purple-50 dark:hover:bg-gray-800 transition">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <stat.icon className="text-4xl text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
