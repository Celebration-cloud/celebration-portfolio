import Image from "next/image";

import TypingAnime from "@/components/TypingAnime";
import { Button } from "@heroui/button";

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
        className="flex justify-around items-center h-full pt-10 max-md:flex-wrap"
        id="scrollspyHeading2"
      >
        <div className="w-1/3 h-full">
          <Image
            alt="background"
            className="h-full w-full object-left-top"
            height={1080} // Set to the actual height of the image or desired height
            src="/Hand coding-bro.svg"
            width={1920} // Set to the actual width of the image or desired width
          />
        </div>
        <div className="w-1/3 text-md text-foreground-700 space-y-4">
          <h1 className="text-2xl font-medium text-foreground-400">
            Learn About Me
          </h1>
          <h4 className="text-4xl font-bold text-foreground-700">
            5 Years Experience
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
            
            <h6> Frontend Frameworks: React.js, Next.js </h6><span>hell</span>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="80"
                className="progress-bar bg-foreground-400"
                role="progressbar"
                style={{ width: "80%" }}
              />
            </div>
            <br />
            <h6>Styling & Animations: Tailwind CSS, Framer Motion</h6>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="95"
                className="progress-bar bg-foreground-400"
                role="progressbar"
                style={{ width: "80%" }}
              />
            </div>
            <br />
            <h6>Core Web Technologies: HTML5, CSS3, JavaScript (ES6+)</h6>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="78"
                className="progress-bar bg-foreground-400"
                role="progressbar"
                style={{ width: "88%" }}
              />
            </div>
            <br />
            <h6>Version Control: Git, GitHub</h6>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="100"
                className="progress-bar bg-foreground-400"
                role="progressbar"
                style={{ width: "70%" }}
              />
            </div>
            <br />
            <h6>Performance & Optimization: SEO, Responsive Design</h6>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="85"
                className="progress-bar bg-foreground-400"
                role="progressbar"
                style={{ width: "90%" }}
              />
            </div>
            <br />
            <h6>
              Collaboration & Tools: Agile Methodologies, Cross-Team
              Collaboration
            </h6>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="85"
                className="progress-bar bg-foreground-400"
                role="progressbar"
                style={{ width: "80%" }}
              />
            </div>
            <br />
            <h6>Problem-solving</h6>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="85"
                className="progress-bar bg-foreground-400"
                role="progressbar"
                style={{ width: "90%" }}
              />
            </div>
            <br />
            <h6>Good Communication</h6>
            <div className="progress">
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                aria-valuenow="85"
                className="progress-bar bg-foreground-400"
                role="progressbar"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
