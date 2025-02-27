"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname)

  return (
    <HeroUINavbar shouldHideOnScroll maxWidth="2xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1 text-foreground-800"
            href="/"
          >
            <Logo />
            <p className="font-bold">O. Celebration Portfolio</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-3/5 sm:basis-full"
        justify="center"
      >
        <ul className="hidden lg:flex gap-10 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.label}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  `nav-link`,
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3">
          <Link
            isExternal
            className="text-foreground-800"
            href="https://github.com/Celebration-cloud"
          >
            <i
              className="pi pi-github hover:text-foreground-700"
              style={{ fontSize: "1.2rem" }}
            />
          </Link>
          <Link
            isExternal
            className="text-foreground-800"
            href="https://linkedin.com/in/celebration-ojingulu-45b495246"
          >
            <i
              className="pi pi-linkedin hover:text-foreground-700"
              style={{ fontSize: "1.2rem" }}
            />
          </Link>
          <Link
            isExternal
            className="text-foreground-800"
            href="https://wa.me/2349014194307"
          >
            <i
              className="pi pi-whatsapp hover:text-foreground-700"
              style={{ fontSize: "1.2rem" }}
            />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link
          isExternal
          className="text-foreground-800"
          href="https://github.com/Celebration-cloud"
        >
          <i
            className="pi pi-github hover:text-foreground-700"
            style={{ fontSize: "1.2rem" }}
          />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={itm}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
