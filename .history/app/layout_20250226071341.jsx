import clsx from "clsx";
import { Divider } from "primereact/divider";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta content={siteConfig.keywords.join(", ")} name="keywords" />
        <meta content={siteConfig.author} name="author" />
        <meta content={siteConfig.openGraph.type} property="og:type" />
        <meta content={siteConfig.openGraph.locale} property="og:locale" />
        <meta content={siteConfig.openGraph.url} property="og:url" />
        <meta content={siteConfig.openGraph.title} property="og:title" />
        <meta
          content={siteConfig.openGraph.description}
          property="og:description"
        />
        <meta content={siteConfig.openGraph.image} property="og:image" />
        <meta
          content={siteConfig.openGraph.site_name}
          property="og:site_name"
        />
        <meta content={siteConfig.twitter.cardType} name="twitter:card" />
        <meta content={siteConfig.twitter.site} name="twitter:site" />
        <meta content={siteConfig.twitter.handle} name="twitter:creator" />
        <meta content={siteConfig.openGraph.title} name="twitter:title" />
        <meta
          content={siteConfig.openGraph.description}
          name="twitter:description"
        />
        <meta content={siteConfig.openGraph.image} name="twitter:image" />
        <link href={metadata.icons.icon} rel="icon" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-full">
            <Navbar />
            <main className="mx-auto max-w-7xl">{children}</main>
            <footer className="w-full flex flex-col items-center justify-center gap-4 bg-red-500 text-white py-10 px-5">
              <h2 className="text-2xl md:text-4xl font-bold text-center">
                Ojingulu Celebration
              </h2>
              <p className="text-lg md:text-2xl font-medium text-center">
                4, Prince Kosoko King&apos;s Street, Meiran, Lagos, Nigeria.
              </p>
              <div className="flex flex-col items-center text-lg md:text-2xl font-medium space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                <p>(+234) 901 419 4307</p>
                <Divider
                  className="hidden md:block text-foreground-600 bg-foreground-400"
                  layout="vertical"
                />
                <p>
                  <Link
                    className="text-lg md:text-2xl font-medium text-white hover:underline"
                    href="mailto:ojinguluc@gmail.com"
                  >
                    ojinguluc@gmail.com
                  </Link>
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Link
                  className="text-white"
                  href="https://github.com/Celebration-cloud"
                  target="_blank"
                >
                  <i
                    className="pi pi-github hover:text-foreground-700"
                    style={{ fontSize: "1.5rem md:2rem" }}
                  />
                </Link>
                <Link
                  className="text-white"
                  href="https://linkedin.com/in/celebration-ojingulu-45b495246"
                  target="_blank"
                >
                  <i
                    className="pi pi-linkedin hover:text-foreground-700"
                    style={{ fontSize: "1.5rem md:2rem" }}
                  />
                </Link>
                <Link
                  className="text-white"
                  href="https://wa.me/2349014194307"
                  target="_blank"
                >
                  <i
                    className="pi pi-whatsapp hover:text-foreground-700"
                    style={{ fontSize: "1.5rem md:2rem" }}
                  />
                </Link>
              </div>
              <hr className="w-full border-t border-foreground-600 my-4" />
              <span className="text-center text-sm md:text-base">
                © {new Date().getUTCFullYear()}, All Rights Reserved | Designed
                By Ojingulu Celebration
              </span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
