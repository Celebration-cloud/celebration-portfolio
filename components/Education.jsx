"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Education({ data }) {
  if (!data) return null;

  const academic = data.filter(
    (edu) => !edu.license && !edu.institution.toLowerCase().includes("udemy"),
  );
  const certifications = data.filter(
    (edu) => edu.license || edu.institution.toLowerCase().includes("udemy"),
  );

  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505] border-t border-white/5"
      id="education"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-brand-teal mb-4">
            02 — Foundation
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            Education & <br /> Certifications.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Academic Column */}
          <div>
            <h3 className="text-xs font-mono font-bold mb-8 uppercase tracking-[0.2em] text-white/40 border-b border-white/10 pb-4">
              Academic Background
            </h3>
            <div className="space-y-10">
              {academic.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="group"
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <h4 className="text-xl font-bold text-white tracking-tight uppercase">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-white/30 tracking-widest">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-sm text-brand-teal font-mono uppercase tracking-wider mb-4">
                    {edu.institution}
                  </p>
                  <p className="text-sm leading-relaxed text-brand-gray max-w-md">
                    Solidified foundational knowledge in computer science,
                    software engineering principles, and IT infrastructure.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-xs font-mono font-bold mb-8 uppercase tracking-[0.2em] text-white/40 border-b border-white/10 pb-4">
              Certifications & Licenses
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <motion.a
                  key={idx}
                  className="group flex items-center justify-between p-5 bg-white/[0.02] hover:bg-white/[0.05] border-l-2 border-transparent hover:border-brand-teal transition-all duration-300"
                  href={`https://www.udemy.com/certificate/${cert.license}/`}
                  initial={{ opacity: 0, y: 10 }}
                  rel="noopener noreferrer"
                  target="_blank"
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-brand-teal transition-colors tracking-tight">
                      {cert.degree}
                    </h4>
                    <p className="text-xs text-brand-gray font-mono uppercase tracking-wider">
                      {cert.institution} • {cert.year}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-brand-teal transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
