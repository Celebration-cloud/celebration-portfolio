import Image from "next/image";

import TypingAnime from "@/components/TypingAnime";

export default function Home() {
  return (
    <section
      className="bg-inherit relative"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
    >
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
          <div className="space-y-10 max-md:text-center">
            <h1 className="font-bold text-2xl text-white">I&apos;m</h1>
            <h4 className="text-white text-5xl font-bold">
              Ojingulu Celebration
            </h4>
            <h5 className="text-white text-3xl font-bold">
              <TypingAnime
                text={[
                  "Front-End Developer",
                  "Web Designer",
                  "Tech Enthusiast",
                ]}
              />
            </h5>
          </div>
          <div className="w-1/2 h-full max-md:hidden">
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
      <div
        className="flex justify-between max-md:flex-wrap"
        id="scrollspyHeading2"
      >
        <div>
          <Image
            alt="background"
            className="h-full w-full object-left-top"
            height={1080} // Set to the actual height of the image or desired height
            src="/WhatsApp_Image_2024-03-29_at_17.02.16_7d884ee5-removebg.png"
            width={1920} // Set to the actual width of the image or desired width
          />
        </div>
        <div className="w-1/2 text">
          <h1 className="text-2xl font-light">Learn About Me</h1>
          <h4 className="text-4xl font-bold">5 Years Experience</h4>
        </div>
      </div>
    </section>
  );
}
