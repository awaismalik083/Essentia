"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ingredients = [
  { name: "Ceramide NP", label: "Ingredient 01" },
  { name: "Peptides", label: "Ingredient 02" },
  { name: "Niacinamide", label: "Ingredient 03" },
  { name: "Squalane", label: "Ingredient 04" },
  { name: "Hyaluronic Acid", label: "Ingredient 05" },
  { name: "Glycerine", label: "Ingredient 06" },
];

const CTA = () => {
  useEffect(() => {
    gsap.fromTo(".FadeUp", { y: 0 }, { y: 100, scrub: true });
    gsap.fromTo(
      ".SideFade",
      {
        x: -1400,
        opacity:0.50
      },
      {
        x: 0,
        opacity:1,
        ease:"power1.inOut",
        scrollTrigger: {
          trigger: ".SideFade",
          start: "top 80%",
          end: "+=40%",
          scrub: true,
          
        },
      },
    );
  }, []);

  return (
    <div className=" min-h-screen mt-20 bg-[#F8F5F0]">
      <div className="z-0 relative FadeUp">
        {/* Header Text */}
        <div className="flex items-start ml-6 lg:ml-12 pt-10 gap-y-2 text-primary flex-col">
          <h1 className="text-4xl lg:text-6xl font-medium">
            Simple ingredients,
          </h1>
          <h1 className="text-4xl lg:text-6xl font-semibold">
            Powerful results
          </h1>
          <p className="lg:w-[54rem] mt-8 lg:text-xl font-medium text-[#5a5d58]">
            Each ingredient in Essentia was chosen for one reason: it works. No
            trendy botanicals that sound nice but do nothing. No irritating
            fragrances. Just five powerful ingredients working together to
            transform your skin.
          </p>
        </div>

        {/* Image + Ingredients Row */}
        <div className="flex flex-col lg:flex-row lg:items-start  mt-20 lg:ml-12 lg:mr-12 gap-16">
          {/* Image */}
          <div className="flex-shrink-0 w-[300px] lg:w-[500px] ml-4">
            <Image
              className="rounded-xl object-cover"
              src="/ingredients.png"
              width={480}
              height={320}
              alt="Skincare ingredients"
            />
          </div>

          {/* Ingredients List */}
          <div className="flex flex-col flex-1 pt-2">
            {/* Tag */}
            <span className="self-start ml-3 mb-6 lg:mt-10 lg:mb-8 px-1 py-1.5 rounded-md bg-[#d4dccf] text-sm font-medium text-primary tracking-wide">
              Active Ingredients
            </span>

            {/* List */}
            <div className="flex flex-col divide-y lg:mt-5 font-medium divide-[#dedad4]">
              {ingredients.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-4 lg:py-6"
                >
                  <span className="ml-4 lg:text-lg lg:text-xl font-medium text-primary">
                    {item.name}
                  </span>
                  <span className="text-sm mr-4 lg:text-base text-[#9a9d96]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col SideFade lg:flex-row lg:m-5 mt-10 lg:mt-10 lg:justify-between lg:items-center">
        <div className="flex  flex-col gap-y-5 mt-20 ml-5">
          <h1 className="text-4xl w-[90vw] lg:text-6xl font-medium lg:w-120">
            Most skincare is doing too much.
          </h1>
          <p className=" w-[90vw] lg:w-100 text-sm font-medium">
            Ever notice how your skin gets worse the more products you try?
            There's a reason. Most brands pile on ingredients, hoping a few
            might work. Your poor skin is overwhelmed, irritated, and nowhere
            near its natural best.
          </p>
        </div>
        <div className="flex justify-center items-center p-4">
          <Image
            className="rounded-xl "
            src="/model.png"
            width={500}
            height={500}
            alt="model image"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
