"use client";

import { useState } from "react";
import { TfiPlus } from "react-icons/tfi";
import { TfiMinus } from "react-icons/tfi";

interface ItemsProps {
  id: string;
  label: string;
  content: string;
}

export const Accordion = ({ items }: { items: ItemsProps[] }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex: number) => {
    setExpandedIndex((currentExpandedIndex) =>
      currentExpandedIndex === nextIndex ? -1 : nextIndex,
    );
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = isExpanded ? (
      <TfiMinus className="text-[20px]" />
    ) : (
      <TfiPlus className="text-[20px]" />
    );
    return (
      <div key={item.id}>
        <div
          className="flex cursor-pointer flex-row items-center justify-between border-b-[0.5px]
            border-b-[#626262] pb-4 pt-2"
          onClick={() => handleClick(index)}
        >
          <p className="text-[30px] text-white">{item.label}</p>
          {icon}
        </div>
        {isExpanded && <div className="text-white">{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};
