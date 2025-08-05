'use client';

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // ✅ Add this
import { useState } from "react";
import CTAButton from "./CTAButton";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ Get current path

  return (
    <header className="bg-transparent sticky top-0 left-0 w-full md:px-[60px] lg:px-[110px] md:py-[25px] py-[18px] px-[25px] z-50 flex justify-between items-center">
      <div className="flex items-center gap-20 justify-between">
        <div className="flex items-center gap-2">
          <Link href='/'>
            <img src="/logo.png" alt="logo" className="h-8 w-8" />
          </Link>
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

      {/* ✅ Conditional CTA Buttons */}
      <div className="hidden lg:flex gap-3">
        {(pathname === '/' || pathname === '/customerSignUp') && (
          <Link href="/customerSignUp" className="cursor-pointer">
            <CTAButton
              text="Customer Early Access – Sign Up Now"
              bgClass="bg-[#4DEF0866]"
            />
          </Link>
        )}

        {(pathname === '/' || pathname === '/businessSignUp') && (
          <Link href="/businessSignUp" className="cursor-pointer">
            <CTAButton
              text="Business Early Access – Sign Up Now"
              bgClass="bg-[#029CF666]"
            />
          </Link>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        {menuOpen ? (
          <X className="text-white" onClick={() => setMenuOpen(false)} />
        ) : (
          <Menu className="text-white" onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="fixed top-[80px] left-0 w-full bg-black text-white px-6 py-4 flex flex-col gap-3 lg:hidden z-40">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
