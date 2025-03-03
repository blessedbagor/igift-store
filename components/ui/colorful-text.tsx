"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(255, 69, 0)",    // Red-Orange  
    "rgb(255, 215, 0)",   // Gold  
    "rgb(34, 139, 34)",   // Forest Green  
    "rgb(249, 115, 22)",  // Vivid Orange  
    "rgb(231, 84, 128)",  // Vivid Pink  
    "rgb(139, 0, 0)",     // Dark Red  
    "rgb(85, 160, 50)",   // Leaf Green  
    "rgb(255, 192, 203)", // Light Pink  
    "rgb(218, 165, 32)",  // Goldenrod  
    "rgb(220, 20, 60)",   // Crimson Red  
    "rgb(255, 140, 0)"    // Dark Orange  
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
