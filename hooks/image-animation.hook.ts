"use client";

import { useEffect, useState } from "react";

const SHIFT_RANGE = 40;
const ANIMATION_DURATION = 1;

export const useImageAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isShiftModeEnabled, setIsShiftModeEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.scrollY === 0) {
        setIsShiftModeEnabled(true);
      }
    }, ANIMATION_DURATION * 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (window.scrollY === 0) {
      setIsShiftModeEnabled(true);
    }
    const changeViewportScroll = () => {
      setScrollY(Math.min(window.scrollY * 0.1, SHIFT_RANGE));
    };

    window.addEventListener("scroll", changeViewportScroll);
    return () => window.removeEventListener("scroll", changeViewportScroll);
  }, [scrollY]);

  return {
    scrollY,
    isShiftModeEnabled,
    ANIMATION_DURATION,
  };
};
