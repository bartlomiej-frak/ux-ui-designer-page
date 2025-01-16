"use client";

import { useState } from "react";
import { ShowCaseCard } from "./ShowCaseCard";
import { IShowcaseFields } from "@/lib/@types/generated/contentful";

type FilterBy =
  | "All"
  | "UI/UX"
  | "Collaborations"
  | "Case Study"
  | "Wireframes";

export const ShowCaseGrid = ({ data }: { data: IShowcaseFields[] }) => {
  const [filterBy, setFilter] = useState<FilterBy>("All");

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
            filterBy === "All" ? item : item.tags.includes(filterBy),
          )
          .map((item) => (
            <ShowCaseCard key={item.title} showcaseItem={item} />
          ))}
      </div>
    </>
  );
};
