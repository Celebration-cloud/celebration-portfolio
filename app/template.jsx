"use client";

import { motion, useReducedMotion } from "framer-motion";

import { EASE_OUT } from "@/components/motion/MotionPrimitives";

export default function Template({ children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-full overflow-x-hidden"
      initial={shouldReduceMotion ? false : { opacity: 0.72, y: 12 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}
