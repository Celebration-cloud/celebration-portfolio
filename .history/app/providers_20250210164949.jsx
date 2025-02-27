"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";
import AOS from "aos";
import "@/styles/globals.css";

export function Providers({ children, themeProps }) {
  const router = useRouter();

  useEffect(() => {
    // Import Bootstrap's JavaScript bundle only on the client side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
        once: false, // Whether animation should happen only once - while scrolling down
      });
    }, []);

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
