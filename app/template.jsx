// app/template.jsx
"use client";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        exit={{ x: "0%" }}      // slides back in when leaving
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#d4dccf", // your brand color
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}