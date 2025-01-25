import { fetchContent } from "@/lib/contentful";
import { Suspense } from "react";
import { IShowcaseFields } from "@/lib/@types/generated/contentful";
import { Grid } from "@/components/showcase/Grid";
import { GridSkeleton } from "@/components/loaders/GridSkeleton";

export const revalidate = 3600;

async function Cards() {
  const showcase = await fetchContent<IShowcaseFields>("showcase");
  const showcaseByDateOfCreation = showcase.sort(
    (a, b) =>
      new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime(),
  );
  return <Grid data={showcaseByDateOfCreation} />;
}

export default function ShowCase() {
  return (
    <div id="showcase" className="pt-[80px]">
      <h2 className="text-[100px] leading-[100px]">Works</h2>
      <Suspense fallback={<GridSkeleton cells={6} />}>
        <Cards />
      </Suspense>
    </div>
  );
}
