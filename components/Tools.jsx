"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Tools({ data }) {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 relative bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-brand-teal mb-8">
          03 — Ecosystem
        </p>

        {/* Brutalist Structural Grid: Uses a 1px gap with a background color to create dividing lines */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-white/10">
          {data &&
            data.map((tool, index) => (
              <motion.div
                key={tool.label}
                className="bg-[#050505] aspect-square flex flex-col items-center justify-center gap-3 group hover:bg-white/[0.02] transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <div className="relative w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    fill
                    alt={tool.label}
                    className="object-contain"
                    src={tool.src}
                  />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 group-hover:text-brand-teal transition-colors">
                  {tool.label}
                </span>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
