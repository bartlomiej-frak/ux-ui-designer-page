import type { Metadata } from "next";
import "@/styles/globals.css";
import RootLayout from "@/components/navigation/RootLayout";

export const metadata: Metadata = {
  title: "UI/UX Designer Portfolio - Justyna Odej",
  description:
    "Explore the portfolio of Justyna Odej, a creative UI/UX designer specializing in user-centric designs, mobile app design, accessible design, intuitive interfaces, and impactful digital experiences. Discover innovative design projects and case studies.",
};

export default function HomePageLayout({
  hero,
  showcase,
}: Readonly<{
  hero: React.JSX.Element;
  showcase: React.JSX.Element;
}>) {
  return (
    <html lang="en">
      <body>
        <RootLayout>
          {hero}
          {showcase}
        </RootLayout>
      </body>
    </html>
  );
}
