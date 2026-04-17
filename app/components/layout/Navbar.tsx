"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", dropdown: false },
  {
    label: "Semantik",
    dropdown: true,
    items: ["Detail SEMANTIK", "Pendaftaran"],
  },
  { label: "NIC", dropdown: true, items: [] },
  { label: "Seminar", dropdown: true, items: [] },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      className="absolute top-0 left-0 w-full z-50 flex items-center justify-between h-[75px] max-md:!px-4 max-md:!bg-[#0a0f24] max-md:!fixed"
      style={{ paddingLeft: "75px", paddingRight: "75px" }}
    >
      {/* Logo + Brand */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Logo */}
        <div className="w-12 h-12 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/LOGO.png" 
            alt="Logo" 
            className="w-full h-full object-contain" 
          />
        </div>
        <span
          className="text-white text-2xl font-normal whitespace-nowrap max-md:!text-xl"
          style={{ fontFamily: "'Zen Dots', sans-serif" }}
        >
          PEKAN IT
        </span>
      </div>

      {/* Hamburger Toggle (Mobile Only) */}
      <div className="hidden max-md:!flex shrink-0">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-indigo-300">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Nav Menu */}
      <ul className={`flex items-center shrink-0 max-md:!absolute max-md:!top-[75px] max-md:!left-0 max-md:!w-full max-md:!flex-col max-md:!items-start max-md:!bg-[#0a0f24] max-md:!px-6 max-md:!py-6 max-md:!gap-6 max-md:!border-b max-md:!border-indigo-500/20 max-md:!shadow-2xl transition-all duration-300 ${isMobileMenuOpen ? "max-md:!flex" : "max-md:!hidden"}`} style={{ gap: "30px" }}>
        {navItems.map((item) => (
          <li key={item.label} className="relative">
            {item.dropdown ? (
              <button
                onClick={() => toggleMenu(item.label)}
                className="flex items-center gap-1 text-white text-2xl font-normal hover:text-indigo-300 transition-colors cursor-pointer whitespace-nowrap max-md:!text-xl"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                {item.label}
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    openMenu === item.label ? "rotate-180" : ""
                  }`}
                />
              </button>
            ) : (
              <Link
                href="/"
                className="text-white text-2xl font-normal hover:text-indigo-300 transition-colors whitespace-nowrap max-md:!text-xl"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                {item.label}
              </Link>
            )}

            {/* Dropdown */}
            {item.dropdown && openMenu === item.label && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm border border-indigo-400/30 rounded-xl py-2 min-w-[180px] shadow-lg max-md:!static max-md:!translate-x-0 max-md:!mt-2 max-md:!bg-transparent max-md:!border-none max-md:!shadow-none max-md:!pl-4">
                {item.items && item.items.length > 0 ? (
                  item.items.map((subItem) => (
                    <Link
                      key={subItem}
                      href={
                        subItem === "Pendaftaran"
                          ? "/pendaftaran"
                          : subItem === "Detail SEMANTIK"
                          ? "/detail-semantik"
                          : "#"
                      }
                      className="block px-5 py-2 text-white text-2xl font-normal hover:text-indigo-300 transition-colors whitespace-nowrap max-md:!text-lg max-md:!px-0 max-md:!py-1"
                      style={{ fontFamily: "'Exo 2', sans-serif" }}
                    >
                      {subItem}
                    </Link>
                  ))
                ) : (
                  <p
                    className="px-5 py-2 text-white/50 text-sm italic"
                    style={{ fontFamily: "'Exo 2', sans-serif" }}
                  >
                    Dropdown items...
                  </p>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}