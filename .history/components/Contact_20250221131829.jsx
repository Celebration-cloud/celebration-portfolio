/* eslint-disable prettier/prettier */
import { Input, Textarea } from "@heroui/input";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex  items-center w-full h-full py-20 space-y-10">
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
      <form>
        <Input
          isRequired
          className="max-w-xs"
          label="Your Name"
          placeholder="John Oce"
          type="text"
        />
        <Input
          isRequired
          className="max-w-xs"
          label="Your Email"
          placeholder="junior@heroui.com"
          type="email"
        />
        <Input
          isRequired
          className="max-w-xs"
          label="Subject"
          placeholder="John Oce"
          type="text"
        />
        <Textarea
          disableAnimation
          disableAutosize
          classNames={{
            base: "max-w-xs",
            input: "resize-y min-h-[40px]",
          }}
          label="Message"
          placeholder="Send your message"
          variant="bordered"
        />
      </form>
    </div>
  );
};

export default Contact;
