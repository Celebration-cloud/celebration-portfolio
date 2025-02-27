/* eslint-disable prettier/prettier */
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

import TypingAnime from "./TypingAnime";

const Welcome = () => {
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
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-around space-y-10 md:space-y-0 max-md:justify-center">
        <div className="space-y-10 text-center md:text-left" data-aos="fade-up">
          <h1 className="font-bold text-2xl text-white">I&apos;m</h1>
          <h4 className="text-white lg:text-5xl max-md:text-2xl max-sm:text-3xl font-bold">
            Ojingulu Celebration
          </h4>
          <h5 className="text-white text-3xl  max-md:text-xl max-sm:text-md  font-bold">
            <TypingAnime
              text={["Front-End Developer", "Web Designer", "Tech Enthusiast"]}
            />
          </h5>
          <div>
            <Link download="Celebration_CV" href="/CV_2025011411014666.pdf">
              <Button color="danger">Download Resume</Button>
            </Link>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 h-full max-md:hidden"
          data-aos="fade-left"
        >
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

export default Welcome;
