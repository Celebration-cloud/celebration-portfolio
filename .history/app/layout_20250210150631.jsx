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
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container max-w-7xl">{children}</main>
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
