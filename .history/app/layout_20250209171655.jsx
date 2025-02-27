import "@/styles/globals.css";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

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
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords.join(", ")} />
        <meta name="author" content={siteConfig.author} />
        <meta property="og:type" content={siteConfig.openGraph.type} />
        <meta property="og:locale" content={siteConfig.openGraph.locale} />
        <meta property="og:url" content={siteConfig.openGraph.url} />
        <meta property="og:title" content={siteConfig.openGraph.title} />
        <meta
          property="og:description"
          content={siteConfig.openGraph.description}
        />
        <meta property="og:image" content={siteConfig.openGraph.image} />
        <meta
          property="og:site_name"
          content={siteConfig.openGraph.site_name}
        />
        <meta name="twitter:card" content={siteConfig.twitter.cardType} />
        <meta name="twitter:site" content={siteConfig.twitter.site} />
        <meta name="twitter:creator" content={siteConfig.twitter.handle} />
        <meta name="twitter:title" content={siteConfig.openGraph.title} />
        <meta
          name="twitter:description"
          content={siteConfig.openGraph.description}
        />
        <meta name="twitter:image" content={siteConfig.openGraph.image} />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">HeroUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
