import React from "react";
import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import CTA from "../app/components/CTA";
import Feedback from "../app/components/Feedback";
import ATM from "../app/components/ATM";
import Footer from "./components/Footer";
import CheckOut from "./components/CheckOut";
import PageLoader from "./components/PageLoader";

const page = () => {
  return (
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
  );
};

export default page;