import { IPortfolioFields } from "@/@types/generated/contentful";
import Link from "next/link";

export const ShowCase = ({ showcase }: { showcase: IPortfolioFields[] }) => {
  const cards = showcase.map((project) => {
    return (
      <button key={project.title}>
        <Link href={`/showcase/${project.slug}`}>{project.slug}</Link>
      </button>
    );
  });

  return <div>{cards}</div>;
};
