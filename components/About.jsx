"use client";

import {
  AnimatedEyebrow,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";
import BlurText from "@/components/ui/BlurText";

export default function About({ data }) {
  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 relative bg-[#090e11]"
      id="scrollspyHeading2"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column: Bio */}
          <Reveal className="lg:w-1/2">
            <AnimatedEyebrow className="text-xs font-mono uppercase tracking-[0.3em] text-brand-teal mb-6">
              01 — Profile
            </AnimatedEyebrow>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[0.9] uppercase mb-8">
              <BlurText
                as="span"
                delay={65}
                direction="bottom"
                text="Frontend Engineer &"
              />
              <BlurText
                as="span"
                className="text-brand-teal"
                delay={65}
                direction="bottom"
                text="Content Producer."
              />
            </h2>
            <div className="space-y-6 text-brand-gray text-base md:text-lg leading-relaxed max-w-lg">
              <p>
                Frontend Engineer with 2+ years building fast, SEO-optimized web
                apps using{" "}
                <span className="text-white font-medium">
                  React, Next.js, and TypeScript
                </span>
                . Currently at Adesa HQ delivering full-cycle frontend
                development.
              </p>
              <p>
                Beyond code, I am a skilled digital content producer
                specializing in
                <span className="text-white font-medium"> DaVinci Resolve</span>
                . This dual expertise allows me to build robust platforms and
                craft the compelling visual narratives that live on them.
              </p>
              <p>
                Former IT Specialist at PalmPay Ltd. BSc in Information
                Technology. Open to remote roles worldwide.
              </p>
            </div>
          </Reveal>

          {/* Right Column: Skills */}
          <Reveal className="lg:w-1/2" delay={0.15}>
            <AnimatedEyebrow className="text-xs font-mono uppercase tracking-[0.3em] text-brand-teal mb-6">
              02 — Arsenal
            </AnimatedEyebrow>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-10">
              Technical Stack
            </h3>

            <StaggerGroup className="space-y-10" staggerChildren={0.1}>
              {data &&
                data.map((category, index) => (
                  <StaggerItem key={index}>
                    <h4 className="text-xs font-mono font-bold mb-4 uppercase tracking-[0.2em] text-white/40 border-b border-white/5 pb-2">
                      {category.label}
                    </h4>
                    <StaggerGroup
                      className="flex flex-wrap gap-2"
                      delayChildren={0.04}
                      staggerChildren={0.035}
                    >
                      {category.tools.map((tool, idx) => (
                        <StaggerItem
                          key={idx}
                          as="span"
                          className="bg-white/5 hover:bg-brand-teal hover:text-black transition-all duration-300 px-3 py-1.5 rounded-none text-xs font-mono font-medium uppercase tracking-wider text-white/80 cursor-default"
                        >
                          {tool}
                        </StaggerItem>
                      ))}
                    </StaggerGroup>
                  </StaggerItem>
                ))}
            </StaggerGroup>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
