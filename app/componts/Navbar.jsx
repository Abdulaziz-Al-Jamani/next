// components/Navbar.jsx
"use client"; // إذا تستخدم App Router

import Link from "next/link";
import { useState } from "react";
import "../styles/style.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-amber-200 shadow-md filter sticky top-0 right-0 left-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Menu */}

          <div className="flex justify-end gap-4 h-16">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <Link href="/" className="hover:text-amber-900">
                الرئيسية
              </Link>
              <Link href="/about" className="hover:text-amber-900">
                من نحن
              </Link>
              <Link href="/projects" className="hover:text-amber-900">
                المشاريع
              </Link>
              <Link href="/contact" className="hover:text-amber-900">
                تواصل
              </Link>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-yellow-500">
                <img src="/imgs/logo.png" alt="Logo" width={80} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setOpen(!open)}
                className="focus:outline-none"
              >
                {open ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>
        {open && (
          <div className="md:hidden  px-4 pt-2 pb-3 space-y-1 filter flex-col flex items-center me-dir">
            <Link href="/" className="block hover:text-yellow-400">
              الرئيسية
            </Link>
            <Link href="/about" className="block hover:text-yellow-400">
              من نحن
            </Link>
            <Link href="/projects" className="block hover:text-yellow-400">
              المشاريع
            </Link>
            <Link href="/contact" className="block hover:text-yellow-400">
              تواصل
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
