"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/common/Footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isCustomLayout = pathname.startsWith("/newLayoutSubnavbar");

  return (
    <>
      {children}
      {!isCustomLayout && <Footer className="bg-[#0D1224]" />}
    </>
  );
}
