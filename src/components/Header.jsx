import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-500 font-bold text-lg">B</span>
          </div>
          <h1 className="text-2xl font-bold">My Unique Blog</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="hover:text-yellow-300 transition duration-300"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-300 transition duration-300"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
