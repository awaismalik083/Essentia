import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const fadeUp = (element) => {
  if (!element) return;

  gsap.to(element, {
    y: -300, // 👈 how much it moves up
    ease: "power1.out",
   duration:"500",
    scrollTrigger: {
      trigger: element,
      start: "top bottom", // starts when enters screen
      end: "bottom top", // ends when leaves screen
      scrub: true, // 🔥 smooth scroll-based movement
    },
  });
};

