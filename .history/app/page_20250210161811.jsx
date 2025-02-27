import Image from "next/image";
import { Button } from "@heroui/button";

import TypingAnime from "@/components/TypingAnime";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section
      className="bg-inherit relative w-full"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
    >
      <div className="relative h-screen w-full" id="scrollspyHeading1">
        <Image
          priority
          alt="background"
          className="h-full w-full object-cover"
          height={1080} // Set to the actual height of the image or desired height
          src="/wallpaperflare.com_wallpaper.jpg"
          width={1920} // Set to the actual width of the image or desired width
        />
        <div className="absolute inset-0 flex items-center justify-around max-md:justify-center">
          <div className="space-y-10 max-md:text-center">
            <h1 className="font-bold text-2xl text-white">I&apos;m</h1>
            <h4 className="text-white text-5xl font-bold">
              Ojingulu Celebration
            </h4>
            <h5 className="text-white text-3xl font-bold">
              <TypingAnime
                text={[
                  "Front-End Developer",
                  "Web Designer",
                  "Tech Enthusiast",
                ]}
              />
            </h5>
            <Button color="danger">Download Resume</Button>
          </div>
          <div className="w-1/2 h-full max-md:hidden">
            <Image
              priority
              alt="background"
              className="h-full w-full object-left-top"
              height={1080} // Set to the actual height of the image or desired height
              src="/WhatsApp_Image_2024-03-29_at_17.02.16_7d884ee5-removebg.png"
              width={1920} // Set to the actual width of the image or desired width
            />
          </div>
        </div>
      </div>
      <div
        className="flex justify-around items-center h-full pt-10 max-md:flex-col max--2"
        id="scrollspyHeading2"
      >
        <div className="w-2/5 h-full max-md:w-full">
          <Image
            alt="background"
            className="h-full w-full object-left-top"
            height={1080} // Set to the actual height of the image or desired height
            src="/Hand coding-bro.svg"
            width={1920} // Set to the actual width of the image or desired width
          />
        </div>
        <div className="w-2/5 text-md text-foreground-700 space-y-4 max-md:w-full">
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
              <>
                <div key={idx} className="flex justify-between items-center">
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
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
