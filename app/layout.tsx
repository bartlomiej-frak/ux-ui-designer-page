import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/navigation/Navbar";

export const metadata: Metadata = {
  title: "UI/UX Designer Portfolio - [Your Name]",
  description:
    "Explore the portfolio of [Your Name], a creative UI/UX designer specializing in user-centric designs, mobile app design, accessible design, intuitive interfaces, and impactful digital experiences. Discover innovative design projects and case studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ height: "200vh", width: "100%" }}>
        <Navbar />
        <main className="px-global">{children}</main>
      </body>
    </html>
  );
}
