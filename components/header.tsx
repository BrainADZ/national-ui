/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/Products" },
  { label: "Gallery", href: "/Gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  {
    label: "E-Catalogue",
    href: "https://drive.google.com/file/d/1dtTbRPr7q2pZ2Ev4gpbBZmmmTDN8xb2A/view",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const textColor = scrolled ? "text-gray-900" : "text-white";
  const hoverColor = "hover:text-[#ee9d54]";

  const headerBg = scrolled
    ? "bg-white border-b border-gray-200"
    : "bg-transparent";

  const logo = useMemo(
    () => (
      <Link href="/" className="flex items-center gap-3 min-w-0">
        {/* FIX: prevent shrinking + responsive width */}
        <div className="relative h-12 w-46 xs:w-[155px] sm:h-14 sm:w-59 shrink-0">
          <Image
            src="/logo National.png"
            alt="National Engineers Logo"
            fill
            priority
            className="object-contain"
            sizes="180px"
          />
        </div>
      </Link>
    ),
    []
  );

  const MobileDrawer = (
    <div
      className={`lg:hidden fixed inset-0 z-2147483647 transition ${
        mobileOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        onClick={() => setMobileOpen(false)}
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          mobileOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute right-0 top-0 h-dvh w-[85%] max-w-sm bg-white shadow-2xl transition-transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
          <div className="relative h-16 w-37.5 shrink-0">
            <img
              src="/logo National.png"
              alt="National Engineers Logo"
            
              className="object-contain"
            />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-900"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-4 py-3">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-orange-50 text-[#ee9d54]"
                    : "text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-100 transition-all ${headerBg}`}>
        {/* FIX: give a bit more safe horizontal padding */}
        <div className="mx-auto flex max-w-425 items-center justify-between px-3 py-3 sm:px-4 lg:px-4">
          {logo}

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  className={`text-sm font-semibold transition-colors ${textColor} ${hoverColor} ${
                    active ? "text-[#ee9d54]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border ${
              scrolled ? "border-gray-200 text-gray-900" : "border-white/30 text-white"
            } bg-white/0 transition hover:bg-white/10 shrink-0`}
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {mounted && createPortal(MobileDrawer, document.body)}
    </>
  );
}
