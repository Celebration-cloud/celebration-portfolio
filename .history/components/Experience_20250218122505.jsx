/* eslint-disable prettier/prettier */
"use client";
import { Timeline } from "primereact/timeline";
import React from "react";
import { Card } from "primereact/card";

import { siteConfig } from "@/config/site";

const Experience = () => {

    const descriptionContent = (item) => {
        return (
          <Card subTitle={item.title} title={item.company}>
            <ul className="list-disc text-left ml-0 px-2 ">
              {item.description.map((desc, idx) => (
                <li key={idx} className="pl-0 ml-0">{desc}</li>
              ))}
            </ul>
          </Card>
        );
      };

  return (
    <div className="place-content-center space-y-10 ">
      <header className="flex flex-col items-center justify-center max-md:px-5">
        <h2 className="text-foreground-400 text-2xl font-medium">MY RESUME</h2>
        <h5 className="text-foreground-700 text-5xl font-bold">
          Working Experience
        </h5>
      </header>
      <div className="flex justify-around text-inherit items-center max-md:flex-col">
        <Timeline
          align="alternate"
          content={descriptionContent}
          opposite={(item) => (
            <p className="text-foreground-700 text">{item.date}</p>
          )}
          value={siteConfig.experience}
        />
      </div>
    </div>
  );
};

export default Experience;
