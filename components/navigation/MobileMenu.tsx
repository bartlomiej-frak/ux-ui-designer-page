import { NavLink } from "./NavLink";
import { RxHamburgerMenu } from "react-icons/rx";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuIconProps {
  isVisible: boolean;
  toggleMenu: MouseEventHandler<SVGElement>;
}

export const MobileMenuIcon = ({
  isVisible,
  toggleMenu,
}: MobileMenuIconProps) =>
  isVisible ? (
    <TfiClose onClick={toggleMenu} className="mobile-menu-icon" />
  ) : (
    <RxHamburgerMenu onClick={toggleMenu} className="mobile-menu-icon" />
  );

export const MobileMenu = ({
  closeMenu,
}: {
  closeMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  "use client";
  const pathname = usePathname();

  const handleCloseMenu = (href: string) => {
    const isCurrentPath = pathname.startsWith(href);
    if (!isCurrentPath) {
      return;
    }
    closeMenu(false);
  };

  return (
    <div
      className="calc-viewport absolute left-0 top-navbar flex w-full flex-col justify-between
        bg-mobile_bg px-[15px] py-[30px] md:hidden"
    >
      <nav>
        <ul>
          <li className="text-[75px]" onClick={() => handleCloseMenu("/")}>
            <NavLink href={"/#showcase"}>Works</NavLink>
          </li>
          <li
            className="font-TSR text-[75px] italic"
            onClick={() => handleCloseMenu("/info")}
          >
            <NavLink href={"/info"}>info</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <Image
              src="/assets/email-icon.svg"
              alt="email-icon"
              width={20}
              height={20}
            />
            <p>odej.studio@gmail.com</p>
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/assets/phone-icon.svg"
              alt="phone-icon"
              width={20}
              height={20}
            />
            <p>+48 790 503 306</p>
          </li>
        </ul>
      </div>
      <div className="flex gap-8 pb-4">
        <Link href="https://www.instagram.com/odej.art/">
          <Image
            src="/assets/instagram-icon.svg"
            alt="instagram-icon"
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://linktr.ee/justynaodej">
          <Image
            src="/assets/linktr-icon.svg"
            alt="linktr-icon"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
};
