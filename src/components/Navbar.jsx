"use client";

import React, { useState } from "react";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

import { Home, Bot, BarChart2, ImageIcon, BookOpen, Briefcase, Users, MessageSquare } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { link: "#home", name: "Home", icon: <Home className="h-5 w-5" /> },
    { link: "#about", name: "About", icon: <Bot className="h-5 w-5" /> },
    { link: "#events", name: "Events", icon: <BarChart2 className="h-5 w-5" /> },
    { link: "#gallery", name: "Gallery", icon: <ImageIcon className="h-5 w-5" /> },
    { link: "#blog", name: "Blogs & Projects", icon: <BookOpen className="h-5 w-5" /> },
    { link: "#board", name: "Board", icon: <Users className="h-5 w-5" /> },
    { link: "#contact", name: "Contact us", icon: <MessageSquare className="h-5 w-5" /> },
  ];

  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {

        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  const handleClick = (e) => {
    const href = e.currentTarget.getAttribute("href");

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
      {/* Top Navbar for Desktop */}
      <motion.div
        initial={{opacity: 1, y: 0}}
        animate={{opacity: visible ? 1 : 0, y: visible ? 0 : -100}}
        transition={{duration: 0.2}}
        className="hidden sm:flex fixed top-6 inset-x-0 px-8 py-2 rounded-full lg:max-w-[80%] md:max-w-[90%] ml-auto mr-auto 
                    items-center justify-around space-x-3 
                    bg-gray-100/15 backdrop-blur-md border border-gray-100/30 shadow-md z-50">
        {navItems.map((item, idx) => (
          <a
            key={item.link}
            href={item.link}
            onClick={handleClick}
            aria-label={`Go to ${item.link}`}
            className="flex items-center p-2 rounded-full text-gray-50">
            {item.icon}
            <span className=" ml-1 font-semibold font-serif">
              {item.name}
            </span>
          </a>
        ))}
      </motion.div>

      {/* Bottom Navbar for Mobile */}
      <motion.div
        initial={{opacity: 1, y: 100}}
        animate={{opacity: visible ? 1 : 0, y: visible ? 0 : 100}}
        transition={{duration: 0.2}}
        className="flex sm:hidden fixed bottom-4 inset-x-0 px-4 py-2 rounded-2xl max-w-md ml-auto mr-auto 
                    items-center justify-around space-x-2 
                    bg-gray-100/15 backdrop-blur-md border border-gray-100/30 shadow-md z-50">
        {navItems.map((item, idx) => (
          <a
            key={item.link}
            href={item.link}
            onClick={handleClick}
            aria-label={`Go to ${item.link}`}
            className="flex flex-col items-center p-2 rounded-full text-gray-50">
            {item.icon}
            {/* 
            <span className="text-xs mt-1 font-semibold">
              {item.name}
            </span>*/}
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

