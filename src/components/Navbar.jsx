"use client";

import React, { useState } from "react";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

import { Home, Bot, BarChart2, ImageIcon, BookOpen,Briefcase, Users, MessageSquare } from "lucide-react";

export default function Navbar() {
 const navItems = [
  { link: "#home", name: "Home", icon: <Home className="h-5 w-5" /> },
  { link: "#about", name: "About", icon: <Bot className="h-5 w-5" /> },
  { link: "#events", name: "Events", icon: <BarChart2 className="h-5 w-5" /> },
  { link: "#gallery", name: "Gallery", icon: <ImageIcon className="h-5 w-5" /> },
  { link: "#blog", name: "Blogs", icon: <BookOpen className="h-5 w-5" /> },
  { link: "#projects", name: "Projects", icon: <Briefcase className="h-5 w-5" /> },
  { link: "#board", name: "Board", icon: <Users className="h-5 w-5" /> },
  { link: "#contact", name: "Contact us", icon: <MessageSquare className="h-5 w-5" /> },
];


  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();

      // Always visible at the top of the page
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        // Show on back scroll, hide on forward scroll
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Handle smooth scrolling for anchor links
  const handleClick = (e) => {
    const href = e.currentTarget.getAttribute("href");

    // Only handle anchor links (not external links)
    if (href?.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{opacity: 1, y: 0}}
        animate={{opacity: visible ? 1 : 0, y: visible ? 0 : -100}}
        transition={{duration: 0.2}}
        className="flex max-w-[80%] h-14 fixed top-6 inset-x-0 mx-auto border border-transparent dark:border-gray-500 rounded-full dark:bg-black bg-gray-50 shadow-md z-50 pr-2 pl-8 py-2 items-center justify-center space-x-4">
        {navItems.map((item, idx) => (
          <a
            key={`link-${idx}`}
            href={item.link}
            onClick={handleClick}
            className="flex justify-around items-stretch space-x-10 text-gray-500 dark:text-gray-50 dark:hover:text-gray-300 hover:text-gray-500">
            <span className="block sm:hidden">{item.icon}</span>
            <span className="hidden sm:block text-xl">{item.name}</span>
          </a>
        ))}
        
      </motion.div>
    </AnimatePresence>
  );
}
