/* eslint-disable prettier/prettier */
"use client";

import { Link } from "@heroui/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-4 bg-red-500 text-white py-10 px-5">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Ojingulu Celebration
      </h2>
      <p className="text-lg md:text-2xl font-medium text-center">
        4, Prince Kosoko King&apos;s Street, Meiran, Lagos, Nigeria.
      </p>
      <div className="flex flex-col items-center text-lg md:text-2xl font-medium space-y-2 md:flex-row md:space-y-0 md:space-x-4">
        <p>(+234) 901 419 4307</p>
        <p>
          <Link
            className="text-lg md:text-2xl font-medium text-white hover:underline"
            href="mailto:ojinguluc@gmail.com"
          >
            ojinguluc@gmail.com
          </Link>
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link
          className="text-white"
          href="https://github.com/Celebration-cloud"
          target="_blank"
        >
          <i
            className="pi pi-github hover:text-foreground-700"
            style={{ fontSize: "1.5rem" }}
          />
        </Link>
        <Link
          className="text-white"
          href="https://linkedin.com/in/celebration-ojingulu-45b495246"
          target="_blank"
        >
          <i
            className="pi pi-linkedin hover:text-foreground-700"
            style={{ fontSize: "1.5rem" }}
          />
        </Link>
        <Link
          className="text-white"
          href="https://wa.me/2349014194307"
          target="_blank"
        >
          <i
            className="pi pi-whatsapp hover:text-foreground-700"
            style={{ fontSize: "1.5rem md:2rem" }}
          />
        </Link>
      </div>
      <hr className="w-full border-t border-foreground-600 my-4" />
      <span className="text-center text-sm md:text-base">
        © {new Date().getUTCFullYear()}, All Rights Reserved | Designed By
        Ojingulu Celebration
      </span>
    </footer>
  );
};

export default Footer;
