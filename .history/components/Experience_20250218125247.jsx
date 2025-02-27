/* eslint-disable prettier/prettier */
"use client";
import { Timeline } from "primereact/timeline";
import React from "react";
import { Card } from "primereact/card";

import { siteConfig } from "@/config/site";
import useWidth from "@/hook/useWidth";

const Experience = () => {
    const {width} = useWidth();
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

  return (
    <div
      className="place-content-center space-y-10 mx-5 max-md:mx-0"
      id="scrollspyHeading4"
    >
      <header className="flex flex-col items-center justify-center max-md:px-5">
        <h2 className="text-foreground-400 text-2xl font-medium">MY RESUME</h2>
        <h5 className="text-foreground-700 text-5xl font-bold text-center max-md:text-3xl">
          Working Experience
        </h5>
      </header>
      <div className="flex justify-around text-inherit items-center max-md:flex-col max-md:bl">
        <Timeline
          align="alternate"
          className="w-full max-md:w-auto"
          content={descriptionContent}
          opposite={(item) => (
            <p className="text-foreground-700 text-xl max-md:text-lg max-md:my-5">
              {item.date}
            </p>
          )}
          unstyled={width < 768 ? true : false}
          value={siteConfig.experience}
        />
      </div>
    </div>
  );
};

export default Experience;
