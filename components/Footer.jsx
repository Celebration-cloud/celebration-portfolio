"use client";

import { Github, Linkedin, MessageCircle, ArrowUp } from "lucide-react";

import {
  AnimatedEyebrow,
  MotionButton,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

export default function Footer() {
  return (
    // Slightly darker than the main #090e11 background to visually ground the page
    <footer className="bg-[#050505] border-t border-white/10 px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section: Primary Footer Content */}
        <Reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 pb-12 border-b border-white/5">
          {/* Left: Typography First Hierarchy */}
          <div>
            <AnimatedEyebrow className="text-xs font-mono uppercase tracking-[0.3em] text-brand-teal mb-3">
              Get in touch
            </AnimatedEyebrow>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white uppercase leading-[0.9]">
              Let&apos;s build <br /> something sharp.
            </h3>
          </div>

          {/* Right: Brutalist Social Icons */}
          <StaggerGroup className="flex items-center gap-2">
            {[
              {
                Icon: Github,
                href: "https://github.com/Celebration-cloud",
                label: "GitHub",
              },
              {
                Icon: Linkedin,
                href: "https://linkedin.com/in/celebration-ojingulu-45b495246",
                label: "LinkedIn",
              },
              {
                Icon: MessageCircle,
                href: "https://wa.me/2349014194307",
                label: "WhatsApp",
              },
            ].map(({ Icon, href, label }) => (
              <StaggerItem key={label}>
                <MotionButton>
                  <a
                    aria-label={label}
                    className="w-11 h-11 rounded-none bg-white/5 flex items-center justify-center text-brand-gray hover:bg-brand-teal hover:text-black transition-colors duration-300"
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon size={18} strokeWidth={2.5} />
                  </a>
                </MotionButton>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        {/* Bottom Meta Bar: Brutalist Accents */}
        <Reveal
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          delay={0.1}
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30">
            © {new Date().getFullYear()} Celebration Ojingulu. All rights
            reserved.
          </p>

          {/* Back to top button with subtle motion */}
          <a
            href="#top"
            className="group flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 hover:text-brand-teal transition-colors"
          >
            Back to top
            <ArrowUp
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>
        </Reveal>
      </div>
    </footer>
  );
}
