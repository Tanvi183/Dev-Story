"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaUsers, FaBook, FaTrophy, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import ContactSection from "@/components/sections/ContactSection";
import TeamsSection from "@/components/sections/TeamsSection";

const AboutPage = () => {
  const stats = [
    { icon: FaUsers, value: "10K+", label: "Active Developers" },
    { icon: FaBook, value: "500+", label: "Stories Shared" },
    { icon: FaGlobe, value: "50+", label: "Countries" },
    { icon: FaTrophy, value: "200+", label: "Tutorials" },
  ];

  const values = [
    {
      title: "Community First",
      description: "We believe in the power of community and collaboration to drive innovation.",
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves, and so should we. We promote lifelong learning.",
    },
    {
      title: "Authenticity",
      description: "Real stories from real developers. No fluff, just genuine experiences.",
    },
    {
      title: "Inclusivity",
      description: "Everyone's journey matters. We welcome developers from all backgrounds.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 pt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Dev-Story</h1>
            <p className="text-xl text-gray-100">
              Empowering developers worldwide through shared experiences and knowledge
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Mission
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

      {/* Values Section */}
      <div className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Teams Section */}
      <TeamsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default AboutPage;
