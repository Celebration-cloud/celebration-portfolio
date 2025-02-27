/* eslint-disable prettier/prettier */
"use client";

import { Timeline } from "primereact/timeline";
import React, { useEffect } from "react";
import { Card } from "primereact/card";

import { siteConfig } from "@/config/site";

const Experience = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        if (scrollPosition > 3600) {
          // Adjust this value to the desired scroll position
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
  const descriptionContent = (item) => {
    return (
      <Card subTitle={item.title} title={item.company}>
        <ul className="list-disc text-left ml-0 px-2 ">
          {item.description.map((desc, idx) => (
            <li key={idx} className="pl-0 ml-0">
              {desc}
            </li>
          ))}
        </ul>
      </Card>
    );
  };
  const descriptionContentMobile = (item) => {
    return (
      <div className="hidden max-md:block">
        <p className="text-foreground-700 text-xl max-md:text-lg max-md:my-5">
          {item.date}
        </p>
        <Card subTitle={item.title} title={item.company}>
          <ul className="list-disc text-left ml-0 px-2 ">
            {item.description.map((desc, idx) => (
              <li key={idx} className="pl-0 ml-0">
                {desc}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    );
  };


  return (
    <>
      {showNavbar && <Navbar />}
      <div
        className="place-content-center space-y-10 mx-5 max-md:mx-0"
        id="scrollspyHeading4"
      >
        <header className="flex flex-col items-center justify-center max-md:px-5">
          <h2 className="text-foreground-400 text-2xl font-medium">
            MY RESUME
          </h2>
          <h5 className="text-foreground-700 text-5xl font-bold text-center max-md:text-3xl">
            Working Experience
          </h5>
        </header>
        <div className="flex justify-around text-inherit items-center max-md:hidden">
          <Timeline
            align="alternate"
            className="w-full max-md:w-auto"
            content={descriptionContent}
            opposite={(item) => (
              <p className="text-foreground-700 text-xl max-md:text-lg max-md:my-5">
                {item.date}
              </p>
            )}
            value={siteConfig.experience}
          />
        </div>
        {descriptionContentMobile(siteConfig.experience[0])}
        {descriptionContentMobile(siteConfig.experience[1])}
      </div>
    </>
  );
};

export default Experience;
