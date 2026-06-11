"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const { title, image, tools, description, href } = project;
  const toolTags = tools ? tools.split(",").map((t) => t.trim()) : [];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(233,69,96,0.15)]"
    >
      <div>
        {/* Project Image Section */}
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            {href && (
              <motion.a
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ rotate: 45, scale: 1.1 }}
                className="rounded-full bg-white/10 p-2 text-white hover:bg-primary hover:text-black transition-colors duration-300"
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            )}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-neutral-400 font-light">
            {description[0]}
          </p>

          {/* Tools / Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {toolTags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-xs text-neutral-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
