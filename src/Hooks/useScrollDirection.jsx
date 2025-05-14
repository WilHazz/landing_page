import React, { useEffect, useRef, useState } from "react";

export default function useScrollDirection() {
  const [scrollUp, setScrollUp] = useState(true);
  const lastScrolly = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrolly.current) {
        setScrollUp(false);
      } else {
        setScrollUp(true);
      }
      lastScrolly.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollUp;
}
