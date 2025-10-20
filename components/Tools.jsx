/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
"use client";
import Image from "next/image";

export default function Tools({ data }) {
  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900"
      id="scrollspyHeading3"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white text-center md:text-left">
          Tech Stack
        </h2>

        {/* Marquee Container */}
        <div className="overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...data, ...data].map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2 w-20 sm:w-24 md:w-28 mx-4 shrink-0"
              >
                <Image
                  alt={tool.label}
                  className={`object-contain transition-transform duration-300 hover:scale-110 ${
                    tool.label === "GitHub" ? "dark:invert" : ""
                  }`}
                  height={64}
                  src={tool.src}
                  width={64}
                />
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 text-center">
                  {tool.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
          will-change: transform;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 1024px) {
          .animate-marquee {
            animation-duration: 50s;
          }
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 60s;
          }
        }
      `}</style>
    </section>
  );
}
