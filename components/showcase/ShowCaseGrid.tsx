import { ShowCaseCard } from "./ShowCaseCard";
import { IShowcaseFields } from "@/lib/@types/generated/contentful";

export const ShowCaseGrid = ({ data }: { data: IShowcaseFields[] }) => {
  return (
    <div className="gap-5 pt-[70px] lg:grid lg:grid-cols-3">
      {data.map((item) => (
        <ShowCaseCard key={item.title} showcaseItem={item} />
      ))}
    </div>
  );
};
