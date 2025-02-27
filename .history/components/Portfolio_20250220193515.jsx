import { siteConfig } from "@/config/site";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="text-foreground-700 bg-foreground-400 my-5 m-0 max-md:w-auto py-5">
      <div className="flex justify-around overflow-hidden items-center max-md:flex-col gap-5 ">
        {siteConfig.portfolio.map((portfolio, idx) => (
          <div
            key={idx}
            className="w-1/2 h-1/2 place-content-center max-md:w-1/4"
          >
            <Image
              alt={portfolio.label}
              className="w-auto h-auto max-md:h-20 object-cover"
              height={150}
              src={portfolio.src}
              width={150}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
