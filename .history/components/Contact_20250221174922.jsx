/* eslint-disable prettier/prettier */

import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import Image from "next/image";

const Contact = () => {
  return (
    <div className=" flex items-center w-full h-full py-20 space-y-10 px-5 gap-5">
      <div className="w-1/3 h-96 max-md:hidden" data-aos="fade-left">
        <Image
          priority
          alt="background"
          className="h-full w-full object-left-top"
          height={1080} // Set to the actual height of the image or desired height
          src="/wallpaperflare.com_wallpaper (1).jpg"
          width={1920} // Set to the actual width of the image or desired width
        />
      </div>
      
    </div>
  );
};

export default Contact;
