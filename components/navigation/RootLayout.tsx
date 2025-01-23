import "@/styles/globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.JSX.Element[] | React.JSX.Element;
}>) {
  return (
    <>
      <Navbar />
      <main className="responsive-padding flex w-full justify-center">
        <div className="w-full max-w-[var(--max-content)]">{children}</div>
      </main>
      <Footer />
    </>
  );
}
