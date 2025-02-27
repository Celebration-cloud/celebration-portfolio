import Experience from "@/components/Experience";
import Welcome from "@/components/Welcome";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import ScrollPsy from "@/components/ScrollPsy";
import AosEffect from "@/components/AosEffect";

export default function Home() {
  return (
    <AosEffect>

    <ScrollPsy>
      <Welcome />
      <Skills />
      <Tools />
      <Experience />
      <Portfolio />
      <Contact />
    </ScrollPsy>
    </AosEffect>
  );
}
