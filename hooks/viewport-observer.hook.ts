import { useState, useEffect } from "react";

const MIN_DESKTOP_WIDTH = 1024;

export const useViewportObserver = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    setIsWideScreen(window.innerWidth >= MIN_DESKTOP_WIDTH);
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= MIN_DESKTOP_WIDTH);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isWideScreen;
};
