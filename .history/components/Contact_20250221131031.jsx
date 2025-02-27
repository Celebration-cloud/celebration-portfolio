/* eslint-disable prettier/prettier */
import { Input } from "@heroui/input";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
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
        <Input placeholder="Your Name" />
        <Input
          isRequired
          className="max-w-xs"
          defaultValue="John "
          label="Your Email"
          type="text"
        />
        <Input
          isRequired
          className="max-w-xs"
          defaultValue="junior@heroui.com"
          label="Your Email"
          type="email"
        />
        <Input placeholder="Your Email" />
        <Input placeholder="Subject" />
        <Input placeholder="Message" />
      </form>
    </div>
  );
};

export default Contact;
