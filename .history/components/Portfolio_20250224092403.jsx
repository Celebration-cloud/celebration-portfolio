/* eslint-disable prettier/prettier */

import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { useState } from "react";

import { siteConfig } from "@/config/site";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredPortfolio = siteConfig.portfolio.filter((portfolio) => {
    if (selectedFilter === "all") return true;
    return portfolio.tools === selectedFilter;
  });

  return (
    <div
      className="text-foreground-700 bg-foreground-400 mt-10 py-10 space-y-10"
      id="scrollspyHeading5"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-foreground-600 text-2xl font-medium">
          My Portfolio
        </h2>
        <p className="text-foreground-700 text-5xl font-bold text-center max-md:text-3xl">
          My Excellent Portfolio
        </p>
      </div>
      <div className="flex justify-center gap-5">
        <Chip
          className={`border-foreground-700 cursor-pointer hover:bg-foreground-700 hover:text-white transition-all duration-300 ${selectedFilter === "all" ? "bg-foreground-700 text-white" : "hover:border-2"}`}
          radius="none"
          size="lg"
          onClick={() => setSelectedFilter("all")}
        >
          All
        </Chip>
        <Chip
          className={`border-foreground-700 cursor-pointer hover:bg-foreground-700 hover:text-white transition-all duration-300 ${selectedFilter === "react" ? "bg-foreground-700 text-white" : "hover:border-2"}`}
          radius="none"
          size="lg"
          onClick={() => setSelectedFilter("react")}
        >
          React.js
        </Chip>
        <Chip
          className={`border-foreground-700 cursor-pointer hover:bg-foreground-700 hover:text-white transition-all duration-300 ${selectedFilter === "next" ? "bg-foreground-700 text-white" : "hover:border-2"}`}
          radius="none"
          size="lg"
          onClick={() => setSelectedFilter("next")}
        >
          Next.js
        </Chip>
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-5">
                  <p className="text-foreground-700 text-sm font-light text-left">
                    {portfolio.description}
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                <div className="w-full h-40 relative">
                  <Image
                    fill
                    alt={portfolio.title}
                    className="object-top rounded-md"
                    loading="lazy"
                    src={portfolio.image}
                  />
                </div>
              </CardBody>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
