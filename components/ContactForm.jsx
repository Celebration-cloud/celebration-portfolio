"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { addToast } from "@heroui/toast";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

const ContactForm = () => {
  const shouldReduceMotion = useReducedMotion();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    emailjs
      .send("service_40zo4or", "template_qo99jig", data, "MCvMO3cKm3abSp_xT")
      .then(
        () => {
          addToast({
            title: "Message Sent",
            description: "Your message has been sent successfully!",
            color: "success",
          });
          setIsSubmitting(false);
          reset();
        },
        () => {
          addToast({
            title: "Submission Failed",
            description: "Failed to send your message. Please try again.",
            color: "danger",
          });
          setIsSubmitting(false);
        },
      );
  };

  // Sharp, brutalist input styling
  const inputClasses =
    "w-full rounded-none border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-white transition-all placeholder:text-white/20 focus:border-brand-teal focus:bg-white/[0.04] focus:outline-none";

  return (
    <form
      className="w-full rounded-none border border-white/10 bg-white/[0.02] p-8 md:p-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <StaggerGroup staggerChildren={0.07}>
        <StaggerItem className="mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-brand-teal mb-4">
            02 — Inquiry
          </p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-3">
            Start a project
          </h3>
          <p className="text-sm leading-relaxed text-brand-gray max-w-md">
            Share the scope, timeline, and what success looks like. I&apos;ll
            respond with next steps.
          </p>
        </StaggerItem>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name */}
          <StaggerItem>
            <label
              className="mb-2 block text-[10px] font-mono uppercase tracking-widest text-white/40"
              htmlFor="name"
            >
              Name *
            </label>
            <input
              id="name"
              {...register("name", { required: true })}
              className={inputClasses}
              placeholder="John Doe"
              type="text"
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-[10px] font-mono mt-2 uppercase tracking-wider"
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
                >
                  Required
                </motion.p>
              )}
            </AnimatePresence>
          </StaggerItem>

          {/* Email */}
          <StaggerItem>
            <label
              className="mb-2 block text-[10px] font-mono uppercase tracking-widest text-white/40"
              htmlFor="email"
            >
              Email *
            </label>
            <input
              id="email"
              {...register("email", { required: true })}
              className={inputClasses}
              placeholder="your@email.com"
              type="email"
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-[10px] font-mono mt-2 uppercase tracking-wider"
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
                >
                  Required
                </motion.p>
              )}
            </AnimatePresence>
          </StaggerItem>
        </StaggerGroup>

        {/* Subject */}
        <StaggerItem className="mb-6">
          <label
            className="mb-2 block text-[10px] font-mono uppercase tracking-widest text-white/40"
            htmlFor="subject"
          >
            Subject *
          </label>
          <input
            id="subject"
            {...register("subject", { required: true })}
            className={inputClasses}
            placeholder="Project Discussion"
            type="text"
          />
          <AnimatePresence>
            {errors.subject && (
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-[10px] font-mono mt-2 uppercase tracking-wider"
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
              >
                Required
              </motion.p>
            )}
          </AnimatePresence>
        </StaggerItem>

        {/* Message */}
        <StaggerItem className="mb-8">
          <label
            className="mb-2 block text-[10px] font-mono uppercase tracking-widest text-white/40"
            htmlFor="message"
          >
            Message *
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            className={`${inputClasses} min-h-[160px] resize-none`}
            placeholder="Tell me about your project..."
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-[10px] font-mono mt-2 uppercase tracking-wider"
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
              >
                Required
              </motion.p>
            )}
          </AnimatePresence>
        </StaggerItem>

        {/* Submit */}
        <StaggerItem>
          <motion.button
            animate={
              isSubmitting && !shouldReduceMotion
                ? { opacity: [1, 0.72, 1] }
                : { opacity: 1 }
            }
            className="group flex w-full items-center justify-between rounded-none bg-brand-teal px-6 py-5 font-bold text-black uppercase tracking-wider text-sm transition-all duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting}
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              repeat: isSubmitting && !shouldReduceMotion ? Infinity : 0,
            }}
            type="submit"
            whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
          >
            <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.button>
        </StaggerItem>
      </StaggerGroup>
    </form>
  );
};

export default ContactForm;
