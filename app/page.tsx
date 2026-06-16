import React from "react";
import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import CTA from "../app/components/CTA";
import Feedback from "../app/components/Feedback";
import ATM from "../app/components/ATM";
import Footer from "./components/Footer"
import CheckOut from  './components/CheckOut'

const page = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <CTA />
      <Feedback />
      <ATM />
      <Footer/>
      <CheckOut/>

    </div>
  );
};

export default page;
