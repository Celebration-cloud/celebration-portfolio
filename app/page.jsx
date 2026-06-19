import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Download,
  FolderKanban,
  Mail,
  UserRound,
} from "lucide-react";

import { siteConfig } from "@/config/site";

const quickPages = [
  {
    title: "About",
    description:
      "Background, technical stack, and dual focus on code & content.",
    href: "/about",
    icon: UserRound,
  },
  {
    title: "Experience",
    description: "Timeline at Adesa HQ, PalmPay, and GIIT Africa.",
    href: "/experience",
    icon: Briefcase,
  },
  {
    title: "Portfolio",
    description: "Selected web builds and video production work.",
    href: "/portfolio",
    icon: FolderKanban,
  },
  {
    title: "Contact",
    description: "Reach out for frontend engineering or content collaboration.",
    href: "/contact",
    icon: Mail,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-12 lg:px-24 bg-[#090e11]">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section: Typography + Picture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24 md:mb-32">
          {/* Left: Typography First Hierarchy */}
          <div className="lg:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-brand-teal font-mono">
              {siteConfig.name} — Frontend Engineer & Content Editor
            </p>
            <h1 className="text-5xl font-black tracking-tighter text-white md:text-5xl lg:text-[4.5rem] leading-[0.9] uppercase">
              Building fast <br />
              web apps. <br />
              <span className="text-brand-teal">Crafting sharp</span> <br />
              content.
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-brand-gray md:text-lg">
              2+ years building SEO-optimized interfaces with React, Next.js,
              and TypeScript. Currently at Adesa HQ delivering full-cycle
              frontend development and video production. Open to remote roles
              worldwide.
            </p>

            {/* Brutalist CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              {/* Primary: Download CV */}
              <a
                className="group inline-flex items-center gap-3 rounded-none bg-brand-teal px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white hover:translate-x-1"
                download="Celebration_Ojingulu_CV.pdf"
                href="/Celebration_Ojingulu_CV.pdf"
              >
                Download CV
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              {/* Secondary: Get in Touch */}
              <Link
                className="group inline-flex items-center gap-3 rounded-none border border-white/10 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/5 hover:border-white/20"
                href="/contact"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: The Picture (Brutalist Accent) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 md:w-80 group cursor-pointer">
              {/* Brutalist Accent: Solid offset block behind the image */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-brand-teal rounded-none transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2" />

              {/* Image Container: Sharp corners, no borders */}
              <div className="relative w-full aspect-[4/5] rounded-none overflow-hidden bg-white/5">
                <Image
                  fill
                  alt="Celebration Ojingulu"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                  src="/my-photo.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section: Brutalist Directory */}
        <div className="pt-8">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-brand-gray font-mono">
            Navigation / 04
          </p>

          {/* Structural Grid: Uses a 1px gap with a background color to create brutalist dividing lines without using borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {quickPages.map((page, index) => {
              const Icon = page.icon;

              return (
                <Link
                  key={page.href}
                  className="group relative bg-[#090e11] p-8 md:p-10 transition-colors duration-300 hover:bg-white/[0.03]"
                  href={page.href}
                >
                  {/* Top row: Monospaced Index and Sharp Icon Box */}
                  <div className="flex items-start justify-between mb-16">
                    <span className="text-xs font-mono text-brand-gray">
                      0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center text-brand-gray group-hover:bg-brand-teal group-hover:text-black transition-colors duration-300">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Bottom row: Bold Title and Subtle Arrow */}
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase">
                        {page.title}
                      </h2>
                      <p className="mt-2 text-sm text-brand-gray max-w-xs">
                        {page.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-6 w-6 text-brand-gray transition-all duration-300 group-hover:text-brand-teal group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
