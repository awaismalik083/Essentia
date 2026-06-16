"use client";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Page = () => {
  const Items = [
    {
      img: "/About/img4.png",
      title: "Your Skin",
      number: "01",
      description:
        "We test extensively but never on animals. Our formula is designed to support your skin's natural functions, not override them or create dependency.",
    },
    {
      img: "/About/img6.png",
      title: "Your Planet",
      number: "02",
      description:
        "Our vessels are infinitely recyclable, and our refill program reduces environmental impact by 94%. We've eliminated secondary packaging entirely – because your bathroom doesn't need more cardboard boxes.",
    },
    {
      img: "/About/img7.png",
      title: "Transparency",
      number: "03",
      description:
        "We tell you exactly what's in our products and why. No pseudoscience. No secret ingredients. Just honest skincare that respects your intelligence.",
    },
  ];

  const sectionRef = useRef(null);
  const ImageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".scaleOut",
      { scale: 1.2, filter: "brightness(70%)" },
      {
        scale: 1,
        filter: "brightness(100%)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "70% top",
          end: "+=50%",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="min-h-screen ml-10 px-10 pt-33 pb-24"
      >
        <motion.h1
          variants={itemVariants}
          className="font-medium text-primary text-5xl lg:text-8xl leading-none tracking-tight mb-10"
        >
          The Beginning
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex lg:flex-row flex-col items-start mt-20 gap-16 max-w-7xl"
        >
          <div className="pt-1  flex-shrink-0">
            <span className="text-sm px-3 py-2 rounded-md bg-[#d4dccf] font-medium text-primary">
              Our Approach
            </span>
          </div>
          <div className="flex flex-col gap-6 text-primary max-w-3xl lg:max-w-2xl">
            <p className="text-[1.30rem] font-medium">
              Looking at our bathroom shelves filled with half-used products,
              each promising different benefits yet delivering mostly
              frustration, we knew there had to be a better way.{" "}
              <strong>
                We partnered with leading dermatologists to challenge an
                industry built on convincing you to buy more.
              </strong>
            </p>
            <p className="text-[1.05rem] mt-5 font-medium text-primary">
              We&apos;re built on a radical belief: your skin works best when it
              isn&apos;t overwhelmed.
              <br />
              No fillers. No fragrance. No marketing-driven additives. Just what
              works..
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scale Image */}
      <div className="relative lg:mb-5 lg:mt-5 scaleOut flex items-center justify-center">
        <Image
          className="rounded-2xl w-[300px] p-1 lg:w-full h-[500px] object-cover"
          src="/About/img1.jpeg"
          width={1260}
          height={1000}
          alt="image1"
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C5C2C7] text-5xl lg:text-7xl tracking-widest font-medium">
          Essentia™
        </p>
        <div className="absolute bottom-6 left-8 text-[#C5C2C7] leading-tight">
          <p className="text-xs opacity-70">Est</p>
          <p className="text-xl lg:text-2xl font-semibold">2022</p>
        </div>
        <div className="absolute bottom-6 right-8 text-[#C5C2C7] text-right leading-tight">
          <p className="text-xs opacity-70">Made in</p>
          <p className="text-xl lg:text-2xl font-semibold">Switzerland</p>
        </div>
      </div>

      {/* Philosophy Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:mt-50 mt-10 p-10 mb-10"
      >
        <motion.h1
          variants={itemVariants}
          className="lg:text-6xl text-4xl font-medium text-primary"
        >
          Our Philosophy
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex lg:flex-row flex-col items-start mt-20 gap-16 max-w-7xl"
        >
          <div className="pt-1 flex-shrink-0">
            <span className="text-sm px-3 py-2 rounded-md bg-[#d4dccf] font-medium text-primary">
              Our core principles
            </span>
          </div>
          <div className="flex flex-col gap-6 text-primary max-w-xl">
            <p className="text-[1.35rem] font-medium">
              Essentia is built on a fundamental belief that skincare should be
              straightforward, effective, and respectful of your skin's natural
              intelligence.
            </p>
            <p className="text-[1.05rem] mt-3 font-medium text-primary">
              We reject the industry's tendency to complicate what should be
              simple. Every decision we make follows three core principles:
            </p>
          </div>
        </motion.div>

        {/* Our Process */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:mt-50 mt-10 gap-10 flex flex-col lg:flex-row items-center justify-between overflow-hidden"
        >
          <motion.div variants={itemVariants} className="w-full lg:w-1/2">
            <Image
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-[250px] lg:h-[700px]"
              src="/About/img3.png"
              alt="image3"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-7xl font-medium text-primary">
              Our Process
            </h1>
            <p className="text-sm lg:text-md text-primary font-medium w-full lg:max-w-xl mt-6 lg:mt-10">
              Each batch of Essentia begins with ingredients sourced from
              specialized laboratories in Switzerland, Japan, and France. These
              are combined in our California facility using a proprietary
              cold-process method that preserves the integrity of each
              component.
            </p>
            <p className="text-sm lg:text-md text-primary font-medium w-full lg:max-w-xl mt-6 lg:mt-10">
              Every batch undergoes three separate testing phases before being
              hand-poured into our custom glass vessels. The entire process
              takes 17 days – significantly longer than conventional production
              – but delivers uncompromising quality.
            </p>
          </motion.div>
        </motion.div>

        {/* Our Commitments */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:mt-40 mt-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-primary text-4xl lg:text-7xl font-medium"
          >
            Our Commitments
          </motion.h1>

          <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 gap-10 items-start justify-between">
            {Items.map((item, index) => (
              <div key={index} className="w-full lg:flex-1">
                <div className="relative w-full h-[300px] lg:h-[470px] overflow-hidden rounded-xl">
                  <Image
                    ref={ImageRef}
                    src={item.img}
                    fill
                    quality={100}
                    className="object-cover"
                    alt={item.title}
                  />
                </div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                  className="mt-10"
                >
                  <div className="flex flex-row text-xl justify-between p-2 mt-5 font-medium">
                    <p>{item.title}</p>
                    <p>{item.number}</p>
                  </div>
                  <div className="py-3 w-full border-b border-gray-400"></div>
                  <p className="text-md font-medium text-primary mt-10">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Page;
