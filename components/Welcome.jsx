"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageContainerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
    },
  },
};

export default function Welcome() {
  const whatsappUrl = `https://wa.me/${siteConfig.about.contact.phone.replace("+", "")}`;

  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden pt-12 pb-24"
      id="scrollspyHeading1"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl aspect-square bg-brand-teal/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Massive Background Text */}
      <div className="bg-text-portfolio w-full text-center hidden md:block">PORTFOLIO</div>

      <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Headline & CTA */}
        <div className="w-full md:w-1/2 text-left order-2 md:order-1">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white"
          >
            Frontend Engineer <br /> &amp; Digital Content <br />
            <span className="text-gradient-teal">Creator</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-gray text-base md:text-lg lg:text-xl mb-10 max-w-lg leading-relaxed"
          >
            I build fast, SEO-focused web applications and create engaging digital content that helps brands grow online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full flex-wrap"
          >
            <Link
              className="w-full sm:w-auto bg-brand-teal hover:bg-[#00cce6] text-black font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              href="#scrollspyHeading5"
            >
              View Projects
              <ArrowUpRight size={20} />
            </Link>
            <a
              className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-brand-teal hover:text-brand-teal text-white font-medium py-4 px-8 rounded-full flex items-center justify-center transition-colors"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <Link
              className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-brand-teal hover:text-brand-teal text-white font-medium py-4 px-8 rounded-full flex items-center justify-center transition-colors"
              href="#scrollspyHeading8"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Profile Image Wrapper */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={imageContainerVariants}
          className="relative w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-12 md:mb-0"
        >
          {/* decorative circles behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-brand-teal/20 rounded-full max-w-lg" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square border border-brand-teal/40 rounded-full max-w-md" />
          
          <div className="relative w-64 md:w-80 lg:w-96 aspect-[4/5] rounded-3xl overflow-hidden z-10 drop-shadow-2xl bg-brand-dark">
            <Image
              alt="Portrait of Celebration Ojingulu"
              className="object-cover object-center"
              fill
              priority
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhlMKM0sXJ7hu1mLJCnfJ0j4tKUx5lz7FeMTt14W90hvowjFr-eNrAzkx5XtafJ7ZvOTktlu3YUbprlwSosPQUkMp0WbFAtWd0-OWU1uZBSniRnlj9H7bEp3uszV8xFZP4d5nf61PSeo_SoGd3c4idGqLn1GqMBVj1TOlQSL6r4KDiJKApoS5buhx-iKHXRqW3H5EKDB9FUAg1MWPwRRm6ISTZMiNQa4RPyDF7tZui2U7GWlD0OwgCeZl5ycnvfAXCXqsscfQFyzJp"
            />
          </div>

          {/* Floating Social Icons */}
          <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
            <a
              className="w-12 h-12 rounded-full bg-brand-dark border border-brand-teal/30 flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-black transition-all shadow-lg"
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              className="w-12 h-12 rounded-full bg-brand-dark border border-brand-teal/30 flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-black transition-all shadow-lg"
              href="https://linkedin.com/in/celebration-ojingulu-45b495246"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              className="w-12 h-12 rounded-full bg-brand-dark border border-brand-teal/30 flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-black transition-all shadow-lg"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Side Elements */}
      <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden md:block">
        <svg
          fill="none"
          height="300"
          viewBox="0 0 20 200"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0V200M0 100H20M5 50H15M5 150H15M8 25H12M8 175H12"
            stroke="#00E5FF"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
}
