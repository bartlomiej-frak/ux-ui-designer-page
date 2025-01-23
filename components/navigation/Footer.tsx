import Link from "next/link";
import { NavLink } from "./NavLink";
import Image from "next/image";

export const Footer = () => {
  return (
    <div
      className="responsive-padding mt-[80px] flex flex-col items-center border-t-[0.5px]
        py-[40px]"
    >
      <div className="w-full max-w-[var(--max-content)]">
        <div className="flex flex-col gap-7 align-middle md:flex-row md:justify-between">
          <div className="flex justify-center md:flex-1 md:justify-start">
            <NavLink href={"/"}>JUSTYNA ODEJ</NavLink>
          </div>
          <ul className="flex flex-col items-center justify-center gap-4 md:flex-1 md:flex-row md:gap-20">
            <li>
              <NavLink href={"/#showcase"}>WORKS</NavLink>
            </li>
            <li>
              <NavLink href={"/info"}>INFO</NavLink>
            </li>
          </ul>
          <div className="flex justify-center gap-8 pb-4 md:flex-1 md:justify-end">
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
        <p className="mt-5 max-w-[var(--max-content)] text-center text-[10px] text-[#808080]">
          ©2023 odej.studio all right reserved.
        </p>
      </div>
    </div>
  );
};
