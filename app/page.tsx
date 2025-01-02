import { IPortfolioFields } from "@/@types/generated/contentful";
import { Hero } from "@/components/Hero";
import { ShowCase } from "@/components/ShowCase";
import { fetchPortfolioPages } from "@/lib/contentful/portfolio-pages";

export default async function Home() {
  const showcase: IPortfolioFields[] = await fetchPortfolioPages();

  return (
    <div>
      <Hero />
      <ShowCase showcase={showcase} />
    </div>
  );
}
