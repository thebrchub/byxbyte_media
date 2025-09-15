"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Service", path: "/Service" },
  { name: "Works", path: "/Work" },
  { name: "Contact", path: "/Contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 px-6 py-4 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* -------- Logo -------- */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/works/logo.svg" // ✅ replace with your logo
            alt="Byxbyte Media Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-xl md:text-2xl font-bold text-white">
            Byxbyte Media
          </span>
        </Link>

        {/* -------- Desktop Nav -------- */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10 text-gray-400">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`hover:text-white duration-300 ${
                    pathname === item.path
                      ? "text-orange-400 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* -------- Mobile Hamburger -------- */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* -------- Mobile Menu Animated -------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-black/90 backdrop-blur-lg border-t border-gray-800 rounded-xl shadow-lg"
          >
            <ul className="flex flex-col gap-6 px-6 py-6 text-gray-300">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg hover:text-white duration-300 ${
                      pathname === item.path
                        ? "text-orange-400 font-semibold"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
