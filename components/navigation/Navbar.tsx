"use client";

import { NavLink } from "../NavLink";
import { MobileMenu, MobileMenuIcon } from "./MobileMenu";
import Image from "next/image";
import { DesktopMenu } from "./DesktopMenu";
import { navigationController } from "./navigation-hook";

export const Navbar = () => {
  const { isMobileMenuVisible, handleToggleMenu, opacity } =
    navigationController();

  return (
    <>
      <nav
        key={isMobileMenuVisible.toString()}
        className="responsive-padding md:shadow-nav_shadow sticky left-0 top-0 z-10 flex h-navbar
          w-full justify-center border-b-[0.5px] backdrop-blur-sm"
      >
        <div className="flex w-full max-w-[var(--max-content)] flex-row items-center justify-between">
          <Image
            className="md:hidden"
            src="/assets/logo-mobile.svg"
            alt="mobile-logo"
            width={45}
            height={45}
          />
          <div className="hidden md:block">
            <NavLink href={"/"}>JUSTYNA ODEJ</NavLink>
          </div>
          <DesktopMenu />
          <MobileMenuIcon
            isVisible={isMobileMenuVisible}
            toggleMenu={handleToggleMenu}
          />
          <div
            style={{
              opacity: isMobileMenuVisible ? 1 : opacity,
              backgroundColor: isMobileMenuVisible
                ? "var(--background)"
                : "none",
            }}
            className="calc-navbar-mask absolute left-0 top-0 -z-10 w-full bg-gray-primary transition
              duration-300 ease-linear"
          />
          {isMobileMenuVisible && <MobileMenu />}
        </div>
      </nav>
    </>
  );
};
