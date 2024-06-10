import { useState, useEffect } from "react";

export const useScreenSize = (): {
  width: number;
  isMobile: boolean;
  isDesktop: boolean;
} => {
  const [screenInfo, setScreenInfo] = useState<{
    width: number;
    isMobile: boolean;
    isDesktop: boolean;
  }>({
    width: 0,
    isMobile: false,
    isDesktop: false,
  });

  useEffect(() => {
    const updateScreenInfo = () => {
      const width = window.innerWidth;
      const isMobile = width <= 879; // Adjust breakpoint as needed
      const isDesktop = width > 880; // Adjust breakpoint as needed

      setScreenInfo({ width, isMobile, isDesktop });
    };

    window.addEventListener("resize", updateScreenInfo);

    updateScreenInfo(); // Call initially to set state on mount

    return () => window.removeEventListener("resize", updateScreenInfo);
  }, []);

  return screenInfo;
};
