"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { HeroUIProvider } from "@heroui/system";
// import { ToastProvider } from "@heroui/toast";
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
      {/* <ToastProvider /> */}
      <NextThemesProvider {...themeProps}>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
