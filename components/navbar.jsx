"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Menu,
  X,
  Github,
  Linkedin,
  MessageCircle,
  Sun,
  Moon,
} from "lucide-react";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  // Simple theme state (Replace with next-themes in production)
  const [isDark, setIsDark] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-6 flex justify-center items-center">
      {/* Base: Minimal Glassmorphism Container (Borderless, defined by depth/shadow) */}
      <div className="w-full max-w-6xl bg-[#090e11]/90 backdrop-blur-xl py-3 px-6 rounded-2xl flex justify-between items-center shadow-2xl shadow-black/40">
        {/* Logo: Minimal base + Brutalist accent (sharp corners, solid block, no border) */}
        <NextLink
          aria-label="Home"
          className="flex items-center gap-2.5 z-10 group"
          href="/"
        >
          <motion.div
            className="w-9 h-9 rounded-none bg-brand-teal flex items-center justify-center text-black font-black text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Home size={18} strokeWidth={3} />
          </motion.div>
          <span className="text-xl font-bold tracking-tighter text-white group-hover:text-brand-teal transition-colors uppercase">
            Celebration
          </span>
        </NextLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 relative">
          {siteConfig.navItems.map((item) => {
            const isHovered = hoveredSection === item.href;
            const isActive = pathname === item.href;

            return (
              <NextLink
                key={item.label}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 z-10 ${
                  isActive || isHovered ? "text-white" : "text-brand-gray"
                }`}
                href={item.href}
                onMouseEnter={() => setHoveredSection(item.href)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Brutalist accent: Solid sharp block for hover (no borders) */}
                {isHovered && (
                  <motion.span
                    layoutId="navbarHoverPill"
                    className="absolute inset-0 bg-white/10 rounded-none -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {/* Active state: Sharp solid underline */}
                {isActive && !isHovered && (
                  <motion.span
                    layoutId="navbarActiveDot"
                    className="absolute bottom-1 left-4 right-4 h-[2px] bg-brand-teal rounded-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </NextLink>
            );
          })}
        </nav>

        {/* Desktop Right Side: Socials + Dark Mode Toggle */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark Mode"
            className="w-9 h-9 rounded-none bg-white/5 flex items-center justify-center text-brand-gray hover:text-white hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          {/* Socials */}
          {[
            {
              Icon: Github,
              href: "https://github.com/Celebration-cloud",
              label: "GitHub",
            },
            {
              Icon: Linkedin,
              href: "https://linkedin.com/in/celebration-ojingulu-45b495246",
              label: "LinkedIn",
            },
            {
              Icon: MessageCircle,
              href: "https://wa.me/2349014194307",
              label: "WhatsApp",
            },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              aria-label={label}
              className="w-9 h-9 rounded-none bg-white/5 flex items-center justify-center text-brand-gray hover:text-brand-teal hover:bg-white/10 transition-colors"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          className="p-2 text-white hover:text-brand-teal transition-colors z-10 relative lg:hidden rounded-none bg-white/5 hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.98 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-x-4 top-[84px] max-h-[calc(100vh-120px)] bg-[#090e11]/98 backdrop-blur-xl p-6 rounded-2xl z-40 lg:hidden shadow-2xl shadow-black/50 overflow-y-auto"
            exit={{ opacity: 0, y: -15 }}
            initial={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <nav className="flex flex-col items-start gap-1">
              {siteConfig.navItems.map((item, i) => {
                const isActive = pathname === item.href;

                return (
                  <motion.div
                    key={item.label}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full"
                    initial={{ opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NextLink
                      className={`block py-3 px-4 text-lg font-medium transition-all rounded-none ${
                        isActive
                          ? "text-white bg-white/10 font-bold"
                          : "text-brand-gray hover:text-white hover:bg-white/5"
                      }`}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NextLink>
                  </motion.div>
                );
              })}

              {/* Mobile Bottom Section */}
              <div className="flex gap-3 mt-6 pt-6 w-full justify-between items-center">
                <div className="flex gap-2">
                  {[
                    {
                      Icon: Github,
                      href: "https://github.com/Celebration-cloud",
                      label: "GitHub",
                    },
                    {
                      Icon: Linkedin,
                      href: "https://linkedin.com/in/celebration-ojingulu-45b495246",
                      label: "LinkedIn",
                    },
                    {
                      Icon: MessageCircle,
                      href: "https://wa.me/2349014194307",
                      label: "WhatsApp",
                    },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      aria-label={label}
                      className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center text-brand-gray hover:text-brand-teal hover:bg-white/10 transition-all"
                      href={href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
                {/* Mobile Dark Mode Toggle */}
                <button
                  onClick={() => setIsDark(!isDark)}
                  aria-label="Toggle Dark Mode"
                  className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center text-brand-gray hover:text-white hover:bg-white/10 transition-colors"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
