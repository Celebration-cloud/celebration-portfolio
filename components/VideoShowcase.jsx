"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function VideoShowcase() {
  const featuredVideos = [
    {
      title: "Adesa HQ Brand Campaign",
      client: "Adesa HQ",
      type: "Promotional Video",
      duration: "2:45",
      tools: ["DaVinci Resolve", "Color Grading", "Sound Design"],
      description:
        "Produced a full brand campaign video featuring motion graphics, color grading, and audio cleanup. Delivered across web and social platforms.",
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
      thumbnail: "/video-thumb-1.jpg",
    },
    {
      title: "PalmPay Product Launch",
      client: "PalmPay Ltd",
      type: "Social Media Reel",
      duration: "0:45",
      tools: ["DaVinci Resolve", "CapCut", "Short-form Editing"],
      description:
        "Created a fast-paced social media reel for product launch. Optimized for Instagram Reels and TikTok with dynamic cuts and trending audio.",
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
      thumbnail: "/video-thumb-2.jpg",
    },
    {
      title: "Yungola Transport Promo",
      client: "Yungola Transport",
      type: "Corporate Video",
      duration: "1:30",
      tools: ["DaVinci Resolve", "Color Grading", "Audio Editing"],
      description:
        "Produced a corporate promotional video showcasing fleet and services. Focused on professional color grading and clean audio mix.",
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
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
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-brand-teal mb-4">
            01 — Video Production
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-6">
            Digital Content <br />
            <span className="text-brand-teal">Creation.</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-brand-gray max-w-2xl">
            Beyond code, I produce high-quality video content using DaVinci
            Resolve. Specializing in color grading, audio cleanup, and
            short-form editing for web and social platforms.
          </p>
        </div>

        {/* Featured Videos Grid */}
        <div className="grid gap-px bg-white/10 mb-12">
          {featuredVideos.map((video, index) => (
            <motion.article
              key={video.title}
              className="group bg-[#090e11] p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileInView={{ opacity: 1, y: 0 }}
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
            </motion.article>
          ))}
        </div>

        {/* View Full Archive Button */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-3 rounded-none bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-teal hover:text-black transition-all duration-300 group"
            href="https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID"
            rel="noopener noreferrer"
            target="_blank"
          >
            View Full Video Archive
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
