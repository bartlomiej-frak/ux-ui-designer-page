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
        className="h-navbar sticky left-0 top-0 z-10 flex w-full flex-row items-center
          justify-between border-b-[0.5px] px-[15px] backdrop-blur-sm md:px-[60px]
          lg:px-global"
      >
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
            backgroundColor: isMobileMenuVisible ? "var(--background)" : "none",
          }}
          className="calc-navbar-mask absolute left-0 top-0 -z-10 w-full bg-gray-primary transition
            duration-300 ease-linear"
        />
        {isMobileMenuVisible && <MobileMenu />}
      </nav>
    </>
  );
};
