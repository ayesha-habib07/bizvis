'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SubNavbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-condition', label: 'Terms & Conditions' },
    { href: '/disclaimer', label: 'Disclaimer' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap flex items-center text-start gap-2 px-[24px] py-[30px] bg-[#020820] text-white lg:px-[110px]  lg:py-[45px]">
      {navItems.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          <Link
            href={item.href}
            className={`inline-block px-3 py-1 rounded-full border-1 transition-colors ${
              pathname === item.href ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
            }`}
          >
            {item.label}
          </Link>
          {index < navItems.length - 1 && (
            <span className="text-gray-400">&gt;</span>
          )}
        </div>
      ))}
    </div>
  );
}
