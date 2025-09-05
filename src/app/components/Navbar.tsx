"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile nav
  const [isDownloadsOpen, setIsDownloadsOpen] = useState(false); // dropdown (both)

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between py-4 px-6 md:px-12 lg:px-24 border-b border-gray-700 bg-[#01315A] z-50">
      {/* Logo + School Name + Tagline */}
      <div className="flex items-center gap-3">
        <Link href="/" className="transition duration-300 hover:scale-105">
          <Image src="/logo.jpg" alt="Logo" width={45} height={45} priority />
        </Link>
        <div className="flex flex-col leading-tight">
          <span className="text-white font-bold text-sm md:text-[20px]">
            Calcutta Talent Search School
          </span>
          <span className="text-gray-300 font-semibold text-[8px] md:text-[10px]">
            Government of West Bengal Registered Society
          </span>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 lg:gap-8 text-sm md:text-base items-center">
        <li>
          <Link
            href="/home"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </Link>
        </li>

        {/* Downloads dropdown (desktop) */}
        <li
          className="relative"
          onMouseEnter={() => setIsDownloadsOpen(true)}
          onMouseLeave={() => setIsDownloadsOpen(false)}
        >
          <button
            type="button"
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            aria-haspopup="menu"
            aria-expanded={isDownloadsOpen}
          >
            Downloads
            <span aria-hidden>▾</span>
          </button>

          <div
            className={`${
              isDownloadsOpen ? "block" : "hidden"
            } absolute top-full left-0 z-[60] w-48 rounded-md bg-[#001C32] shadow-lg ring-1 ring-white/10`}
          >
            <Link
              href="/downloads/examForm"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              Exam Form
            </Link>
            <Link
              href="/downloads/affiliationForm"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              Affiliation Form
            </Link>
          </div>
        </li>
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-gray-300 hover:text-white"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full flex flex-col bg-[#01315A] border-t border-gray-700 md:hidden text-sm z-[60] shadow-lg">
          {/* Home */}
          <li className="w-full">
            <Link
              href="/home"
              className="block w-full px-6 py-3 text-gray-300 hover:text-white hover:bg-[#001C32] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>

          {/* About */}
          <li className="w-full">
            <Link
              href="/about"
              className="block w-full px-6 py-3 text-gray-300 hover:text-white hover:bg-[#001C32] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>

          {/* Downloads dropdown (mobile) */}
          <li className="w-full">
            <button
              onClick={() => setIsDownloadsOpen((v) => !v)}
              className="flex justify-between items-center w-full px-6 py-3 text-gray-300 hover:text-white hover:bg-[#001C32] transition-colors font-medium"
              aria-expanded={isDownloadsOpen}
              aria-controls="downloads-mobile"
            >
              <span>Downloads</span>
              <span aria-hidden>{isDownloadsOpen ? "▴" : "▾"}</span>
            </button>

            {isDownloadsOpen && (
              <div
                id="downloads-mobile"
                className="flex flex-col bg-[#001C32] border-t border-gray-600"
              >
                <Link
                  href="/downloads/examForm"
                  className="block px-8 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Exam Form
                </Link>
                <Link
                  href="/downloads/affiliationForm"
                  className="block px-8 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Affiliation Form
                </Link>
              </div>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
