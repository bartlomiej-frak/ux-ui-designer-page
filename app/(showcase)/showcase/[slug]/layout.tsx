import type { Metadata } from "next";
import "@/styles/globals.css";
import { TfiClose } from "react-icons/tfi";
import { NavLink } from "@/components/navigation/NavLink";

//TODO: provide different dynamic description
export const metadata: Metadata = {
  title: "UI/UX Designer Portfolio - [Your Name]",
  description:
    "Explore the portfolio of [Your Name], a creative UI/UX designer specializing in user-centric designs, mobile app design, accessible design, intuitive interfaces, and impactful digital experiences. Discover innovative design projects and case studies.",
};

//TODO: remove navigation and footer from [slug] page
export default function ShowcaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="absolute w-full px-[15px] lg:px-[60px] xl:px-[125px]">
          <div className="sticky left-0 top-10 z-10 flex w-full flex-row justify-end">
            {/* TODO: consider smooth scrolling to showcase */}
            <NavLink href={"/#showcase"}>
              <TfiClose className="sticky text-[30px] text-foreground" />
            </NavLink>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
