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

      if (scrollPosition > 50000) {
        // Adjust this value to the desired scroll position
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
      <div className="flex flex-col md:flex-row items-center w-full h-full py-20 space-y-10 md:space-y-0 md:space-x-5 px-5">
        <div className="w-full md:w-1/3 h-96" data-aos="fade-left">
          <Image
            priority
            alt="background"
            className="h-full w-full object-cover"
            height={1080} // Set to the actual height of the image or desired height
            src="/wallpaperflare.com_wallpaper (1).jpg"
            width={1920} // Set to the actual width of the image or desired width
          />
        </div>
        <div className="w-full md:w-2/3">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
