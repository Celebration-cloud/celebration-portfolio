import Image from "next/image";

export default function Home() {
  return (
    <section
      className="bg-inherit"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
    >
      <div className="h-screen w-full" id="scrollspyHeading1">
        <Image
          alt="background"
          className="h-full w-full object-cover"
          height={1080} // Set to the actual height of the image or desired height
          src="/wallpaperflare.com_wallpaper.jpg"
          width={1920} // Set to the actual width of the image or desired width
          priority
        />
      </div>
    </section>
  );
}
