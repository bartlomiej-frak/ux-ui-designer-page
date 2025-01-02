import { useEffect, useState } from "react";

export const navigationController = () => {
  const [opacity, setOpacity] = useState(0);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  useEffect(() => {
    const changeNavbarOpacity = () => {
      setOpacity(window.scrollY && 0.5);
    };

    window.addEventListener("scroll", changeNavbarOpacity);
    return () => window.removeEventListener("scroll", changeNavbarOpacity);
  }, [opacity]);

  const handleToggleMenu = () =>
    setIsMobileMenuVisible((isVisible) => !isVisible);

  useEffect(() => {
    const handleViewportWidthChange = () => {
      if (window.innerWidth >= 768) {
        document.body.style.overflow = "auto";
        setIsMobileMenuVisible(false);
      } else {
        document.body.style.overflow = isMobileMenuVisible ? "hidden" : "auto";
      }
    };
    handleViewportWidthChange();

    window.addEventListener("resize", handleViewportWidthChange);

    return () => {
      window.removeEventListener("resize", handleViewportWidthChange);
    };
  }, [isMobileMenuVisible]);

  return {
    opacity,
    isMobileMenuVisible,
    handleToggleMenu,
  };
};
