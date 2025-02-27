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
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-24"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current text-white"
              d="M0,0V46.29c47.64,22.24,103.78,35.71,162,35.71,86.6,0,172.11-22.24,258-32.57C481.29,39.43,568.57,32,655.71,32c92.57,0,185.14,10.29,277.71,17.14,72.57,5.43,145.14,8.57,217.71,8.57,54.86,0,109.71-2.86,164.57-8.57V0Z"
              opacity=".25"
            />
            <path
              className="fill-current text-white"
              d="M0,0V15.71c47.64,22.24,103.78,35.71,162,35.71,86.6,0,172.11-22.24,258-32.57C481.29,8.57,568.57,1.14,655.71,1.14c92.57,0,185.14,10.29,277.71,17.14,72.57,5.43,145.14,8.57,217.71,8.57,54.86,0,109.71-2.86,164.57-8.57V0Z"
              opacity=".5"
            />
            <path
              className="fill-current text-white"
              d="M0,0V5.71c47.64,22.24,103.78,35.71,162,35.71,86.6,0,172.11-22.24,258-32.57C481.29,2.86,568.57-4.57,655.71-4.57c92.57,0,185.14,10.29,277.71,17.14,72.57,5.43,145.14,8.57,217.71,8.57,54.86,0,109.71-2.86,164.57-8.57V0Z"
            />
          </svg>
        </div>
      </div>
      <div
        className="flex justify-around items-center h-screen gap-5 max-md:flex-wrap"
        id="scrollspyHeading2"
      >
        <div className="h-full">
          <Image
            alt="background"
            className="h-full w-full object-left-top"
            height={1080} // Set to the actual height of the image or desired height
            src="/Hand coding-bro.svg"
            width={1920} // Set to the actual width of the image or desired width
          />
        </div>
        <div className="w-1/2 text-foreground-700">
          <h1 className="text-2xl font-medium text-foreground-400">
            Learn About Me
          </h1>
          <h4 className="text-4xl font-bold text-foreground-700">
            5 Years Experience
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec pretium mi. Curabitur facilisis ornare velit non vulputate.
            Aliquam metus tortor, auctor id gravida
          </p>
        </div>
      </div>
    </section>
  );
}
