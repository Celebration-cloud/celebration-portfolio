import Image from "next/image";

import { siteConfig } from "@/config/site";
import Experience from "@/components/Experience";
import Welcome from "@/components/Welcome";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <section
      className="bg-inherit relative w-full"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
    >
      <Welcome />
      <Skills
      <div className="text-foreground-700 bg-foreground-400 my-5 m-0 max-md:w-auto py-5">
        <div className="flex justify-around overflow-hidden items-center max-md:flex-col gap-5 ">
          {siteConfig.skillLogo.map((skillLogo, idx) => (
            <div
              key={idx}
              className="w-1/2 h-1/2 place-content-center max-md:w-1/4"
            >
              <Image
                alt={skillLogo.label}
                className="w-auto h-auto max-md:h-20 object-cover"
                height={150}
                src={skillLogo.src}
                width={150}
              />
            </div>
          ))}
        </div>
      </div>
      <Experience />
    </section>
  );
}
