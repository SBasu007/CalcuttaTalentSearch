"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isDownloadsOpen, setIsDownloadsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/home") {
      return (
        pathname === "/" ||
        pathname === "/home" ||
        pathname.startsWith("/home/")
      );
    }

    return pathname === href || pathname.startsWith(href + "/");
  };

  const navItemClass = (active: boolean) => {
    return `
      font-[family-name:var(--font-poppins)]
      px-6 py-2.5
      rounded-full
      font-medium
      tracking-wide
      text-sm
      border-2
      transition-all
      duration-300
      ease-in-out
      ${
        active
          ? "bg-white text-[#01315A] border-white shadow-lg"
          : "text-white border-white/40 hover:border-white hover:scale-105 hover:shadow-lg bg-white/5 backdrop-blur-sm"
      }
    `;
  };

  return (
    <>
      <nav
  className="
    relative
    isolate
    z-[9999]
    w-full
    bg-white
    md:bg-gradient-to-b
    md:from-[#01315A]
    md:via-[#003B68]
    md:to-[#002C4A]
    shadow-xl
  "
>
        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300 md:hidden ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 left-0 h-screen w-[85%] max-w-[340px]
          bg-gradient-to-b from-[#01315A] via-[#003B68] to-[#002C4A]
          z-[9999] shadow-2xl
          transform transition-transform duration-300 ease-in-out
          md:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <h2 className="text-white text-xl font-semibold">Menu</h2>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-yellow-300 transition"
            >
              <X size={28} />
            </button>
          </div>

          {/* Drawer Logo */}
          <div className="flex flex-col items-center py-8 px-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-white text-center font-bold text-xl mt-4 leading-tight">
              Calcutta Talent Search School
            </h3>

            <p className="text-yellow-100 text-xs text-center mt-2">
              Government of West Bengal
              <br />
              Registered Society
            </p>
          </div>

          {/* Mobile Links */}
          <div className="px-4 space-y-3">
            <Link
              href="/home"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all ${
                isActive("/home")
                  ? "bg-white text-[#01315A]"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              Home
              <span>›</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all ${
                isActive("/about")
                  ? "bg-white text-[#01315A]"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              About
              <span>›</span>
            </Link>

            <Link
              href="/gallery"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all ${
                isActive("/gallery")
                  ? "bg-white text-[#01315A]"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              Gallery
              <span>›</span>
            </Link>
          </div>

          {/* Downloads */}
          <div className="mx-4 mt-8 border-t border-white/10 pt-6">
            <h4 className="text-yellow-300 text-xs uppercase tracking-[0.2em] mb-4">
              Downloads
            </h4>

            <div className="space-y-2">
              <Link
                href="/downloads/examForm"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg bg-white/5 text-white hover:bg-white/10 transition"
              >
                Exam Form
              </Link>

              <Link
                href="/downloads/affiliationForm"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg bg-white/5 text-white hover:bg-white/10 transition"
              >
                Affiliation Form
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="relative px-4 md:px-8 lg:px-12 pt-12 pb-10 md:py-5 lg:py-6 border-b border-white/10 flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-6 lg:gap-8">
          {/* Mobile Menu Button */}
          <button
            className="absolute left-4 top-4 md:hidden text-[#01315A] hover:text-[#0156a6] p-2 z-10"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 group transition-all duration-300 flex items-center justify-center"
          >
            <div className="w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 p-[3px] shadow-xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="CTSS Logo"
                  width={150}
                  height={150}      
                  priority
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>

          {/* Title */}
          <div className="flex-1 flex flex-col justify-center w-full">
            <div className="flex flex-col items-center">
              <h1
                className="
                  font-[family-name:var(--font-playfair)]
                  text-[#01315A] md:text-white
                  font-bold
                  tracking-wide
                  text-3xl
                  sm:text-4xl
                  md:text-3xl
                  lg:text-5xl
                  text-center
                  drop-shadow-lg
                "
              >
                Calcutta Talent Search School
              </h1>

              <div className="w-24 md:w-28 h-[2px] bg-[#01315A] md:bg-yellow-400 rounded-full mt-2" />

              <p
                className="
                  font-[family-name:var(--font-poppins)]
                  text-gray-600 md:text-yellow-100
                  uppercase
                  tracking-[0.18em]
                  text-xs
                  md:text-xs
                  lg:text-sm
                  mt-2
                  text-center
                "
              >
                Government of West Bengal Registered Society
              </p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center gap-3 lg:gap-5 mt-5">
              <Link
                href="/home"
                className={navItemClass(isActive("/home"))}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={navItemClass(isActive("/about"))}
              >
                About
              </Link>

              <Link
                href="/gallery"
                className={navItemClass(isActive("/gallery"))}
              >
                Gallery
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setIsDownloadsOpen(true)}
                onMouseLeave={() => setIsDownloadsOpen(false)}
              >
                <button
                  type="button"
                  className={`${navItemClass(
                    isActive("/downloads")
                  )} flex items-center gap-2`}
                >
                  Downloads
                  <span
                    className={`transition-transform duration-300 ${
                      isDownloadsOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {isDownloadsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 rounded-2xl bg-[#01315A]/95 backdrop-blur-xl shadow-2xl ring-1 ring-white/20 overflow-hidden z-[99999]">
                    <Link
                      href="/downloads/examForm"
                      className="block px-6 py-4 text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium border-b border-white/10"
                    >
                      Exam Form
                    </Link>

                    <Link
                      href="/downloads/affiliationForm"
                      className="block px-6 py-4 text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
                    >
                      Affiliation Form
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;