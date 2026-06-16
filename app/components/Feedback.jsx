
"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useState, } from "react";

gsap.registerPlugin(ScrollTrigger);

const Feedback = () => {
  const thumbnails = [
    "/model/img1.png",
    "/model/img2.png",
    "/model/img3.png",
    "/model/img4.png",
  ];

  const cardsRef = useRef(null);

  const [activeThumb, setActiveThumb] = useState(0);
  const [activeSize, setActiveSize] = useState("standard");
  const [isToggle, SetIsToggle] = useState(false);
  const [isToggle1, SetIsToggle1] = useState(false);
  const thumbnailRef = useRef(null);
  const [qty, setQty] = useState(1);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.delayedCall(0.7, () => {
      const textAnim = {
        trigger: cardsRef.current,
        start: "115% top",
        end: "+=60%",
        scrub: true,
      };

      gsap.to(".SlideText", {
        x: "104%",
        scrollTrigger: textAnim,
      });

      gsap.to(".ReverseSlideText", {
        x: "-104%",
        scrollTrigger: textAnim,
      });

      gsap.fromTo(
        ".ScaleUp",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: textAnim,
        }
      );

      // ✅ IMPORTANT: refresh AFTER everything is created
      ScrollTrigger.refresh();
    });
  });

  return () => ctx.revert();
}, []);

  const handleThumbnailClick = (i) => {
    const el = thumbnailRef.current;
    gsap.to(el, {
      opacity: 0,
      duration: 0.2,
      ease: "power1.out",
      onComplete: () => setActiveThumb(i),
    });
  };

  useEffect(() => {
    const el = thumbnailRef.current;
    gsap.set(el, { opacity: 0 });
    gsap.to(el, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [activeThumb]);

  return (
    <>
      <div className="w-screen mt-40">
        <div className="flex flex-col sticky top-10 lg:leading-60 w-screen h-screen items-center justify-center text-primary">
          <h1 className="text-[19vw] SlideText relative font-medium">
            What they
          </h1>
          <h1 className="text-[19vw] ReverseSlideText font-medium">
            are saying
          </h1>
        </div>

        <div ref={cardsRef} className="relative z-10 px-6 py-20">
          <div className="flex flex-col lg:flex-row justify-center gap-30">
            <Image
              className="rounded-xl lg:translate-y-[20vh]"
              src="/Cards/card1.png"
              width={300}
              height={300}
              style={{ height: "auto" }}
              priority
              alt=""
            />
            <Image
              className="rounded-xl lg:translate-y-[60vh]"
              src="/Cards/card2.png"
              priority
              width={300}
              height={300}
              style={{ height: "auto" }}
              alt=""
            />
            <Image
              className="rounded-xl"
              src="/Cards/card3.png"
              width={300}
              priority
              height={300}
              style={{ height: "auto" }}
              alt=""
            />
          </div>

          <div className="flex flex-col mt-30 lg:flex-row lg:mt-[50vh] lg:justify-center gap-30">
            <Image
              className="rounded-xl lg:translate-y-[20vh]"
              src="/Cards/card2.png"
              width={300}
              height={300}
              style={{ height: "auto" }}
              priority
              alt=""
            />
            <Image
              className="rounded-xl lg:translate-y-[60vh]"
              src="/Cards/card1.png"
              width={300}
              height={300}
              style={{ height: "auto" }}
              priority
              alt=""
            />
            <Image
              className="rounded-xl"
              src="/Cards/card5.png"
              width={300}
              height={300}
              style={{ height: "auto" }}
              priority
              alt=""
            />
          </div>
        </div>

        <div className="w-full ScaleUp sticky z-20 flex mt-[140vh] lg:mt-[90vh] gap-8 p-15 rounded-2xl min-h-[320px]">
          {/* Thumbnail Column */}
          <div className="flex flex-col gap-2.5 hidden lg:block flex-shrink-0">
            {thumbnails.map((src, i) => (
              <div
                key={i}
                onClick={() => handleThumbnailClick(i)}
                className={`w-[50px] h-[50px] rounded-[10px] overflow-hidden cursor-pointer border-2 transition-colors ${
                  activeThumb === i
                    ? "border-primary"
                    : "border-transparent hover:border-[#9a8e7e]"
                }`}
              >
                <Image
                  src={src}
                  width={72}
                  height={72}
                  style={{ height: "auto" }}
                  alt={`thumbnail ${i + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div
            ref={thumbnailRef}
            className="flex-1 relative rounded-[14px] overflow-hidden hidden lg:block bg-[#ede7dc] h-[115vh]"
          >
            <Image
              src={thumbnails[activeThumb]}
              fill
              alt="product main"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Info Column */}
          <div className="lg:w-[400px] w-[240px] flex-shrink-0 flex flex-col gap-5 pt-1">
            <h1 className="text-6xl font-medium text-[##3a3d38] leading-tight tracking-tight">
              Essentia<sup className="text-top font-medium">™</sup>
            </h1>

            <div className="flex lg:items-baseline gap-2.5">
              <span className="text-[22px] font-medium text-primary">$85</span>
              <span className="text-base text-[#b8bcb6] line-through">
                $125
              </span>
            </div>

            <div className="h-px bg-[#c8bfb0]" />

            <div>
              <p className="text-xs text-[##3a3d38] uppercase tracking-wide mb-2">
                Size
              </p>
              <div className="flex gap-2.5">
                {[
                  { id: "standard", label: "Standard (50 ml)" },
                  { id: "travel", label: "Travel (20 ml)" },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setActiveSize(id)}
                    className={`lg:px-4 px-6 lg:py-2.5 rounded-md py-3 lg:rounded-lg text-[10px] lg:text-[13px] border-[1.5px] transition-all ${
                      activeSize === id
                        ? "bg-[#3a3d38] text-[#f0ebe2] border-[#3a3d38]"
                        : "bg-transparent text-primary border-[#c8bfb0]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-sm text-primary leading-relaxed font-medium">
              Your skin doesn't need 50 ingredients and 10 steps. It needs the
              right ones. Five powerful ingredients. Healthier, calmer, more
              radiant skin. No complexity. Just results.
            </p>

            {/* Shipping */}
            <div className="border-t relative z-50 border-[#c8bfb0] pt-3.5 mt-5">
              <div className="flex justify-between items-center mt-5">
                <span className="text-xl font-medium">Shipping</span>
                <button onClick={() => SetIsToggle(!isToggle)}>
                  <IoIosArrowDown
                    className={`text-primary w-5 text-lg cursor-pointer ease-in-out transition-transform duration-400 ${
                      isToggle ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  isToggle ? "max-h-96 opacity-100 mt-5" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-primary font-medium">
                  We offer free shipping on all orders and they typically ship
                  within 1-2 business days. US orders typically arrive in 3-5
                  business days with standard shipping or 2-3 days with
                  expedited shipping. International orders generally arrive
                  within 7-14 business days, depending on your location.
                </p>
              </div>
            </div>

            {/* Return Policy */}
            <div className="border-t relative z-50 border-[#c8bfb0] pt-3.5 mt-5">
              <div className="flex justify-between items-center mt-5">
                <span className="text-xl font-medium">Return Policy</span>
                <button onClick={() => SetIsToggle1(!isToggle1)}>
                  <IoIosArrowDown
                    className={`text-primary w-5 text-lg cursor-pointer ease-in-out transition-transform duration-400 ${
                      isToggle1 ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  isToggle1 ? "max-h-96 opacity-100 mt-5" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-primary font-medium">
                  We offer a 30-day satisfaction guarantee. If you're not
                  completely satisfied with your Essence product, you can return
                  it within 30 days of receipt for a full refund of your
                  purchase price.
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 relative z-50">
              <div className="flex items-center gap-3 border border-[#d0d0c8] rounded-xl px-4 py-2.5">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="text-lg leading-none text-black hover:bg-[#d4dccf] rounded-md cursor-pointer w-5 text-center"
                >
                  −
                </button>
                <span className="text-sm font-medium w-2 text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="text-lg leading-none text-black hover:bg-[#d4dccf] rounded-md cursor-pointer w-5 text-center"
                >
                  +
                </button>
              </div>

              <button className="flex-1 py-2.5 relative overflow-hidden cursor-pointer text-[#3a3d38] hover:text-white bg-[#d4dccf] rounded-md text-sm font-medium tracking-wide group">
                <div className="absolute inset-0 bg-[#3a3d38] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10">Add to Bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;