"use client";
import React, { useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { useMyContext } from "../context/Context";
import { gsap } from "gsap";

const CheckOut = () => {
  const { OpenBag, SetOpenBag } = useMyContext();
  const panelRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (OpenBag) {
      gsap.fromTo(
        panelRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
    } else {
      gsap.to(panelRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
    }
  }, [OpenBag]);

  return (
    <>
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-50 flex items-stretch justify-end ${
          OpenBag ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ opacity: 0 }}
      >
        <div className="absolute inset-0 backdrop-blur-md bg-black/25" />

        <div className="p-10 relative z-10 flex items-stretch">
          {/* Bag panel */}
          <div
            ref={panelRef}
            className="relative flex flex-col w-full rounded-xl min-w-[250px] lg:min-w-[460px] h-[490px] bg-[#F8F5F0] shadow-2xl"
            style={{ opacity: 0, transform: "translateX(100%)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-black/[0.08]">
              <div className="flex items-center gap-2.5">
                <span className="text-[16px] font-medium tracking-wide">
                  Bag
                </span>
                <span
                  className="text-[11px] font-medium w-[22px] h-[22px] rounded-[4px] flex items-center justify-center"
                  style={{ background: "#2a1f14", color: "#f5f0ea" }}
                >
                  0
                </span>
              </div>
              <button
                onClick={() => SetOpenBag(!OpenBag)}
                className="w-8 h-8 flex cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-black/[0.07]"
              >
                <IoClose size={18} color="#1a1208" />
              </button>
            </div>

            {/* Empty state */}
            <div className="flex-1 flex flex-col items-center justify-center gap-2.5 px-10">
              <IoBagOutline
                size={52}
                style={{ color: "#1a1208", opacity: 0.18, marginBottom: 8 }}
              />
              <h2 className="text-2xl font-light text-primary tracking-tight">
                Your bag is empty.
              </h2>
              <p className="text-[13.5px] text-primary">
                Add some items to the bag.
              </p>
            </div>

            {/* Footer */}
            <div className="px-7 pt-6 pb-7 border-t border-black/[0.08] flex flex-col gap-3">
              <div className="flex justify-between items-center font-medium text-primary">
                <span className="text-[13px]">Shipping & Taxes</span>
                <span className="text-[13px]">Calculated at checkout</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[25px] text-primary font-medium">
                  Subtotal
                </span>
                <span className="text-[25px] font-medium text-primary">
                  0$
                </span>
              </div>
              <button className="mt-1.5 w-full py-4 font-medium rounded-md text-[17px] bg-[#d4dccf] cursor-pointer tracking-widest transition-all hover:-translate-y-px active:translate-y-0">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;