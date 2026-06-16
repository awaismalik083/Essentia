"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";



gsap.registerPlugin(ScrollTrigger);

const ATM = () => {
  const trackRef = useRef(null);

  const images = [
    { src: "/girls/img1.png", name: "@Cara Frekless" },
    { src: "/girls/img2.png", name: "@aisha.glow" },
    { src: "/girls/img3.png", name: "@natural.nia" },
    { src: "/girls/img4.png", name: "@elena minimal" },
    { src: "/girls/img5.png", name: "@sarah skin.glow" },
    { src: "/girls/img6.png", name: "@jess bareskin" },
  ];

  useEffect(() => {
    // FadeUp animation
    gsap.fromTo(
      ".FadeUp",
      { y: 0, opacity: 0 },
      {
        y: -100,
        opacity: 1,
        duration: 0.10,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".FadeUp",
          start: "top center",
          end: "+=30%",
          scrub: true,
        },
      },
    );

    // ✅ Marquee animation
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2; // half because we duplicated

    gsap.to(track, {
      x: -totalWidth,
      duration: 50,
      ease: "none",
      repeat: -1, // infinite
    });

    // Optional: pause on hover

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
    <div className="FadeUp mt-[60vh]  lg:mt-[40vh]">
      <div className="flex flex-col lg:flex-row gap-10  lg:justify-between m-15">
        <div className="flex lg:max-w-xl">
          <p className="text-4xl lg:text-6xl font-medium text-primary">
            Our Journey continues on social.
          </p>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-[#545454] text-2xl font-medium">
            @essentia.skinCare
          </h1>
          <button className="flex-1 mt-8 py-3 relative overflow-hidden cursor-pointer text-[#3a3d38] hover:text-white bg-[#d4dccf] rounded-md text-sm font-medium tracking-wide group">
            <div className="absolute inset-0 bg-[#3a3d38] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 ">Follow Us</span>
          </button>
        </div>
      </div>

      {/* ✅ overflow-hidden on wrapper, ref on the inner track */}
      <div className="w-full overflow-hidden mt-10">
        <div ref={trackRef} className="flex gap-2 will-change-transform">
          {[...images, ...images].map((item, index) => (
            <div
              key={index}
              className="w-[360px] h-[350px] relative flex-shrink-0 group cursor-pointer overflow-hidden rounded-md"
            >
              <Image
                fill
                src={item.src}
                alt={`image-${index}`}
                className="object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* your blur overlay */}
              <div className="absolute inset-0 rounded-md backdrop-blur-[4px] bg-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CiLocationArrow1 className="text-white absolute right-0 top-5 w-20 duration-500  ease-in-out opacity-0 group-hover:opacity-100" />

              <p className="text-sm font-medium absolute bottom-0 px-4 py-2 text-white z-10">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
 
    </>
  );
};

export default ATM;
