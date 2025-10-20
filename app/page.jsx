import About from "@/components/About";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
// import References from "@/components/References";
import ScrollPsy from "@/components/ScrollPsy";
import AosEffect from "@/components/AosEffect";
import { siteConfig } from "@/config/site";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <ScrollPsy>
      <AosEffect>
        {/* Welcome Section */}
        <Welcome />

        {/* Welcome/About Section */}
        <About data={siteConfig.about} />

        {/* Skills Section */}
        <Skills data={siteConfig.skills} />

        {/* Tools / Skill Logos */}
        <Tools data={siteConfig.skillLogos} />

        {/* Experience Section */}
        <Experience data={siteConfig.experience} />

        {/* Education Section */}
        <Education data={siteConfig.education} />

        {/* Portfolio Section */}
        <Portfolio data={siteConfig.portfolio} />

        {/* References Section */}
        {/* <References data={siteConfig.references} /> */}

        {/* Contact Section */}
        <Contact contact={siteConfig.about.contact} />
      </AosEffect>
    </ScrollPsy>
  );
}
