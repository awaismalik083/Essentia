"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "motion/react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const GridItems = [
  {
    img: "/Journel/img2.jpeg",
    tag: "Trends",
    date: "Feb 6,2026",
    title: "Skin care vs trend cycles",
  },
  {
    img: "/Journel/img6.jpg",
    tag: "Insights",
    date: "Jan 3,2026",
    title: "The Foundation of healthy skin",
  },
  {
    img: "/Journel/img5.jpeg",
    tag: "Insights",
    date: "July 3,2026",
    title: "The truth about ingredient percentages",
  },
  {
    img: "/Journel/img4.jpeg",
    tag: "Story",
    date: "December 20,2025",
    title: "My skin tranformed",
  },
  {
    img: "/Journel/img1.jpeg",
    tag: "Insipiration",
    date: "November 15,2025",
    title: "The Luxury of less",
  },
];

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

const page = () => {
  const MotionImage = motion(Image);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="min-h-screen mt-20 lg:mt-35"
      >
        <div className="flex flex-col gap-y-10 lg:gap-y-20 items-start p-6 lg:p-10">
          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-8xl tracking-tight text-primary font-medium"
          >
            Beyond Your Skin
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-6 lg:flex-row lg:gap-50"
          >
            <div className="pt-1 flex justify-start w-fit">
              <span className="mt-10 self-start text-sm px-4 py-2 rounded-md bg-[#d4dccf] font-medium text-primary whitespace-nowrap">
                Our Journals
              </span>
            </div>
            <div className="flex gap-y-6 lg:gap-y-10 text-primary w-full lg:w-2xl flex-col">
              <p className="text-xl lg:text-2xl font-medium">
                Insights, research, and stories exploring the science of
                skincare and its impact on health, wellness, and daily life.
              </p>
              <p className="text-sm lg:text-md font-medium">
                Dive deeper into how proper skincare can transform your beauty.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Image Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative w-full p-4 lg:p-10"
      >
        <motion.span
          variants={itemVariants}
          className="absolute top-10 left-10 lg:top-20 lg:left-20 z-10 bg-[#d4dccf] backdrop-blur-sm text-sm font-medium text-gray-700 px-3 py-1 rounded-md shadow-sm"
        >
          Trends
        </motion.span>

        <motion.div
          variants={itemVariants}
          className="overflow-hidden rounded-2xl"
        >
          <MotionImage
            initial={{ scale: 1, filter: "blur(0px) brightness(0.8)" }}
            whileHover={{ scale: 1.05, filter: "blur(5px) brightness(0.8)" }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            width={800}
            height={700}
            src="/Journel/img3.jpeg"
            className="w-full h-[300px] lg:h-[600px] cursor-pointer object-cover"
            alt="img3"
          />
        </motion.div>

        <motion.span
          variants={itemVariants}
          className="flex flex-col gap-y-3 lg:gap-y-10 absolute bottom-10 left-10 lg:bottom-20 lg:left-20"
        >
          <p className="text-sm lg:text-md font-medium text-white/80">
            March 14, 2026
          </p>
          <h1 className="text-white text-2xl lg:text-7xl w-[260px] lg:w-2xl">
            Why few ingredients work better
          </h1>
        </motion.span>
      </motion.div>

      {/* Grid Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 lg:p-10 mb-20 lg:mb-30"
      >
        {GridItems.map((item, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="relative cursor-pointer group"
          >
            <span className="absolute top-7 left-7 z-10 bg-[#d4dccf] text-sm font-medium text-primary px-3 py-1 rounded-md">
              {item.tag}
            </span>

            <div className="overflow-hidden rounded-xl h-[250px] lg:h-[300px]">
              <Image
                className="w-full h-full brightness-80 object-cover transition-transform duration-600 group-hover:blur-[3px] ease-out group-hover:scale-115"
                src={item.img}
                alt={item.img}
                width={300}
                height={400}
              />
            </div>

            <span className="flex flex-col gap-y-2 absolute bottom-5 left-5">
              <p className="text-sm lg:text-md font-medium text-white/80">
                {item.date}
              </p>
              <h1 className="text-white text-xl lg:text-3xl font-medium w-[200px] lg:w-md">
                {item.title}
              </h1>
            </span>
            <FaArrowRightLong className="text-white group-hover:-rotate-45 opacity-0 group-hover:opacity-100 transition-all ease-linear duration-300 z-30 absolute text-sm top-7 right-7" />
          </motion.div>
        ))}
      </motion.div>

      <Footer />
    </>
  );
};

export default page;
