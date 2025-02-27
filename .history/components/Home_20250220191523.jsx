/* eslint-disable prettier/prettier */
import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

import TypingAnime from "./TypingAnime";

const Home = () => {
  return (
    <div className="relative h-screen w-full" id="scrollspyHeading1">
      <Image
        priority
        alt="background"
        className="h-full w-full object-cover"
        height={1080} // Set to the actual height of the image or desired height
        src="/wallpaperflare.com_wallpaper.jpg"
        width={1920} // Set to the actual width of the image or desired width
      />
      <div className="absolute inset-0 flex items-center justify-around max-md:justify-center">
        <div className="space-y-10 max-md:text-center" data-aos="fade-up">
          <h1 className="font-bold text-2xl text-white">I&apos;m</h1>
          <h4 className="text-white text-5xl font-bold">
            Ojingulu Celebration
          </h4>
          <h5 className="text-white text-3xl font-bold">
            <TypingAnime
              text={["Front-End Developer", "Web Designer", "Tech Enthusiast"]}
            />
          </h5>
          <Button color="danger" a>Download Resume</Button>
        </div>
        <div className="w-1/2 h-full max-md:hidden" data-aos="fade-left">
          <Image
            priority
            alt="background"
            className="h-full w-full object-left-top"
            height={1080} // Set to the actual height of the image or desired height
            src="/WhatsApp_Image_2024-03-29_at_17.02.16_7d884ee5-removebg.png"
            width={1920} // Set to the actual width of the image or desired width
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
