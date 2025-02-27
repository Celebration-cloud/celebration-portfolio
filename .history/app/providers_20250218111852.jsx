"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrimeReactProvider } from "primereact/api";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";
import "@/styles/globals.css";

export function Providers({ children, themeProps }) {
  const router = useRouter();

  useEffect(() => {
    // Import Bootstrap's JavaScript bundle only on the client side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
