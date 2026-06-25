"use client";
import { useState, useEffect } from "react";
import CrystalLoader from "./CrystalLoader";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load — adjust delay as needed
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <CrystalLoader />
      </div>
    );
  }

  return <>{children}</>;
}