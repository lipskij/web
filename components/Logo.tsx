"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedELogoProps {
  size?: number;
  color?: string;
}

const AnimatedELogo: React.FC<AnimatedELogoProps> = ({
  size = 50,
  color = "#fff",
}) => {
  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 2 },
        opacity: { duration: 0.01 },
        delay: i * 1.5,
      },
    }),
  };

  return (
    <div className="self-start">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style={{ width: size, height: size }}
      >
        <motion.path
          d="M20 20 L80 20 L20 20 L20 80 L80 80"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        />
        <motion.path
          d="M20 50 L60 50"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedELogo;
