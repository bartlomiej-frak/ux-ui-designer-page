import Link from "next/link";
import { ReactNode } from "react";

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link href={href} className="link-hover">
      {children}
    </Link>
  );
};
