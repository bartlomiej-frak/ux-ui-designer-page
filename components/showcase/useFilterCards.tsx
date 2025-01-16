"use client";

import { useState } from "react";

export const useFilterCards = () => {
  const [filterBy, setFilterBy] = useState<string>("all");

  return {
    setFilterBy,
  };
};
