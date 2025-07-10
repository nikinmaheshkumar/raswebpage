"use client"

import { motion } from "motion/react"

function Preloader() {
  const dotVariants = {
    jump: {
      y: -30,
      transition: {
        duration: 0.9,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.div
      animate="jump"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="container min-h-screen bg-[linear-gradient(to_right_bottom,#13121b,#13101d,#130e1f,#130b21,#140822,#170d28,#1a102f,#1e1236,#251944,#2c2053,#332863,#393073)]"
    >
      <motion.div className="dot" variants={dotVariants} />
      <motion.div className="dot" variants={dotVariants} />
      <motion.div className="dot" variants={dotVariants} />
      <StyleSheet />
    </motion.div>
  )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>
      {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }

            .dot {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: rgb(255, 255, 255, 0.4);
              backdrop-filter: blur(10px);
              border: 1px solid rgb(255, 255, 255, 0.4);
              box-shadow: 0 4px 14px rgb(0, 0, 0, 0.1);
              will-change: transform;
}
            `}
    </style>
  )
}

export default Preloader
