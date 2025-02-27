/* eslint-disable prettier/prettier */
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader } from "@heroui/card";

import { siteConfig } from "@/config/site";

const Portfolio = () => {
  return (
    <div
      className="text-foreground-700 bg-foreground-400 my-5 m-0 max-md:w-auto py-5"
      id="scrollspyHeading5"
    >
      <h2 className="text-foreground-400 text-2xl font-medium">My Portfolio</h2>
      <p className="text-foreground-700 text-5xl font-bold text-center max-md:text-3xl">
        My Excellent Portfolio
      </p>
      <div className="flex justify-around overflow-hidden items-center max-md:flex-col gap-5 ">
        {siteConfig.portfolio.map((portfolio, idx) => (
          <Card
            key={idx}
            className="w-1/2 h-1/2 place-content-center max-md:w-1/4"
          >
            <Link href={portfolio.href}>
              <CardHeader>
                <h3 className="text-foreground-400 text-xl font-medium">
                  {portfolio.title}
                </h3>
                <p className="text-foreground-700 text-sm font-light">
                  {portfolio.description}
                </p>
              </CardHeader>
              <Image
                alt={portfolio.title}
                className="w-auto h-auto max-md:h-20 object-cover"
                height={150}
                src={portfolio.image}
                width={150}
              />
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
