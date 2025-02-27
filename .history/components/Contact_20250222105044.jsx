/* eslint-disable prettier/prettier */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { Navbar } from "./navbar";

const Contact = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
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
