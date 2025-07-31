'use client';

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import CTAButton from "./CTAButton";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" bg-[#020820] sticky top-0 left-0 w-full  px-8 md:px-[60px] lg:px-[110px]  lg:py-[45px]  py-4  z-50 flex justify-between items-center">

      <div className="flex items-center gap-20 justify-between ">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-8 w-8" />
          {/* <span className="text-white text-xl font-bold">Bizvis</span> */}
        </div>

        <nav className="hidden lg:flex gap-6 text-white text-sm items-center">
          <Link href="/">Home</Link>
          <Link href="/contact-us">Contact us</Link>
          <Link href="#" className="flex items-center">
            <Image
              src="/BYNCAI.png"
              alt="BYNCAI"
              width={20}
              height={20}
              className="object-contain w-[55px]"
            />

          </Link>
        </nav>

      </div>

      <div className="hidden lg:flex gap-3 ">
        <Link href="/customerSignUp"><CTAButton text="Customer Early Access – Sign Up Now"  bgClass="bg-[#4DEF0866]" /></Link>
        <Link href="/businessSignUp"><CTAButton text="Business Early Access – Sign Up Now"  bgClass="bg-[#029CF666]" /></Link>
      </div>

      <div className="lg:hidden">
        {menuOpen ? (
          <X className="text-white" onClick={() => setMenuOpen(false)} />
        ) : (
          <Menu className="text-white" onClick={() => setMenuOpen(true)} />
        )}
      </div>


      {menuOpen && (
        <div className="fixed top-[80px] left-0 w-full bg-black text-white px-6 py-4 flex flex-col gap-3 lg:hidden z-40">

          <Link href="/">Home</Link>
          <Link href="/contact-us" >Contact Us</Link>
          <Link href="#">BYNC AI</Link>
          {/* <CTAButton text="Customer Early Access – Sign Up Now" color="green" />
          <CTAButton text="Business Early Access – Sign Up Now" color="blue" /> */}
        </div>
      )}
    </header>
  );
}
