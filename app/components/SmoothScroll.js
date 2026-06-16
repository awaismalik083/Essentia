"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6, // ↑ more = smoother (try 1.4–2)
      easing: (t) => 1 - Math.pow(1 - t, 4), // smooth ease-out
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9, // ↓ slower scroll = smoother feel
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
