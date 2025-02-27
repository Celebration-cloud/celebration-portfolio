import Image from "next/image";

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
        <div className="absolute inset-0 flex items-center justify-around">
          <div className="">
            <h6 className="font-bold text-2xl text-white">I&apos;m</h6>
            <h1 className="text-white text-5xl font-bold">
              Ojingulu Celebration
            </h1>
          </div>
          <div className="w-1/2 h-screen">
            <Image
              priority
              alt="background"
              className="h-full w-full object-left-top"
              height={580} // Set to the actual height of the image or desired height
              src="/WhatsApp_Image_2024-03-29_at_17.02.16_7d884ee5-removebg-preview.png"
              width={1920} // Set to the actual width of the image or desired width
            />
          </div>
        </div>
      </div>
    </section>
  );
}
