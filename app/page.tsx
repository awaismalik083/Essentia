"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import CTA from "../app/components/CTA";
import Feedback from "../app/components/Feedback";
import ATM from "../app/components/ATM";
import Footer from "./components/Footer";
import CheckOut from "./components/CheckOut";
import PageLoader from "./components/PageLoader";
import Mobile from "./components/Mobile";

const page = () => {
  const [isMobile, SetIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      SetIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // run on mount

    window.addEventListener("resize", checkMobile); // update on resize

    return () => window.removeEventListener("resize", checkMobile); // cleanup
  }, []);

  return (
    <>
      {isMobile ? (
        <Mobile />
      ) : (
        <PageLoader>
          <div>
            <Navbar />
            <Hero />
            <CTA />
            <Feedback />
            <ATM />
            <Footer />
            <CheckOut />
          </div>
        </PageLoader>
      )}
    </>
  );
};

export default page;
