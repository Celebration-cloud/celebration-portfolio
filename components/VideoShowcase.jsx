"use client";

import { ExternalLink } from "lucide-react";

import {
  AnimatedEyebrow,
  MotionButton,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";
import BlurText from "@/components/ui/BlurText";

export default function VideoShowcase() {
  const featuredVideos = [
    {
      title: "Adj Client Testimonial",
      client: "Adj",
      type: "Testimonial Video",
      duration: "TBD", // Update with actual duration (e.g., "1:30")
      tools: ["DaVinci Resolve", "Audio Mixing", "Color Grading"],
      description:
        "Produced a compelling testimonial video capturing authentic client feedback. Focused on clear audio, engaging pacing, and visual storytelling to build trust and credibility for the brand.",
      embedUrl:
        "https://drive.google.com/file/d/1lmLXjvNT6qX8LxOQV6WLmqtRzKQOsZjI/preview",
      thumbnail: "/video-thumb-1.jpg",
    },
    {
      title: "Fabtops Founder Interview",
      client: "Fabtops",
      type: "Interview Video",
      duration: "TBD", // Update with actual duration
      tools: ["DaVinci Resolve", "Multi-cam Editing", "Color Grading"],
      description:
        "Directed and edited an in-depth interview with the owner of Fabtops, highlighting their entrepreneurial journey and brand vision. Delivered a polished narrative that connects the audience with the heart of the brand.",
      embedUrl:
        "https://drive.google.com/file/d/1_IwEY4uys9QdB1iYw1Ad1ITFkUFkGoRp/preview",
      thumbnail: "/video-thumb-2.jpg",
    },
    {
      title: "Fabtops Promotional Ad",
      client: "Fabtops",
      type: "Ads Video",
      duration: "TBD", // Update with actual duration
      tools: ["DaVinci Resolve", "Motion Graphics", "Sound Design"],
      description:
        "Created a high-energy promotional ad for Fabtops to showcase their latest products. Utilized dynamic transitions, color grading, and upbeat pacing to drive engagement and boost conversions across social platforms.",
      embedUrl:
        "https://drive.google.com/file/d/1Mxi6cOAbcY0sp4K8SSr6QfoExHq_nP9w/preview",
      thumbnail: "/video-thumb-3.jpg",
    },
  ];

  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 bg-[#090e11] border-t border-white/5"
      id="video-work"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal className="mb-16">
          <AnimatedEyebrow className="text-xs font-mono uppercase tracking-[0.3em] text-brand-teal mb-4">
            01 — Video Production
          </AnimatedEyebrow>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-6">
            <BlurText
              as="span"
              delay={65}
              direction="bottom"
              text="Digital Content"
            />
            <BlurText
              as="span"
              className="text-brand-teal"
              delay={65}
              direction="bottom"
              text="Creation."
            />
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-brand-gray max-w-2xl">
            Beyond code, I produce high-quality video content using DaVinci
            Resolve. Specializing in color grading, audio cleanup, and
            short-form editing for web and social platforms.
          </p>
        </Reveal>

        {/* Featured Videos Grid */}
        <StaggerGroup
          className="grid gap-px bg-white/10 mb-12"
          staggerChildren={0.1}
        >
          {featuredVideos.map((video) => (
            <StaggerItem
              key={video.title}
              as="article"
              className="group bg-[#090e11] p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left: Video Player */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-video overflow-hidden rounded-none bg-[#0A1114]">
                    <iframe
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      className="absolute inset-0 w-full h-full"
                      src={video.embedUrl}
                      title={video.title}
                    />
                  </div>
                </div>

                {/* Right: Meta & Description */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    {/* Meta Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="rounded-none bg-brand-teal/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-brand-teal">
                        {video.type}
                      </span>
                      <span className="rounded-none bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-white/60">
                        {video.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-3">
                      {video.title}
                    </h3>

                    {/* Client */}
                    <p className="text-sm font-mono text-brand-teal uppercase tracking-wider mb-6">
                      Client: {video.client}
                    </p>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-brand-gray mb-6">
                      {video.description}
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {video.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="rounded-none bg-white/5 px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-white/40"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* View Full Archive Button */}
        <Reveal className="flex justify-center">
          <MotionButton>
            <a
              className="inline-flex items-center gap-3 rounded-none bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-teal hover:text-black transition-colors duration-300 group"
              href="https://drive.google.com/drive/folders/1adELVMv1P4RQu6VHvFEOPRKk_dx8hClg?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              View Full Video Archive
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </MotionButton>
        </Reveal>
      </div>
    </section>
  );
}
