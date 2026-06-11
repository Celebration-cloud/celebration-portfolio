"use client";

import { Shield, Code, Video } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function TrustIndicators() {
  const indicators = [
    {
      Icon: Shield,
      text: "3+ Years Professional Experience",
    },
    {
      Icon: Code,
      text: "React & Next.js Specialist",
    },
    {
      Icon: Video,
      text: "Video Editor & Content Creator",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-[#0A1114] border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-12">
        {indicators.map((indicator, index) => {
          const { Icon, text } = indicator;
          return (
            <div key={index} className="flex items-center w-full justify-center md:w-auto">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-4 text-brand-gray hover:text-brand-teal transition-colors duration-300 group"
              >
                <Icon className="w-8 h-8 text-brand-gray group-hover:text-brand-teal transition-colors duration-300" strokeWidth={1.5} />
                <span className="font-bold text-base md:text-lg lg:text-xl whitespace-nowrap">{text}</span>
              </motion.div>
              {index < indicators.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-white/10 ml-8 lg:ml-12" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
