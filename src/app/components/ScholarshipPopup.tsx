"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BellRing, Sparkles, X } from "lucide-react";

const DISMISS_KEY = "ctss-scholarship-popup-dismissed";

export default function ScholarshipPopup() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/scholarship") {
      return;
    }

    if (window.sessionStorage.getItem(DISMISS_KEY) === "true") {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 700);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  const closePopup = () => {
    window.sessionStorage.setItem(DISMISS_KEY, "true");
    setIsOpen(false);
  };

  const goToScholarship = () => {
    window.sessionStorage.setItem(DISMISS_KEY, "true");
    setIsOpen(false);
    router.push("/scholarship");
  };

  if (pathname === "/scholarship") {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10020] flex items-start justify-center bg-slate-950/65 px-4 pt-4 sm:pt-6 backdrop-blur-md"
          onClick={closePopup}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_24px_90px_rgba(1,49,90,0.4)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(1,49,90,0.22),_transparent_30%)]" />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#01315A] via-[#0b5fa6] to-[#f6c453]" />

            <button
              type="button"
              onClick={closePopup}
              className="absolute right-4 top-4 z-10 rounded-full border border-slate-200 bg-white/90 p-2 text-slate-500 shadow-sm transition hover:scale-105 hover:text-[#01315A]"
              aria-label="Close scholarship popup"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative p-5 sm:p-6">
              <div className="flex flex-col gap-4">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#01315A]/10 bg-[#01315A]/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#01315A]">
                  <Sparkles className="h-4 w-4" />
                  Result Announcement
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="rounded-xl bg-[#01315A]/5 p-2 text-[#01315A]">
                    <BellRing className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-[#01315A] sm:text-[2rem]">
                      Scholarship result announcement
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-[15px]">
                      The scholarship result update is now available. Open the scholarship page to continue.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={goToScholarship}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#01315A] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#01315A]/20 transition hover:-translate-y-0.5 hover:bg-[#0156a6]"
                  >
                    View Result Page
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* <Link
                    href="/scholarship"
                    onClick={closePopup}
                    className="inline-flex items-center justify-center rounded-full border border-[#01315A]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#01315A] transition hover:border-[#01315A]/30 hover:bg-[#01315A]/5"
                  >
                    Open Page
                  </Link> */}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}