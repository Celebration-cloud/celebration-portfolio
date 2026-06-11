import About from "@/components/About";
import Tools from "@/components/Tools";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About — Celebration Ojingulu",
  description:
    "Frontend Engineer & Digital Content Producer. Background, skills, and technical focus.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#090e11]">
      <About data={siteConfig.skills} />
      <Tools data={siteConfig.skillLogos} />
    </main>
  );
}
