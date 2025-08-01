
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-white px-[24px] py-[30px] bg-[#020820] lg:px-[110px] " >
      {/* Top section */}
      <div className=" flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Logo and name */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-semibold">Bizvis</span>
        </div>

        {/* Social media */}
        <div>
          <h3 className="text-lg font-medium mb-2">Social Media</h3>
          <div className="flex gap-4">
            <Image src="/Group.png" alt="youtube" width={24} height={24} />
            <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
            <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Links and copyright */}
      <div className="  flex flex-col md:flex-row justify-between items-center md:items-center gap-6">
        {/* Footer links */}
        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
          <li>
            <Link href="#" className="hover:text-white transition">Contact Us</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white transition">Disclaimers</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white transition">FAQs</Link>
          </li>
        </ul>

        {/* Copyright */}
        <div className="flex gap-[12px] justify-center items-center ">
          <p className="text-[12px] text-start ">
          © 2025 Bizvis Inc. | See Before You Go™ <br /> | Stream to Be Chosen™ | All Rights Reserved.
        </p>
        <div>
          <Image src="/footerImg.png" alt="footer Image" width={60} height={60}></Image>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
