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
      <div id="scrollspyHeading1" className="h-screen">
        <Image
          alt="background"
          height="auto"
          src="../public/wallpaperflare.com_wallpaper.jpg"
          width="auto"
        />
      </div>
    </section>
  );
}
