/* eslint-disable prettier/prettier */

import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";

import { siteConfig } from "@/config/site";

const Portfolio = () => {
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
          className="border-foreground-700 cursor-pointer hover:bg-inherit hover:border-foreground-600  hover:text-white transition-all duration-300"
          radius="none"
          size="lg"
        >
          All
        </Chip>
        <Chip
          className="border-foreground-700 hover:bg-foreground-700 cursor-pointer hover:text-white transition-all duration-300"
          radius="none"
          size="lg"
          variant="bordered"
        >
          React.js
        </Chip>
        <Chip
          className="border-foreground-700 hover:bg-foreground-700 cursor-pointer hover:text-white transition-all duration-300"
          radius="none"
          size="lg"
          variant="bordered"
        >
          Next.js
        </Chip>
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-5">
        {siteConfig.portfolio.map((portfolio, idx) => (
          <Card
            key={idx}
            className="max-w-xs w-full place-content-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <Link href={portfolio.href}>
              <CardHeader>
                <div className="flex flex-col items-start gap-2">
                  <h3 className="text-foreground-400 text-xl font-medium">
                    {portfolio.title}
                  </h3>
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
