"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className="link-hover"
      style={{
        color:
          path === "/info" && href === "/info"
            ? "var(--primary-violet)"
            : "inherit",
      }}
    >
      {children}
    </Link>
  );
};
