"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaDatabase,
  FaVuejs, FaAngular, FaJava, FaPhp, FaSearch, FaPlay, FaClock, FaStar
} from "react-icons/fa";
import { SiKubernetes, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiTypescript } from "react-icons/si";

const Tutorials = () => {
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const levels = [
    { id: "all", label: "All Levels" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ];

  const tutorials = [
    {
      id: 1,
      icon: FaReact,
      title: "React Best Practices & Patterns",
      description: "Master modern React development with hooks, context, and performance optimization techniques",
      level: "intermediate",
      duration: "45 min",
      lessons: 12,
      students: 2340,
      rating: 4.8,
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: 2,
      icon: FaNodeJs,
      title: "Building Scalable Node.js Microservices",
      description: "Learn to design and implement microservices architecture with Node.js and Express",
      level: "advanced",
      duration: "60 min",
      lessons: 18,
      students: 1890,
      rating: 4.9,
      color: "from-green-400 to-emerald-600",
    },
    {
      id: 3,
      icon: FaPython,
      title: "Python for Data Science & Machine Learning",
      description: "Complete guide to data analysis, visualization, and ML with Python libraries",
      level: "beginner",
      duration: "30 min",
      lessons: 10,
      students: 3120,
      rating: 4.7,
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 4,
      icon: FaDocker,
      title: "Docker & Kubernetes Mastery",
      description: "Containerize applications and orchestrate them with Kubernetes in production",
      level: "intermediate",
      duration: "50 min",
      lessons: 15,
      students: 1560,
      rating: 4.8,
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 5,
      icon: FaAws,
      title: "AWS Cloud Architecture & DevOps",
      description: "Design scalable cloud infrastructure and implement CI/CD pipelines on AWS",
      level: "advanced",
      duration: "75 min",
      lessons: 20,
      students: 2100,
      rating: 4.9,
      color: "from-orange-400 to-red-500",
    },
    {
      id: 6,
      icon: FaDatabase,
      title: "Database Design Patterns & Optimization",
      description: "Learn SQL, NoSQL, indexing strategies, and query optimization techniques",
      level: "intermediate",
      duration: "40 min",
      lessons: 14,
      students: 1780,
      rating: 4.6,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 7,
      icon: SiTypescript,
      title: "TypeScript: From Zero to Hero",
      description: "Master TypeScript fundamentals and advanced types for robust applications",
      level: "beginner",
      duration: "35 min",
      lessons: 11,
      students: 2890,
      rating: 4.8,
      color: "from-blue-600 to-cyan-500",
    },
    {
      id: 8,
      icon: SiGraphql,
      title: "GraphQL API Development",
      description: "Build efficient APIs with GraphQL, Apollo Server, and best practices",
      level: "intermediate",
      duration: "55 min",
      lessons: 16,
      students: 1450,
      rating: 4.7,
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 9,
      icon: FaVuejs,
      title: "Vue.js 3 Complete Guide",
      description: "Build modern web applications with Vue 3 Composition API and Pinia",
      level: "beginner",
      duration: "42 min",
      lessons: 13,
      students: 2210,
      rating: 4.7,
      color: "from-green-500 to-teal-600",
    },
  ];

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesLevel = selectedLevel === "all" || tutorial.level === selectedLevel;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20 pt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Learn From Experts</h1>
            <p className="text-xl text-gray-100 mb-8">
              Comprehensive tutorials to level up your development skills
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Level Filter */}
      <div className="bg-white dark:bg-gray-800 shadow-md sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition ${
                  selectedLevel === level.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform group-hover:-translate-y-2">
                <div
                  className={`h-40 bg-gradient-to-br ${tutorial.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <tutorial.icon className="text-7xl text-white/90 group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-sm font-medium text-gray-900 dark:text-white flex items-center gap-1">
                    <FaClock className="text-xs" /> {tutorial.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tutorial.level === "beginner" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" :
                      tutorial.level === "intermediate" ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" :
                      "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                    }`}>
                      {tutorial.level.charAt(0).toUpperCase() + tutorial.level.slice(1)}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <FaStar />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {tutorial.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{tutorial.lessons} lessons</span>
                    <span>{tutorial.students.toLocaleString()} students</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2 group-hover:scale-105">
                    <FaPlay /> Start Learning
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTutorials.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 dark:text-gray-400">
              No tutorials found. Try a different search or level.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredTutorials.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
              Load More Tutorials
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Tutorials;
