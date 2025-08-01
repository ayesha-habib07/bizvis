import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import { ModalProvider } from "@/components/context/ModalProvider";
import InvestmentPopUp from "@/components/modals/InvestmentPopUp";
import PartnerPopUp from "@/components/modals/PartnersPopUp";

import "./globals.css";

export const metadata: Metadata = {
  title: "My App",
  description: "Awesome website",
};

export default function CustomLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          {/* <Header /> */}
          <main>{children}</main>
          <Footer />
          <InvestmentPopUp />
          <PartnerPopUp />
        </ModalProvider>
      </body>
    </html>
  );
}
