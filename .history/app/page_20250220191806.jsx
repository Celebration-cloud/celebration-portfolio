import Image from "next/image";
import { Button } from "@heroui/button";

import TypingAnime from "@/components/TypingAnime";
import { siteConfig } from "@/config/site";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <section
      className="bg-inherit relative w-full"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
    >
      <W
      <div
        className="flex justify-around items-center h-full pt-10 max-md:flex-col max-md:px-5"
        id="scrollspyHeading2"
      >
        <div className="w-2/5 h-full max-md:w-fit" data-aos="fade-right">
          <Image
            priority
            alt="background"
            className="h-full w-full object-left-top"
            height={1080} // Set to the actual height of the image or desired height
            src="/Hand coding-bro.svg"
            width={1920} // Set to the actual width of the image or desired width
          />
        </div>
        <div
          className="w-2/5 text-md text-foreground-700 space-y-4 max-md:w-fit"
          data-aos="fade-left"
        >
          <h1 className="text-2xl font-medium text-foreground-400">
            Learn About Me
          </h1>
          <h4 className="text-4xl font-bold text-foreground-700">
            3 Years Experience
          </h4>
          <p>
            Results-driven Front-End Developer with 3+ years of experience
            designing and developing responsive, userfriendly web applications
            using React.js, Next.js, and Firebase. Procient in crafting
            intuitive UI/UX experiences, optimizing web performance, and
            implementing SEO best practices. Passionate about collaborative
            environments and continuous improvement through agile methodologies.
          </p>
          <div className="">
            {siteConfig.skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center">
                  <h6> {skill.label} </h6>
                  <span>{skill.grade}</span>
                </div>
                <div className="progress">
                  <div
                    aria-valuemax="100"
                    aria-valuemin="0"
                    aria-valuenow="80"
                    className="progress-bar bg-foreground-400"
                    role="progressbar"
                    style={{ width: skill.grade }}
                  />
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
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
