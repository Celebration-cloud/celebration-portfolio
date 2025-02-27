import Image from "next/image";
import "aos/dist/aos.css";
import { Button } from "@heroui/button";
import { Timeline } from "primereact/timeline";

import TypingAnime from "@/components/TypingAnime";
import { siteConfig } from "@/config/site";
import AosEffect from "@/components/AosEffect";

export default function Home() {
  const descrition1 = (<div>

    
  </div>)
  const events = [
    {
      company: "Ordered",
      title: "Founder",

      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      company: "Processing",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      company: "Shipped",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      company: "Delivered",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];
    const customizedContent = (item) => {
      return (
        <Card title={item.company} subTitle={item.date}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
          <Button label="Read more" className="p-button-text"></Button>
        </Card>
      );
    };
  return (
    <AosEffect>
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
            <div className="space-y-10 max-md:text-center" data-aos="fade-up">
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
            <div className="w-1/2 h-full max-md:hidden" data-aos="fade-left">
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
              environments and continuous improvement through agile
              methodologies.
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
        <div className="place-content-start ">
          <header className="flex flex-col items-center justify-center max-md:px-5">
            <h2 className="text-foreground-400 text-2xl font-medium">
              MY RESUME
            </h2>
            <h5 className="text-foreground-700 text-5xl font-bold">
              Working Experience
            </h5>
          </header>
          <div className="flex justify-around items-center max-md:flex-col">
            <Timeline />
          </div>
        </div>
      </section>
    </AosEffect>
  );
}
