"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaComment, FaBookmark, FaSearch, FaFilter } from "react-icons/fa";

const Stories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Stories" },
    { id: "career", label: "Career" },
    { id: "learning", label: "Learning" },
    { id: "projects", label: "Projects" },
    { id: "challenges", label: "Challenges" },
  ];

  const stories = [
    {
      id: 1,
      title: "From Bootcamp to Senior Developer in 3 Years",
      author: "Sarah Chen",
      role: "Senior Full-Stack Developer",
      excerpt: "My journey from a complete beginner to leading a team of developers. I'll share the strategies, mistakes, and lessons that accelerated my growth...",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      category: "career",
      likes: 234,
      comments: 45,
      readTime: "8 min read",
      date: "2 days ago",
    },
    {
      id: 2,
      title: "Building My First SaaS: Lessons Learned",
      author: "Mike Johnson",
      role: "Indie Hacker",
      excerpt: "The ups and downs of creating a profitable side project while working full-time. From idea validation to reaching $10k MRR...",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      category: "projects",
      likes: 189,
      comments: 32,
      readTime: "12 min read",
      date: "5 days ago",
    },
    {
      id: 3,
      title: "Overcoming Imposter Syndrome as a Self-Taught Dev",
      author: "Priya Patel",
      role: "Frontend Developer",
      excerpt: "How I learned to trust my skills and contribute confidently to open source projects. My mental health journey in tech...",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
      category: "challenges",
      likes: 312,
      comments: 67,
      readTime: "6 min read",
      date: "1 week ago",
    },
    {
      id: 4,
      title: "Learning Rust: A JavaScript Developer's Perspective",
      author: "Alex Rivera",
      role: "Systems Engineer",
      excerpt: "Transitioning from high-level languages to systems programming. What surprised me, what frustrated me, and why I'm glad I made the switch...",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
      category: "learning",
      likes: 156,
      comments: 28,
      readTime: "10 min read",
      date: "1 week ago",
    },
    {
      id: 5,
      title: "My Journey from QA to DevOps Engineer",
      author: "James Kim",
      role: "DevOps Engineer",
      excerpt: "How I transitioned careers within tech and the skills that made the difference. A roadmap for anyone looking to make a similar move...",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
      category: "career",
      likes: 201,
      comments: 41,
      readTime: "9 min read",
      date: "2 weeks ago",
    },
    {
      id: 6,
      title: "Building a Real-Time Chat App with WebSockets",
      author: "Emma Watson",
      role: "Backend Developer",
      excerpt: "A deep dive into implementing scalable real-time features. Architecture decisions, performance optimization, and lessons learned...",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      category: "projects",
      likes: 178,
      comments: 35,
      readTime: "15 min read",
      date: "2 weeks ago",
    },
  ];

  const filteredStories = stories.filter((story) => {
    const matchesCategory = selectedCategory === "all" || story.category === selectedCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 pt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Developer Stories</h1>
            <p className="text-xl text-gray-100 mb-8">
              Real experiences, challenges, and triumphs from developers around the world
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white dark:bg-gray-800 shadow-md sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <FaFilter className="text-gray-600 dark:text-gray-400" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-sm font-medium text-gray-900 dark:text-white">
                  {story.readTime}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {story.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{story.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{story.role}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                  {story.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm">
                  <span>{story.date}</span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 hover:text-red-500 transition">
                      <FaHeart /> {story.likes}
                    </span>
                    <span className="flex items-center gap-1 hover:text-blue-500 transition">
                      <FaComment /> {story.comments}
                    </span>
                    <FaBookmark className="cursor-pointer hover:text-blue-600 transition" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 dark:text-gray-400">
              No stories found. Try a different search or category.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredStories.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
              Load More Stories
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Stories;
