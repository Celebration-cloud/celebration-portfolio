/* eslint-disable prettier/prettier */
"use client";
import { Spinner } from "@heroui/spinner";

import { Reveal } from "@/components/motion/MotionPrimitives";
import DecryptedText from "@/components/ui/DecryptedText";

export default function Loading() {
  return (
    <Reveal className="flex min-h-[70vh] flex-col items-center justify-center gap-5">
      <Spinner color="primary" />
      <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal">
        <DecryptedText
          sequential
          animateOn="view"
          speed={28}
          text="Loading portfolio"
          useOriginalCharsOnly
        />
      </p>
    </Reveal>
  );
}
