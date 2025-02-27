import Experience from "@/components/Experience";
import Welcome from "@/components/Welcome";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div
      className="scrollspy-example bg-body-tertiary p-3 rounded-2"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
    >
      <Welcome />
      <Skills />
      <Tools />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}
