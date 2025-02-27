/* eslint-disable prettier/prettier */
import { Input, Textarea } from "@heroui/input";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex items-center w-full h-full py-20 space-y-10 px-5 gap-5">
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
      <form className="flex flex-col w-2/3 space-y-10 max-md:w-full" data-aos="fade-right">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <Input
          isRequired
          className="w-full"
          label="Your Name"
          placeholder="John Oce"
          type="text"
        />
        <Input
          isRequired
          className="w-full"
          label="Your Email"
          placeholder="junior@heroui.com"
          type="email"
        />
        <Input
          isRequired
          className="w-full"
          label="Subject"
          placeholder="John Oce"
          type="text"
        />
        <Textarea
          disableAnimation
          disableAutosize
          required
          
          classNames={{
            base: "w-full",
            input: "resize-y min-h-[40px]",
          }}
          label="Message"
          placeholder="Send your message"
        />
        
      </form>
    </div>
  );
};

export default Contact;
