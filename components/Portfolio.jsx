"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ImageOff } from "lucide-react";

import {
  AnimatedEyebrow,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

function ProjectImage({ alt, className, priority = false, sizes, src }) {
  const [status, setStatus] = useState("loading");

  // Guard: treat null / undefined / empty string as an immediate "no image" state
  if (!src) {
    return (
      <div
        aria-label={`${alt} preview unavailable`}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0A1114] text-white/35"
        role="img"
      >
        <ImageOff aria-hidden="true" className="h-7 w-7" />
        <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
          Preview unavailable
        </span>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div
        aria-label={`${alt} preview unavailable`}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0A1114] text-white/35"
        role="img"
      >
        <ImageOff aria-hidden="true" className="h-7 w-7" />
        <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
          Preview unavailable
        </span>
      </div>
    );
  }

  return (
    <>
      {status === "loading" && (
        <div
          aria-label={`Loading ${alt} preview`}
          className="absolute inset-0 z-10 overflow-hidden bg-[#0A1114]"
          role="status"
        >
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/10 via-white/[0.03] to-brand-teal/10 motion-reduce:animate-none" />
          <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
            Loading preview
          </div>
        </div>
      )}
      <Image
        fill
        alt={alt}
        className={`${className} ${
          status === "loaded" ? "opacity-100" : "opacity-0"
        }`}
        priority={priority}
        sizes={sizes}
        src={src}
        onError={() => setStatus("error")}
        onLoad={() => setStatus("loaded")}
      />
    </>
  );
}

export default function Portfolio({ data }) {
  if (!data || data.length === 0) return null;

  // Separate featured projects from additional projects using the featured flag
  const featuredProjects = data.filter((p) => p.featured === true);
  const otherProjects = data.filter((p) => !p.featured);

  return (
    <section
      className="py-16 px-6 md:px-12 lg:px-24 bg-[#050505] border-t border-white/5"
      id="portfolio"
    >
      <div className="max-w-6xl mx-auto">
        {/* Featured Work */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <AnimatedEyebrow className="text-xs font-mono uppercase tracking-[0.3em] text-brand-teal mb-8 border-b border-white/10 pb-4">
              02 — Featured Production
            </AnimatedEyebrow>

            <div className="grid gap-px bg-white/10">
              {featuredProjects.map((project, index) => (
                <Reveal
                  key={project.title}
                  amount={0.05}
                  delay={0}
                  margin="0px 0px -4% 0px"
                >
                  <motion.article
                    className="group bg-[#050505] p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-300"
                    whileHover={{ y: -3 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                      {/* Left: Meta & Description */}
                      <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tools.split(",").map((tool, idx) => (
                              <span
                                key={idx}
                                className="rounded-none bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-white/60"
                              >
                                {tool.trim()}
                              </span>
                            ))}
                          </div>

                          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-4">
                            {project.title}
                          </h3>

                          <div className="space-y-3">
                            {Array.isArray(project.description) ? (
                              project.description.slice(0, 2).map((desc, i) => (
                                <p
                                  key={i}
                                  className="text-sm leading-relaxed text-brand-gray"
                                >
                                  {desc}
                                </p>
                              ))
                            ) : (
                              <p className="text-sm leading-relaxed text-brand-gray">
                                {project.description}
                              </p>
                            )}
                          </div>
                        </div>

                        <a
                          className="inline-flex items-center gap-3 mt-8 text-sm font-bold uppercase tracking-wider text-brand-teal hover:text-white transition-colors group/link"
                          href={project.href}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          View Live Site
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        </a>
                      </div>

                      {/* Right: Image */}
                      <div className="lg:col-span-7">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-none bg-[#0A1114]">
                          {project.image ? (
                            <ProjectImage
                              alt={project.title}
                              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                              priority={index === 0}
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              src={project.image}
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-teal/10 to-transparent">
                              <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/20">
                                Project Screenshot
                              </span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div>
            <AnimatedEyebrow className="text-xs font-mono uppercase tracking-[0.3em] text-brand-teal mb-8 border-b border-white/10 pb-4">
              03 — Additional Projects
            </AnimatedEyebrow>

            <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
              {otherProjects.map((project) => (
                <StaggerItem
                  key={project.title}
                  as="a"
                  className="group bg-[#050505] p-8 hover:bg-white/[0.02] transition-all duration-300 flex flex-col"
                  href={project.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  whileHover={{ y: -4 }}
                >
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-none bg-[#0A1114]">
                    {project.image ? (
                      <ProjectImage
                        alt={project.title}
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        src={project.image}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
                        <ArrowUpRight className="h-8 w-8 text-white/20" />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-bold tracking-tight text-white uppercase mb-3 group-hover:text-brand-teal transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools
                        .split(",")
                        .slice(0, 3)
                        .map((tool, idx) => (
                          <span
                            key={idx}
                            className="rounded-none bg-white/5 px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-white/40"
                          >
                            {tool.trim()}
                          </span>
                        ))}
                    </div>

                    <p className="text-sm leading-relaxed text-brand-gray flex-grow">
                      {Array.isArray(project.description)
                        ? project.description[0]
                        : project.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-teal opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        )}
      </div>
    </section>
  );
}
