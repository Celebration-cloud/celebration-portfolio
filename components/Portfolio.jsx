/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Portfolio({ data }) {
  const categories = [
    "All",
    ...new Set(data.flatMap((p) => p.tools.split(",").map((t) => t.trim()))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData =
    activeCategory === "All"
      ? data
      : data.filter((project) =>
          project.tools
            .split(",")
            .map((t) => t.trim())
            .includes(activeCategory)
        );

  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900"
      id="scrollspyHeading5"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Portfolio
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-indigo-500 hover:text-white"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((project, index) => (
            <a
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              href={project.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="relative w-full h-64 md:h-72 lg:h-80">
                <Image
                  fill
                  alt={project.title}
                  blurDataURL={project.image}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  placeholder="blur"
                  src={project.image}
                />

                {/* Smart Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent dark:from-gray-900/95 dark:via-gray-800/70 dark:to-transparent text-white p-5 transition-all duration-500 group-hover:h-full h-32 flex flex-col justify-end">
                  <div className="transition-all duration-500 transform group-hover:translate-y-0 translate-y-3">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.tools.split(",").map((tech, i) => (
                        <span
                          key={i}
                          className="bg-indigo-500/80 dark:bg-indigo-400/70 text-white text-xs px-2 py-1 rounded-full"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>

                    <ul className="list-disc list-inside text-sm space-y-1 mb-2 max-h-0 group-hover:max-h-40 overflow-hidden overflow-y-scroll scrollbar-hide transition-all duration-500 text-gray-200 dark:text-gray-300">
                      {project.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>

                    <p className="mt-2 text-indigo-400 dark:text-indigo-300 underline text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View Project
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
