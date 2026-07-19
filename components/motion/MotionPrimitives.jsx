"use client";

import { motion, useReducedMotion } from "framer-motion";

import DecryptedText from "@/components/ui/DecryptedText";

export const EASE_OUT = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_OUT },
  },
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.2,
  margin = "0px 0px -8% 0px",
  variant = fadeUp,
  as = "div",
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  const visible = variant.visible;
  const transition = {
    ...(visible.transition || {}),
    delay: shouldReduceMotion ? 0 : delay,
    duration: shouldReduceMotion ? 0 : visible.transition?.duration,
  };

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      variants={{
        ...variant,
        visible: { ...visible, transition },
      }}
      viewport={{ once: true, amount, margin }}
      whileInView="visible"
    >
      {children}
    </MotionTag>
  );
}

export function StaggerGroup({
  children,
  className = "",
  delayChildren = 0.08,
  staggerChildren = 0.08,
  as = "div",
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: shouldReduceMotion ? 0 : delayChildren,
            staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
          },
        },
      }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      whileInView="visible"
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className = "",
  as = "div",
  variant = fadeUp,
  whileHover,
  whileTap,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      variants={shouldReduceMotion ? undefined : variant}
      whileHover={shouldReduceMotion ? undefined : whileHover}
      whileTap={shouldReduceMotion ? undefined : whileTap}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export function AnimatedEyebrow({ children, className = "" }) {
  const text = Array.isArray(children)
    ? children.filter((child) => typeof child === "string").join("")
    : String(children ?? "");

  return (
    <Reveal as="p" className={className} variant={fadeIn}>
      <DecryptedText
        sequential
        animateOn="view"
        className="text-current"
        encryptedClassName="text-white/20"
        maxIterations={8}
        speed={24}
        text={text}
        useOriginalCharsOnly
      />
    </Reveal>
  );
}

export function MotionButton({ children, className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={shouldReduceMotion ? undefined : { x: 4, y: -2 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
