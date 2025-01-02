import { NavLink } from "../NavLink";
import { RxHamburgerMenu } from "react-icons/rx";
import { MouseEventHandler } from "react";
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";
import Link from "next/link";

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

export const MobileMenu = () => {
  return (
    <div
      className="calc-viewport top-navbar bg-mobile_bg absolute left-0 flex w-full flex-col
        justify-between px-[15px] py-[30px] md:hidden"
    >
      <nav>
        <ul>
          <li className="text-[75px]">
            <NavLink href={"/"}>Works</NavLink>
          </li>
          <li className="font-TSR text-[75px] italic">
            <NavLink href={"/"}>info</NavLink>
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
        <NavLink href="https://www.instagram.com/odej.art/">
          <Image
            src="/assets/instagram-icon.svg"
            alt="instagram-icon"
            width={20}
            height={20}
          />
        </NavLink>
        <NavLink href="https://linktr.ee/justynaodej">
          <Image
            src="/assets/linktr-icon.svg"
            alt="linktr-icon"
            width={20}
            height={20}
          />
        </NavLink>
      </div>
    </div>
  );
};
