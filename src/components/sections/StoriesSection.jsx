"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaComment, FaBookmark } from "react-icons/fa";

const StoriesSection = () => {
  const stories = [
    {
      id: 1,
      title: "From Bootcamp to Senior Developer in 3 Years",
      author: "Sarah Chen",
      excerpt: "My journey from a complete beginner to leading a team of developers...",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400",
      likes: 234,
      comments: 45,
    },
    {
      id: 2,
      title: "Building My First SaaS: Lessons Learned",
      author: "Mike Johnson",
      excerpt: "The ups and downs of creating a profitable side project while working full-time...",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
      likes: 189,
      comments: 32,
    },
    {
      id: 3,
      title: "Overcoming Imposter Syndrome as a Self-Taught Dev",
      author: "Priya Patel",
      excerpt: "How I learned to trust my skills and contribute confidently to open source...",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      likes: 312,
      comments: 67,
    },
  ];

  return (
    <section id="stories" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Developer Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real experiences from developers around the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  by {story.author}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <FaHeart className="text-red-500" /> {story.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComment className="text-blue-500" /> {story.comments}
                    </span>
                  </div>
                  <FaBookmark className="cursor-pointer hover:text-blue-600 transition" />
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
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
            View All Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StoriesSection;
