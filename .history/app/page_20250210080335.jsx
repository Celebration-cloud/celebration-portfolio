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
          className="h-full w-full"
          height={100}
          quality={100}
          src="/wallpaperflare.com_wallpaper.jpg"
          width={100}
          as
        />
      </div>
    </section>
  );
}
