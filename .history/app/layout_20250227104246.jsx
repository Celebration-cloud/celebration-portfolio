import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

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
        <link href={metadata.icons.icon} rel="icon" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-full">
            <Navbar />
            <main className="mx-auto max-w-7xl">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
