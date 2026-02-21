"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCode } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine page-specific styling
  const getPageStyle = () => {
    if (isScrolled) {
      return {
        bg: "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800",
        text: "text-gray-900 dark:text-white",
        navText: "text-gray-700 dark:text-gray-300",
        tagline: "text-purple-600 dark:text-purple-400",
      };
    }

    switch (pathname) {
      case "/stories":
        return {
          bg: "bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-md",
          text: "text-white",
          navText: "text-white/90",
          tagline: "text-blue-100",
        };
      case "/tutorials":
        return {
          bg: "bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-red-600/90 backdrop-blur-md",
          text: "text-white",
          navText: "text-white/90",
          tagline: "text-pink-100",
        };
      case "/about":
        return {
          bg: "bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-md",
          text: "text-white",
          navText: "text-white/90",
          tagline: "text-indigo-100",
        };
      case "/login":
        return {
          bg: "bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-md",
          text: "text-white",
          navText: "text-white/90",
          tagline: "text-blue-100",
        };
      case "/register":
        return {
          bg: "bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-red-600/90 backdrop-blur-md",
          text: "text-white",
          navText: "text-white/90",
          tagline: "text-pink-100",
        };
      default:
        return {
          bg: "bg-transparent",
          text: "text-white",
          navText: "text-white",
          tagline: "text-blue-100",
        };
    }
  };

  const pageStyle = getPageStyle();

  const scrollToSection = (id) => {
    if (pathname !== "/") {
      window.location.href = "/";
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", type: "home" },
    { id: "stories", label: "Stories", type: "link", href: "/stories" },
    { id: "tutorials", label: "Tutorials", type: "link", href: "/tutorials" },
    { id: "about", label: "About", type: "link", href: "/about" },
    { id: "login", label: "Login", type: "link", href: "/login" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${pageStyle.bg}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="relative group">
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-75 blur transition duration-300"></div>
                
                {/* Logo container */}
                <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                  isScrolled
                    ? "bg-gradient-to-br from-blue-600 to-purple-600"
                    : "bg-white/20 backdrop-blur-sm border border-white/30"
                }`}>
                  <img 
                    src="/logo.svg" 
                    alt="Dev-Story" 
                    className="w-9 h-9 drop-shadow-lg"
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <h1 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${pageStyle.text}`}>
                  Dev-Story
                </h1>
                <p className={`text-[10px] font-medium tracking-wide uppercase transition-colors duration-300 ${pageStyle.tagline}`}>
                  Share Your Journey
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.type === "home" ? (
                  <button
                    onClick={handleHomeClick}
                    className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-300 relative group ${
                      pathname === "/"
                        ? pageStyle.navText
                        : isScrolled
                        ? "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                        : `${pageStyle.navText} hover:text-white`
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${
                      pathname === "/"
                        ? isScrolled
                          ? "w-3/4 bg-gradient-to-r from-blue-600 to-purple-600"
                          : "w-3/4 bg-white"
                        : "w-0 bg-white group-hover:w-3/4"
                    }`}></span>
                  </button>
                ) : item.type === "link" ? (
                  item.id === "login" ? (
                    <Link href={item.href}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 bg-white text-purple-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {item.label}
                      </motion.button>
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-300 relative group ${
                        pathname === item.href
                          ? pageStyle.navText
                          : isScrolled
                          ? "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                          : `${pageStyle.navText} hover:text-white`
                      }`}
                    >
                      {item.label}
                      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${
                        pathname === item.href
                          ? isScrolled
                            ? "w-3/4 bg-gradient-to-r from-blue-600 to-purple-600"
                            : "w-3/4 bg-white"
                          : isScrolled
                          ? "w-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-3/4"
                          : "w-0 bg-white group-hover:w-3/4"
                      }`}></span>
                    </Link>
                  )
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-300 relative group ${
                      isScrolled
                        ? "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                        : `${pageStyle.navText} hover:text-white`
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 ${
                      isScrolled
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-3/4"
                        : "bg-white group-hover:w-3/4"
                    }`}></span>
                  </button>
                )}
              </motion.div>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden focus:outline-none relative w-10 h-10 flex items-center justify-center ${pageStyle.text}`}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 shadow-2xl"
          >
            <nav className="container mx-auto px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.type === "home" ? (
                    <button
                      onClick={handleHomeClick}
                      className={`w-full text-left py-3 px-4 rounded-lg font-medium transition relative ${
                        pathname === "/"
                          ? "text-purple-600 dark:text-purple-400"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {item.label}
                      {pathname === "/" && (
                        <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                      )}
                    </button>
                  ) : item.type === "link" ? (
                    item.id === "login" ? (
                      <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                        <div className="w-full text-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg">
                          {item.label}
                        </div>
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-3 px-4 rounded-lg font-medium transition relative ${
                          pathname === item.href
                            ? "text-purple-600 dark:text-purple-400"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {item.label}
                        {pathname === item.href && (
                          <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                        )}
                      </Link>
                    )
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition"
                    >
                      {item.label}
                    </button>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
