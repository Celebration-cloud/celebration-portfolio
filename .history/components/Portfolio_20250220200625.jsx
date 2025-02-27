/* eslint-disable prettier/prettier */
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, CardHeader } from "@heroui/card";

import { siteConfig } from "@/config/site";

const Portfolio = () => {
  return (
    <div
      className="text-foreground-700 bg-foreground-400 my-5 m-0 max-md:w-auto py-5 space-y-5"
      id="scrollspyHeading5"
    >
        <div className="flex flex-col items-center gap-2"> 

      <h2 className="text-foreground-600 text-2xl font-medium">My Portfolio</h2>
      <p className="text-foreground-700 text-5xl font-bold text-center max-md:text-3xl">
        My Excellent Portfolio
      </p>
        </div>
      <div className="flex justify-around overflow-hidden items-center max-md:flex-col gap-5 px-5">
        {siteConfig.portfolio.map((portfolio, idx) => (
          <Card
            key={idx}
            className="h-50 w-50 place-content-center max-md:w-1/4"
          >
            <Link href={portfolio.href}>
              <CardHeader>
                <div className="flex flex-col items-center gap-2">

                <h3 className="text-foreground-400 text-xl font-medium">
                  {portfolio.title}
                </h3>
                <p className="text-foreground-700 text-sm font-light">
                  {portfolio.description}
                </p>
                </div>
              </CardHeader>
              <CardBody>
<div className="w-50">
    <Image
                alt={portfolio.title}
                className="w-auto h-auto max-md:h-20 object-cover"
                height={150}
                src={portfolio.image}
                width={150}
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
