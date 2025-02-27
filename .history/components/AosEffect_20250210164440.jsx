/* eslint-disable prettier/prettier */
"use client";

import { useEffect } from "react";
import AOS from "aos";
export default function AosEffect({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <section
      className="bg-inherit relative w-full"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
    >
      {children}
    </section>
  );
}
