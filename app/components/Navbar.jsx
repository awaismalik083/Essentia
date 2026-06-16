"use client";
import { useState, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useMyContext } from "../context/Context";
import Link from "next/link"; // for Next.js

const navItems = [
  { label: "About", href: "/About" },
  { label: "Journal", href: "/Journal" },
  { label: "Support", href: "/Support" },
];

// ✅ Fix 1: Destructure both label AND href so the desktop nav can link correctly
const RollNavItem = ({ label, href }) => {
  const wrapperRef = useRef(null);
  const tlRef = useRef(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const original = wrapper.querySelector(".text-original");
    const clone = wrapper.querySelector(".text-clone");

    tlRef.current = gsap
      .timeline({ paused: true })
      .to(original, { y: "-100%", duration: 0.4, ease: "power2.inOut" }, 0)
      .to(clone, { y: "-100%", duration: 0.4, ease: "power2.inOut" }, 0);
  }, []);

  return (
    // ✅ Fix 2: Wrap in Link so desktop nav items are actually clickable
    <Link href={href}>
      <li
        ref={wrapperRef}
        
        className="cursor-pointer overflow-hidden relative"
        style={{ lineHeight: 1 }}
        onMouseEnter={() => tlRef.current.play()}
        onMouseLeave={() => tlRef.current.reverse()}
      >
        <span className="text-original block">{label}</span>
        <span
          className="text-clone block absolute left-0 whitespace-nowrap"
          style={{ top: "100%" }}
        >
          {label}
        </span>
      </li>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const itemsRef = useRef([]);
  const tl = useRef(null);
  const { OpenBag, SetOpenBag } = useMyContext();

  useGSAP(() => {
    const menu = menuRef.current;
    const items = itemsRef.current;

    gsap.set(menu, { height: 0, opacity: 0 });
    gsap.set(items, { y: -10, opacity: 0 });

    tl.current = gsap
      .timeline({ paused: true })
      .to(menu, {
        height: "auto",
        opacity: 1,
        duration: 0.35,
        ease: "power2.inOut",
      })
      .to(
        items,
        {
          y: 0,
          opacity: 1,
          duration: 0.25,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.15",
      );
  }, []);

  const handleToggle = () => {
    if (!isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white/60 fixed backdrop-blur-xl border border-white/10 shadow-md top-0 w-[320px] lg:w-full z-50">
        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between px-5 py-4">
          <button onClick={handleToggle} className="text-2xl text-primary">
            {isOpen ? <IoCloseSharp /> : <IoMenu />}
          </button>

          {/* ✅ Fix 3: Wrap logo in relative so ™ sits correctly */}
          <Link href={"/"}>
          <div className="flex items-start cursor-pointer">
            
            <span className="text-[20px] font-medium text-primary">
              Essentia
            </span>
            <span className="text-[10px] font-semibold text-primary mt-1">
              ™
            </span>

          </div>
          </Link>

          <button
          onClick={()=>SetOpenBag(!OpenBag)}
            style={{ cursor: "pointer" }}
            className="font-semibold text-[15px] flex items-center cursor-pointer relative"
          >
            Bag
            <div className="bg-black w-5 h-5 ml-1 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">0</span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div ref={menuRef} className="lg:hidden overflow-hidden px-5">
          <ul className="flex flex-col gap-3 text-primary font-medium text-[17px] pb-4">
            {navItems.map((item, i) => (
              <li key={item.href} ref={(el) => (itemsRef.current[i] = el)}>
                {/* ✅ Fix 4: Use Next.js Link instead of bare <a> */}
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between px-10 py-3">
          {/* ✅ Fix 5: Logo — use relative wrapper, remove stray absolute */}
          <div className="relative flex items-start">
          <Link href="/" >
            <span className="text-[35px] font-medium text-primary">
              Essentia
            </span>
            <span className="text-[10px] text-primary font-semibold mt-2 ml-0.5">
              ™
            </span>
          </Link>  
          </div>

          {/* ✅ Fix 6: Pass item.label and item.href — not the whole item object */}
          <ul className="flex gap-15 text-primary font-medium text-[19px]">
            {navItems.map((item) => (
              <RollNavItem key={item.href} label={item.label} href={item.href} />
            ))}
          </ul>

          {/* ✅ Fix 7: Bag count — use flexbox instead of magic margin hack */}
          <div className="flex gap-6 items-center">
            <button className="cursor-pointer hover:text-white active:scale-90 hover:bg-black transition-all duration-500 ease-in-out bg-[#d4dccf] py-3 px-4 rounded-xl font-medium">
              Order Now
            </button>
            <button
              onClick={() => SetOpenBag(!OpenBag)}
              className="font-semibold text-[18px] flex items-center gap-1 relative"
            >
              Bag
              <div className="bg-black w-5 h-5 rounded-md flex items-center justify-center">
                <span className="text-white text-xs">0</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;