"use client";

import { IInfoPageFields } from "@/lib/@types/generated/contentful";
import { useState } from "react";
import { TfiPlus } from "react-icons/tfi";
import { TfiMinus } from "react-icons/tfi";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Certifications } from "./Certifications";
import { Skills } from "./Skills";
import { Tools } from "./Tools";

export const Accordion = ({
  items,
}: {
  items: IInfoPageFields["competence"];
}) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex: number) => {
    setExpandedIndex((currentExpandedIndex) =>
      currentExpandedIndex === nextIndex ? -1 : nextIndex,
    );
  };

  const renderedItems = Object.entries(items).map(([label, content], index) => {
    const isExpanded = index === expandedIndex;

    const icon = isExpanded ? (
      <TfiMinus className="text-[20px]" />
    ) : (
      <TfiPlus className="text-[20px]" />
    );
    return (
      <div key={label}>
        <div
          className="flex cursor-pointer flex-row items-center justify-between border-b-[0.5px]
            border-b-[#626262] pb-4 pt-2"
          onClick={() => handleClick(index)}
        >
          <p className="text-[30px] capitalize text-white">{label}</p>
          {icon}
        </div>
        {isExpanded && (
          <div className="text-white">
            {label === "experience" && <Experience fields={content} />}
            {label === "education" && <Education fields={content} />}
            {label === "certifications" && <Certifications fields={content} />}
            {label === "skills" && <Skills fields={content} />}
            {label === "tools" && <Tools fields={content} />}
          </div>
        )}
      </div>
    );
  });

  return <div className="lg:hidden">{renderedItems}</div>;
};
