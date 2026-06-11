import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Portfolio from "@/components/Portfolio";
import VideoShowcase from "@/components/VideoShowcase";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Portfolio — Celebration Ojingulu",
  description:
    "Selected projects and production work from Adesa HQ and beyond.",
};

export default function PortfolioPage() {
  return (
    <main className="bg-[#090e11]">
      {/* Hero Section */}
      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-brand-teal">
              Selected Work / 2022 — 2026
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-8">
              Production <br />
              <span className="text-brand-teal">Portfolio.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-brand-gray max-w-2xl">
              Frontend Engineer at Adesa HQ building responsive web applications
              with Next.js, React, and TypeScript. Also producing digital
              content with DaVinci Resolve. Each project shipped with
              performance and SEO in mind.
            </p>
            <div className="mt-10">
              <Link
                className="inline-flex items-center gap-3 rounded-none bg-brand-teal px-6 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-white hover:translate-x-1"
                href="/contact"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Production Showcase */}
      <VideoShowcase />

      {/* Web Development Projects */}
      <Portfolio data={siteConfig.portfolio} />
    </main>
  );
}
