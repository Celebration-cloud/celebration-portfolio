import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Experience — Celebration Ojingulu",
  description: "Professional timeline, roles, and education.",
};

export default function ExperiencePage() {
  return (
    <main className="bg-[#090e11]">
      <Experience data={siteConfig.experience} />
      <Education data={siteConfig.education} />
    </main>
  );
}
