"use client";

import { NavLink } from "@/components/navigation/NavLink";
import Image from "next/image";
import "@/styles/globals.css";

export default function Error() {
  return (
    <div className="responsive-padding mt-10 w-full">
      <h1 className="text-[30px] text-white sm:text-[50px]">
        <span className="font-TSR text-[40px] leading-[25px] sm:text-[60px]">
          Oops!{" "}
        </span>
        Something went wrong...
      </h1>
      <p className="mt-10">
        We encountered an unexpected issue, but don&apos;t worry—our team is
        already working to fix it. Please try again later.
      </p>
      <div className="fixed bottom-[20px] right-[20px]">
        <NavLink href={"/"}>
          <Image
            src="/assets/logo-mobile.svg"
            alt="mobile-logo"
            width={45}
            height={45}
          />
        </NavLink>
      </div>
    </div>
  );
}
