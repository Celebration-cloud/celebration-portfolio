/* eslint-disable prettier/prettier */
import { Timeline } from "primereact/timeline";
import React from "react";

import { siteConfig } from "@/config/site";

const Experience = () => {
  return (
    <div className="place-content-start ">
      <header className="flex flex-col items-center justify-center max-md:px-5">
        <h2 className="text-foreground-400 text-2xl font-medium">MY RESUME</h2>
        <h5 className="text-foreground-700 text-5xl font-bold">
          Working Experience
        </h5>
      </header>
      <div className="flex justify-around items-center max-md:flex-col">
        <Timeline
          align="alternate"
          content={descriptionContent}
          opposite={(item) => item.date}
          value={siteConfig.experience}
        />
      </div>
    </div>
  );
};

export default Experience;
