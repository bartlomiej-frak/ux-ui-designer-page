import { ShowCaseGrid } from "./ShowCaseGrid";
import { fetchContent } from "@/lib/contentful";
import { Suspense } from "react";
import { GridSkeleton } from "../loaders/GridSkeleton";
import { IShowcaseFields } from "@/lib/@types/generated/contentful";
import { useFilterCards } from "./useFilterCards";

async function Cards() {
  const showcase = await fetchContent<IShowcaseFields>("showcase");
  const showcaseByDateOfCreation = showcase.sort(
    (a, b) =>
      new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime(),
  );
  return <ShowCaseGrid data={showcase} />;
}

export const ShowCase = () => {
  return (
    <div id="showcase" className="pt-[80px]">
      <h2 className="text-[100px] leading-[100px]">Works</h2>
      <Suspense fallback={<GridSkeleton />}>
        <Cards />
      </Suspense>
    </div>
  );
};
