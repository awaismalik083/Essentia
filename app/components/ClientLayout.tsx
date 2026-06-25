"use client";
import SmoothScroll from "./SmoothScroll";
import { MyProvider } from "../context/Context";
import { useIsMobile } from "../../Hooks/useIsMobile";
import MobileBlock from "./MobileBlock";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <MyProvider>
      {isMobile ? <MobileBlock /> : <SmoothScroll>{children}</SmoothScroll>}
    </MyProvider>
  );
}