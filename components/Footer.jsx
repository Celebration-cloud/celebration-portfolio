/* eslint-disable prettier/prettier */
"use client";

import { Link } from "@heroui/link";

const Footer = () => {
  return (
    <footer className="w-full bg-red-600 dark:bg-red-800 text-white py-12 px-6 flex flex-col items-center gap-6">
      {/* Name */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center">
        Ojingulu Celebration
      </h2>

      {/* Address */}
      <p className="text-center text-sm sm:text-base md:text-lg text-white/90 max-w-md">
        4, Prince Kosoko King&lsquo;s Street, Meiran, Lagos, Nigeria
      </p>

      {/* Contact */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-white/90 text-sm sm:text-base">
        <p>(+234) 901 419 4307</p>
        <Link className="hover:underline" href="mailto:ojinguluc@gmail.com">
          ojinguluc@gmail.com
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6 mt-2">
        <Link
          className="text-white hover:text-gray-200 transition-colors duration-300"
          href="https://github.com/Celebration-cloud"
          target="_blank"
        >
          <i className="pi pi-github text-2xl sm:text-3xl" />
        </Link>
        <Link
          className="text-white hover:text-gray-200 transition-colors duration-300"
          href="https://linkedin.com/in/celebration-ojingulu-45b495246"
          target="_blank"
        >
          <i className="pi pi-linkedin text-2xl sm:text-3xl" />
        </Link>
        <Link
          className="text-white hover:text-gray-200 transition-colors duration-300"
          href="https://wa.me/2349014194307"
          target="_blank"
        >
          <i className="pi pi-whatsapp text-2xl sm:text-3xl" />
        </Link>
      </div>

      {/* Divider */}
      <hr className="w-full border-t border-white/30 my-6" />

      {/* Copyright */}
      <span className="text-center text-xs sm:text-sm text-white/70 max-w-md">
        © {new Date().getFullYear()} All Rights Reserved | Designed By Ojingulu
        Celebration
      </span>
    </footer>
  );
};

export default Footer;
