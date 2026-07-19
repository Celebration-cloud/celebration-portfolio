"use client";

import Image from "next/image";

import {
  AnimatedEyebrow,
  StaggerGroup,
  StaggerItem,
  scaleIn,
} from "@/components/motion/MotionPrimitives";

export default function Tools({ data }) {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 relative bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <AnimatedEyebrow className="text-xs font-mono uppercase tracking-[0.3em] text-brand-teal mb-8">
          03 — Ecosystem
        </AnimatedEyebrow>

        {/* Brutalist Structural Grid: Uses a 1px gap with a background color to create dividing lines */}
        <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-white/10">
          {data &&
            data.map((tool) => (
              <StaggerItem
                key={tool.label}
                className="bg-[#050505] aspect-square flex flex-col items-center justify-center gap-3 group hover:bg-white/[0.02] transition-colors duration-300"
                variant={scaleIn}
                whileHover={{ y: -4, scale: 1.015 }}
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
              </StaggerItem>
            ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
