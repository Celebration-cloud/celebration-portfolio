"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

export default function Testimonials() {
  const articles = [
    {
      title: "Mastering Next.js 14 App Router",
      description: "A deep dive into server components and efficient data fetching strategies.",
      date: "Oct 12, 2023",
      readTime: "5 min read",
      href: "#",
    },
    {
      title: "Color Grading Basics for Devs",
      description: "How to make your promotional videos look professional using DaVinci Resolve.",
      date: "Sep 28, 2023",
      readTime: "7 min read",
      href: "#",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#03080A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-white">Client Feedback</h2>
          <div className="bg-[#0A1114] border border-white/5 p-8 rounded-3xl relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-brand-teal/10 pointer-events-none" />
            <p className="text-lg leading-relaxed text-brand-gray mb-8 relative z-10 pt-4 italic">
              "Celebration didn't just build us a fast website; he completely understood our brand's voice and delivered video content that matched the new site perfectly. A rare combination of technical and creative talent."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-dark border border-brand-teal/30 flex items-center justify-center font-bold text-brand-teal">
                SJ
              </div>
              <div>
                <h4 className="font-bold text-white">Sarah Jenkins</h4>
                <p className="text-brand-gray text-sm">Marketing Director, TechStart</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
            <span className="text-brand-teal text-xs font-semibold bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
              20+ Articles Published
            </span>
          </div>
          <div className="space-y-4">
            {articles.map((article, idx) => (
              <a
                key={idx}
                className="block bg-[#0A1114] border border-white/5 p-6 rounded-2xl hover:border-brand-teal/50 transition-colors duration-300 group"
                href={article.href}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg text-white group-hover:text-brand-teal transition-colors duration-300">
                    {article.title}
                  </h4>
                  <ArrowUpRight className="text-brand-gray group-hover:text-brand-teal transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 w-5 h-5" />
                </div>
                <p className="text-brand-gray text-sm mb-3">{article.description}</p>
                <span className="text-xs text-brand-gray/60">
                  {article.date} • {article.readTime}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
