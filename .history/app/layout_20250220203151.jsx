import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Divider } from "primereact/divider";

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
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="mx-auto max-w-7xl">{children}</main>
            <footer className="w-full flex items-center flex-col gap-2 bg-red-500 text-white justify-center py-20">
              <h2 className="text-4xl font-bold">Ojingulu Celebration</h2>
              <p className="text-2xl font-medium">
                4, Prince Kosoko King&#39;s Street, Meiran, Lagos, Nigeria.
              </p>
              <div className="flex items-center text-2xl font-medium justify-center">
                <p>(+234) 901 419 4307</p>
                <Divider className="text-foreground-600 bg-foreground-400" la />
                <p>
                  <Link
                    className="text-2xl font-medium text-white hover:underline"
                    href="mailto:ojinguluc@gmail.com"
                  >
                    ojingulu@example.com
                  </Link>
                </p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
