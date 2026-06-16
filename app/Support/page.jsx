"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

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
  return (
    <>
      <Navbar />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-30 p-10 mb-80 lg:mb-0 h-screen"
      >
        <motion.h1
          variants={itemVariants}
          className="text-primary text-6xl  lg:text-8xl font-medium"
        >
          Support
        </motion.h1>

        <div className="flex flex-row gap-10 justify-between">
          {/* Left Info Section */}
          <div className="flex flex-col">
            <motion.p
              variants={itemVariants}
              className="text-md w-[261px] lg:w-[500px] lg:text-xl  lg:max-w-xl mt-10 font-medium"
            >
              <span className="font-medium text-primary text-black">
                Do you have any questions about our products?
              </span>
              <span className="text-gray-700 ml-1">
                You can send us an email or fill in the following form.
              </span>
            </motion.p>

            <motion.div variants={itemVariants}>
              <p className="text-2xl mt-10 font-semibold text-primary">
                Head Office
              </p>
              <p className="text-sm mt-1 text-primary font-medium w-sm">
                150 Mercer Street New York, NY 10012
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex mt-10 gap-20 flex-col lg:flex-row"
            >
              <div>
                <h1 className="text-primary text-2xl font-medium">Email</h1>
                <a
                  className="text-primary font-medium text-sm underline hover:text-gray-400"
                  href=""
                >
                  support@essentia.com
                </a>
              </div>
              <div>
                <h1 className="text-primary text-2xl font-medium">Phone</h1>
                <a
                  className="text-primary font-medium text-sm underline hover:text-gray-400"
                  href=""
                >
                  (555) 123-4567
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Form Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col w-1/2 gap-0"
          >
            <input
              type="text"
              placeholder="Subject*"
              className="w-full py-3 px-0 text-sm font-medium text-primary placeholder-text-primary bg-transparent border-b border-gray-400 focus:outline-none mb-8"
            />

            <div className="flex gap-6 mb-8">
              <input
                type="text"
                placeholder="First Name*"
                className="w-1/2 py-3 px-0 text-sm font-medium text-primary placeholder-text-primary bg-transparent border-b border-gray-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-1/2 py-3 px-0 text-sm font-medium text-primary placeholder-text-primary bg-transparent border-b border-gray-400 focus:outline-none"
              />
            </div>

            <div className="flex gap-6 mb-8">
              <input
                type="email"
                placeholder="Email*"
                className="w-1/2 py-3 px-0 text-sm font-medium text-primary placeholder-text-primary bg-transparent border-b border-gray-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Order Number"
                className="w-1/2 py-3 px-0 text-sm font-medium text-primary placeholder-text-primary bg-transparent border-b border-gray-400 focus:outline-none"
              />
            </div>

            <div className="flex items-end gap-4 border-b border-gray-400">
              <textarea
                placeholder="Your Message*"
                rows={5}
                className="flex-1 py-3 px-0 text-sm font-medium text-primary placeholder-text-primary bg-transparent focus:outline-none resize-none"
              />
              <button className="mb-3 py-2 px-2 group relative overflow-hidden cursor-pointer text-[#3a3d38] hover:text-white bg-[#d4dccf] rounded-md text-sm font-medium tracking-wide">
                <div className="absolute inset-0 bg-[#3a3d38] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10">
                  <FaLongArrowAltRight className="text-sm group-hover:-rotate-45 duration-300 transition-all" />
                </span>
              </button>
            </div>

            <p className="text-xs text-primary mt-6">
              *We aim to respond to inquiries within 24 hours.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default page;
