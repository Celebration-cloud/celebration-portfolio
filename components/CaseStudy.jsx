"use client";

import { AlertCircle, Lightbulb, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function CaseStudy() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-brand-teal text-black overflow-hidden" id="case-study">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            Performance Optimization Case Study
          </motion.h2>
          <div className="w-16 h-1 bg-black rounded-full mb-6" />
          <motion.p 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-black/80 font-medium"
          >
            Real results from real-world problem solving.
          </motion.p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {/* Card 1: Problem */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-black/5 rounded-2xl p-6 border border-black/10 flex flex-col justify-between"
          >
            <div>
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-red-700">
                <AlertCircle className="w-5 h-5" />
                Problem
              </h4>
              <p className="text-sm font-semibold text-black/80 leading-relaxed">
                Legacy website suffered from slow load times (&gt;5s) and poor Core Web Vitals.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Solution */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-black/5 rounded-2xl p-6 border border-black/10 flex flex-col justify-between"
          >
            <div>
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-blue-850">
                <Lightbulb className="w-5 h-5" />
                Solution
              </h4>
              <p className="text-sm font-semibold text-black/80 leading-relaxed">
                Implemented Next.js with ISR (Incremental Static Regeneration) &amp; dynamic code splitting.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Result */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-black/90 text-white rounded-2xl p-6 shadow-xl transform sm:-translate-y-2 border border-white/5 flex flex-col justify-between"
          >
            <div>
              <h4 className="font-bold text-lg mb-2 text-brand-teal flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                Result
              </h4>
              <p className="text-sm font-medium text-white/90 leading-relaxed">
                Achieved a blazing fast <span className="text-brand-teal text-xl font-bold ml-1">1.8s</span> load time, boosting SEO rankings.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
