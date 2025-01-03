import { Hero } from "@/components/Hero";
import { ShowCase } from "@/components/showcase/ShowCase";

export default async function Home() {
  return (
    <div>
      <Hero />
      <ShowCase />
    </div>
  );
}
