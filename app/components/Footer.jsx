"use client";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";



const Footer = () => {
  const textRef = useRef(null);
  const triggerRef = useRef(null);

// useEffect(() => {

  
//   gsap.fromTo(
//     textRef.current,
//     {
//       rotationX: 90,
//       opacity: 0,
//       transformOrigin: "center bottom",
//     },
//     {
//       rotationX: 0,
//       opacity: 1,
//       duration: 1.5,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: triggerRef.current,
//         start: "92% 18%",   // 👈 fires earlier, when terms row enters viewport
//         end: "+=40%",
//         scrub: true,
        
//       },
//     }
//   );
// }, []);


  return (
    <>
      <div  className="flex  lg:items-center lg:justify-center h-screen  p-5 border-t  border-gray-300 ">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-stretch lg:border-b border-gray-300 p-5   divide-x divide-gray-300 w-full max-w-6xl">
          {/* Menu */}
          <div className="flex flex-col text-primary px-5">
            <p className="text-md font-medium">Menu</p>
            <div className="mt-6 flex flex-col gap-2">
              <h1 className="text-4xl font-medium">About</h1>
              <h2 className="text-4xl font-medium">Journal</h2>
              <h3 className="text-4xl font-medium">Support</h3>
              <h3 className="text-4xl font-medium">404</h3>
            </div>
          </div>

          {/* Socials */}
          <div className="flex mt-20 lg:mt-0 flex-col text-primary px-5">
            <p className="text-md font-medium">Socials</p>
            <div className="mt-6 flex flex-col gap-2">
              <h1 className="text-4xl font-medium">Instagram</h1>
              <h2 className="text-4xl font-medium">X / Twitter</h2>
              <h3 className="text-4xl font-medium">Tiktok</h3>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex mt-20 lg:mt-0 flex-col px-5 max-w-md ">
            <h1 className="text-3xl font-medium text-primary">
              Stay essential.
            </h1>
            <p className="text-sm font-medium mt-5">
              Join our community for evidence-based skincare insights,
              formulation updates, and exclusive access to limited releases. We
              respect your inbox as much as your skin—no excessive
              communication.
            </p>

            <div className="relative flex items-end w-full mt-10">
              <input
                className="w-full border-b border-gray-300 h-[47px] p-2 bg-transparent placeholder:text-sm placeholder:text-[#C7C6C3] font-medium focus:outline-none focus:border-gray-500"
                placeholder="Email"
              />
              <button className="absolute right-0 cursor-pointer bottom-1 w-10 h-10 rounded-xl bg-[#DDE8DC] flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-[#3a3d38] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <FaArrowRight className="text-sm relative z-10 text-gray-700 group-hover:text-white group-hover:-rotate-45 transition-all duration-300 ease-linear" />
              </button>
            </div>

            <div className="mt-5 flex gap-2 items-center">
              <input type="checkbox" id="terms" className="accent-gray-500" />
              <p className="text-[13px] font-medium text-primary">
                By subscribing you agree to the Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
     {/* Terms row */}
<div className="hidden lg:flex lg:relative lg:items-center text-primary font-medium lg:justify-center lg:gap-50 text-sm mb-10">
  <p>terms & Conditions</p>
  <p>Privacy Policy</p>
  <p>Payment Methods</p>
  <p className="flex items-start gap-1">
    @2026{" "}
    <span className="relative">
      Essentia<sup className="text-[8px]">TM</sup>
    </span>{" "}
    All rights reserved
  </p>
</div>

{/* Essentia text with Framer Motion */}
<div className="hidden lg:block lg:mt-0" style={{ perspective: "1000px" }}>
  <motion.h1
    initial={{ rotateX: 90, opacity: 0 }}
    whileInView={{ rotateX: 0, opacity: 1 }}
    
    transition={{ duration: 0.60, ease: "easeOut" }}
    style={{ 
      transformOrigin: "center bottom",
      transformStyle: "preserve-3d" 
    }}
    className="w-screen mt-[-80px] tracking-wider text-center font-medium text-primary text-[22vw]"
  >
    Essentia
  </motion.h1>
</div>
    </>
  );
};

export default Footer;
