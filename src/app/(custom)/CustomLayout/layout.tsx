
import type { Metadata } from "next";
import Header from "@/components/common/Header";
// ✅ New component
import SubNavbar from "@/components/common/SubNavbar";

export const metadata: Metadata = {
  title: "Custom Layout",
  description: "Page with a different layout",
};

export default function CustomLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <SubNavbar  />
        <main  className="">
          {children}
        </main>
      </body>
    </html>
  );
}
