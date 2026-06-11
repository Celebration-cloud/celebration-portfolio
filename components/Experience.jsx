"use client";

import { motion } from "framer-motion";

export default function Experience({ data }) {
  // Sort: Adesa (Present) -> PalmPay -> GIIT
  const sortedData = [...data].sort((a, b) => {
    const aActive =
      a.date.toLowerCase().includes("till date") ||
      a.date.toLowerCase().includes("present");
    const bActive =
      b.date.toLowerCase().includes("till date") ||
      b.date.toLowerCase().includes("present");
    if (aActive && !bActive) return -1;
    if (!aActive && bActive) return 1;
    return 0;
  });

  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 bg-[#090e11]"
      id="experience"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-brand-teal mb-4">
            01 — Timeline
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            Professional <br /> Experience.
          </h2>
        </div>

        {/* Structural Grid: 1px gap creates brutalist dividing lines without using borders */}
        <div className="grid gap-px bg-white/10">
          {sortedData.map((exp, index) => {
            const isActive =
              exp.date.toLowerCase().includes("till date") ||
              exp.date.toLowerCase().includes("present");

            return (
              <motion.article
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="group bg-[#090e11] p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  {/* Left Column: Meta & Company */}
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      {/* Brutalist Accent: Sharp square indicator instead of a circle */}
                      <span
                        className={`w-2 h-2 rounded-none ${isActive ? "bg-brand-teal" : "bg-white/20"}`}
                      />
                      <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                        {exp.date}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-mono text-brand-teal uppercase tracking-wider">
                      {exp.title}
                    </p>
                  </div>

                  {/* Right Column: Description */}
                  <div className="md:w-2/3 space-y-4">
                    <ul className="space-y-4">
                      {exp.description.map((desc, i) => (
                        <li
                          key={`${exp.company}-${i}`}
                          className="flex items-start gap-4 text-base leading-relaxed text-brand-gray"
                        >
                          <span className="text-brand-teal font-mono text-xs mt-1.5 shrink-0">
                            0{i + 1}
                          </span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
