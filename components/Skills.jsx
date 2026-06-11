"use client";

import { motion } from "framer-motion";

export default function Skills({ data }) {
  return (
    <section className="py-20 px-6 bg-[#03080A] border-y border-white/5" id="scrollspyHeading3">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Skills &amp; Expertise
          </h2>
          <p className="text-brand-gray max-w-xl leading-relaxed">
            A comprehensive set of technical and soft skills refined through
            professional experience and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((skill, index) => {
            const percentage = parseInt(skill.grade);

            return (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#0A1114] border border-brand-border rounded-2xl p-6 relative overflow-hidden group hover:border-brand-teal/30 transition-colors"
              >
                {/* Teal accent line */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-teal to-transparent" />

                <h3 className="text-lg font-semibold mb-3 text-white">
                  {skill.label}
                </h3>

                {/* Progress Bar */}
                <div className="relative h-1.5 bg-white/10 rounded-full mb-4">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-brand-teal rounded-full shadow-[0_0_10px_rgba(0,229,255,0.5)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.grade }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                  <span className="absolute -top-6 right-0 text-xs text-brand-teal font-bold">
                    {skill.grade}
                  </span>
                </div>

                {/* Tools List */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs bg-brand-teal/10 text-brand-teal border border-brand-teal/20 rounded-full py-1 px-3 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
