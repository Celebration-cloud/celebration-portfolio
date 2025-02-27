/* eslint-disable prettier/prettier */
"use client";

import { Fragment, useEffect } from "react";
import AOS from "aos";
export default function AosEffect({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return <Fragment>{children}</Frag>;
}
