/* eslint-disable prettier/prettier */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { Navbar } from "./navbar";

const Contact = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) { // Adjust this value to the desired scroll position
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showNavbar && <Navbar />}