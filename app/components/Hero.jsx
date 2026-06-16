"use client";
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // ✅ correct
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const pinnedRef = useRef(null);

  const creamSection = useRef(null);
  const creamSection1 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.delayedCall(0.7, () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=335%",
          pin: pinnedRef.current,
          pinSpacing: false,
        });

        // Animation 1 — titles fade up (0% → 40%)
        gsap.to(".fadeup", {
          y: -500,
          ease: "power1.in",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=50%",
            scrub: true,
          },
        });

        // Animation 2 — hand goes down (0% → 50%)
        gsap.to(".fadedown1", {
          y: 500,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: true,
          },
        });

        // Animation 3 — cream goes down (0% → 100%)
        gsap.to(".fadedown2", {
          y: 500,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: true,
          },
        });

        // Animation 4 — text fades in with blur (100% → 160%)
        gsap.fromTo(
          ".fadetxt",
          {
            opacity: 0,
            filter: "blur(15px)",
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "+=10%",
              end: "+=40%",
              scrub: true,
            },
          },
        );

        // Animation 5 — same text slides up (160% → 180%)
        gsap.to(".fadetxt1", {
          y: -300,
          ease: "power1.in",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "30% center",
            end: "+=40%",
            scrub: true,
          },
        });

        // Animation 7 — section8 slides up
        gsap.to(creamSection.current, {
          y: -400,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: creamSection.current,
            start: "+=10%",
            end: "+=40%",
            scrub: true,
          },
        });

        gsap.to(creamSection1.current, {
          y: -480,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: creamSection1.current,
            start: "+=110%",
            end: "+=40%",
            scrub: true,
          },
        });

        // Section 2 (02) slides up after section 1 leaves
        gsap.to(".section10", {
          y: -450,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: creamSection.current,
            start: "+=80%",
            end: "+=40%",
            scrub: true,
          },
        });

        // Animation 10 — section10FadeUp slides up
        gsap.fromTo(
          ".section10FadeUp",
          { y: 0 },
          {
            y: -385,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ".section10FadeUp",
              start: "+=100%",
              end: "+=40%",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          ".section11",
          { y: 0 },
          {
            y: "-680",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ".section11",
              start: "+=85%",
              end: "+=40%",
              scrub: true,
            },
          },
        );
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={sectionRef} className="overflow-hidden mb h-[440vh]">
        {/* Inner hero — this gets pinned */}
        <div
          ref={pinnedRef}
          className="bg-[#F8F5F0] mt-6 relative h-screen overflow-hidden"
        >
          <h1 className="text-7xl mt-[76vh] lg:text-8xl lg:text-[20rem] w-full lg:mt-70 tracking-wider lg:tracking-normal font-medium absolute text-[#dcd8d2]">
            Essentia
          </h1>

          {/* Hand + Cream floating group */}
          <div className="z-20 absolute left-[38%] top-[36%] flex flex-col items-center">
            <div className="relative w-[70px] lg:w-[35%] aspect-square">
              <Image src="/cream.png" fill className="object-contain fadedown2" alt="" />
            </div>
            <Image
              className="relative fadedown1 mt-[35%] lg:mt-[8%] mr-[20%] lg:mr-[33%] z-50 w-[230px] lg:w-auto h-auto"
              src="/hand.png"
              width={400}
              height={400}
              style={{ height: "auto" }}
              alt=""
            />
          </div>

          <div className="relative z-10 flex ml-3 lg:ml-9 flex-col lg:text-8xl text-5xl fadeup text-primary mt-20 lg:mt-35">
            <span className="relative font-medium text-primary tracking-tight">
              Your healthiest
            </span>
            <span className="mt-2 relative z-20 font-medium text-primary tracking-tight">
              skin revealed
            </span>
          </div>

          <div className="fadeup hidden lg:block absolute right-0 top-60 leading-[21px] flex-col text-4xl">
            <p className="ml-14 font-medium">We strip away the</p>
            <br />
            <p className="font-medium">unnecessary to focus</p>
            <br />
            <p className="font-medium ml-8">on what truly works.</p>
          </div>

          <div className="relative inline-flex flex-col gap-2 mt-4 ml-3 lg:mt-10 lg:ml-16 fadeup">
            {/* Overlapping images row */}
            <div className="flex">
              <Image
                src="/img1.png"
                width={40}
                height={40}
                style={{ height: "auto" }}
                className="rounded-md border-2 border-white relative z-10"
                alt="img1"
              />
              <Image
                src="/img2.png"
                width={40}
                height={40}
                style={{ height: "auto" }}
                className="rounded-md border-2 border-white relative -ml-4 z-20"
                alt="img2"
              />
              <Image
                src="/img3.png"
                width={40}
                height={40}
                style={{ height: "auto" }}
                className="rounded-md border-2 border-white relative -ml-4 z-30"
                alt="img3"
              />
              <Image
                src="/img4.png"
                width={40}
                height={40}
                style={{ height: "auto" }}
                className="rounded-md border-2 border-white relative -ml-4 z-40"
                alt="img4"
              />
            </div>

            {/* Stars */}
            <div className="flex gap-3">
              <FaStar size={12} />
              <FaStar size={12} />
              <FaStar size={12} />
              <FaStar size={12} />
              <FaStar size={12} />
            </div>

            {/* Label */}
            <p className="text-[9px] font-semibold">
              2500+ <span className="ml-1">Happy Customers</span>
            </p>
          </div>

          <div className="fadetxt fadetxt1 absolute top-30 lg:top-50 ml-10 font-medium flex flex-col justify-center items-center text-center leading-tight lg:text-6xl lg:leading-15">
            <h1 className="opacity-70 text-2xl font-medium lg:text-6xl lg:font-medium">
              Five proven ingredients that actually work.
            </h1>

            <div className="lg:hidden flex flex-col items-center text-center">
              <h1 className="text-2xl font-medium">Less bottles.</h1>
              <h1 className="text-2xl font-semibold">Better skin.</h1>
              <h1 className="text-2xl font-bold">Smarter routine.</h1>
            </div>

            <h1 className="hidden lg:block mr-30">
              Less Bottles. Better skin. Same routine.
            </h1>
          </div>

          <div ref={creamSection} className="lg:absolute hidden lg:block top-160 lg:top-140">
            <div className="h-screen relative ml-10 z-10 flex justify-between">
              <div className="flex text-primary gap-y-3 font-medium flex-col">
                {/* Section no 1 */}
                <div ref={creamSection1}>
                  <div>
                    <div className="bg-[#d4dccf] mb-5 relative w-9 h-6 rounded-sm flex justify-center items-center">
                      <p className="absolute text-sm">01</p>
                    </div>
                  </div>
                  <p className="lg:text-5xl text-4xl">Five ingredients.</p>
                  <p className="lg:text-5xl text-4xl">Nothing more.</p>
                  <p className="w-120 mt-8 hidden lg:block text-[#545454]">
                    We use only what works: ceramides to repair, peptides to
                    renew, niacinamide to calm, squalane to hydrate, and
                    glycerin to protect. Nothing to irritate your skin, nothing
                    to waste your money. Just the essentials that deliver real
                    results.
                  </p>
                </div>

                {/* Section no 2 */}
                <div className="mt-38 section10">
                  <div className="section10FadeUp">
                    <div>
                      <div className="bg-[#d4dccf] mb-5 relative w-9 h-6 rounded-sm flex justify-center items-center">
                        <p className="absolute text-sm">02</p>
                      </div>
                    </div>
                    <p className="text-5xl">Proven by.</p>
                    <p className="text-5xl">People like you.</p>
                    <p className="w-120 mt-8 text-[#545454]">
                      In real-world testing, 94% of users saw dramatic
                      improvements in just 28 days. Not subtle changes were
                      talking about the what have you done differently kind of
                      results that friends notice and comment on.
                    </p>
                  </div>
                </div>

                {/* Section no 3 */}
                <div className="section11">
                  <div className="section11FadeUp">
                    <div>
                      <div className="bg-[#d4dccf] mb-5 relative w-9 h-6 rounded-sm flex justify-center items-center">
                        <p className="absolute text-sm">03</p>
                      </div>
                    </div>
                    <p className="text-5xl">Quality over quantity.</p>
                    <p className="w-120 mt-8 text-[#545454]">
                      Instead of diluting our formula with cheap fillers and
                      fancy-sounding extracts, we use higher concentrations of
                      ingredients that actually work. Your skin gets exactly
                      what it needs, delivered exactly where it needs it.
                    </p>
                  </div>
                </div>

                {/* Section no 4 */}
                <div className="section12">
                  <div>
                    <div>
                      <div className="bg-[#d4dccf] mb-5 relative w-9 h-6 rounded-sm flex justify-center items-center">
                        <p className="absolute text-sm">04</p>
                      </div>
                    </div>
                    <p className="text-5xl">Quality over quantity.</p>
                    <p className="w-120 mt-8 text-[#545454]">
                      Instead of diluting our formula with cheap fillers and
                      fancy-sounding extracts, we use higher concentrations of
                      ingredients that actually work. Your skin gets exactly
                      what it needs, delivered exactly where it needs it.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Image
                  src="/cream.png"
                  className="mt-20 ml-80"
                  width={150}
                  height={150}
                  style={{ height: "auto" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
