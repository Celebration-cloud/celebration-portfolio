import Image from "next/image";

import { siteConfig } from "@/config/site";
import Experience from "@/components/Experience";
import Welcome from "@/components/Welcome";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";

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
      <Skills />
      <Tools />
      <Experience />
      <
    </section>
  );
}
