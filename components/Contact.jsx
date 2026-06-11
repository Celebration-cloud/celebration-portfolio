"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle, MapPin } from "lucide-react";

import ContactForm from "./ContactForm";

export default function Contact() {
  // Directly from your CV
  const email = "ojinguluc@gmail.com";
  const phone = "+234 903 419 4307";
  const whatsappUrl = "https://wa.me/2349034194307";

  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 relative bg-[#090e11]"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Info & Socials */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-brand-teal mb-6">
              01 — Contact
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-8">
              Let's build <br /> something <br />
              <span className="text-brand-teal">sharp.</span>
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-brand-gray mb-10 max-w-md">
              Frontend Engineer & Digital Content Editor based in Lagos. Open to
              remote roles and freelance projects worldwide.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-12">
              <a
                className="group flex items-center gap-4 text-white hover:text-brand-teal transition-colors"
                href={`mailto:${email}`}
              >
                <span className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-black transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    Email
                  </p>
                  <p className="text-sm font-medium">{email}</p>
                </div>
              </a>
              <a
                className="group flex items-center gap-4 text-white hover:text-brand-teal transition-colors"
                href={whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-black transition-all duration-300">
                  <MessageCircle className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    WhatsApp
                  </p>
                  <p className="text-sm font-medium">{phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-white">
                <span className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    Location
                  </p>
                  <p className="text-sm font-medium">
                    Lagos, Nigeria{" "}
                    <span className="text-brand-teal">(Remote)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-4">
                Socials
              </p>
              <div className="flex gap-2">
                <a
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-none bg-white/5 flex items-center justify-center text-brand-gray hover:bg-brand-teal hover:text-black transition-all duration-300 hover:-translate-y-0.5"
                  href="https://linkedin.com/in/celebration-ojingulu-45b495246"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-none bg-white/5 flex items-center justify-center text-brand-gray hover:bg-brand-teal hover:text-black transition-all duration-300 hover:-translate-y-0.5"
                  href="https://github.com/Celebration-cloud"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
