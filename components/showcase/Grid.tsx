"use client";

import { useState } from "react";
import { Card } from "./Card";
import { IShowcaseFields } from "@/lib/@types/generated/contentful";
import { useViewportObserver } from "@/hooks/viewport-observer.hook";

type FilterBy =
  | "All"
  | "UI/UX"
  | "Collaborations"
  | "Case Study"
  | "Wireframes";

export const Grid = ({ data }: { data: IShowcaseFields[] }) => {
  const [filterBy, setFilter] = useState<FilterBy>("All");
  const isDesktopDevice = useViewportObserver();

  return (
    <>
      <div className="hidden flex-row justify-end gap-10 align-middle text-[20px] text-white lg:flex">
        <button className="link-hover" onClick={() => setFilter("All")}>
          All
        </button>
        <button className="link-hover" onClick={() => setFilter("UI/UX")}>
          UI/UX
        </button>
        <button
          className="link-hover"
          onClick={() => setFilter("Collaborations")}
        >
          Collaborations
        </button>
        <button className="link-hover" onClick={() => setFilter("Case Study")}>
          Case Study
        </button>
        <button className="link-hover" onClick={() => setFilter("Wireframes")}>
          Wireframes
        </button>
      </div>
      <div className="grid grid-cols-1 flex-wrap gap-5 pt-[70px] sm:grid-cols-2 xl:grid-cols-3">
        {data
          .filter((item) =>
            filterBy === "All" || !isDesktopDevice
              ? item
              : item.tags.includes(filterBy),
          )
          .map((item) => (
            <Card key={item.title} showcaseItem={item} />
          ))}
      </div>
    </>
  );
};
