"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

  const toggleMenu = (label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      className="absolute top-0 left-0 w-full z-50 flex items-center justify-between h-[75px]"
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
          className="text-white text-2xl font-normal whitespace-nowrap"
          style={{ fontFamily: "'Zen Dots', sans-serif" }}
        >
          PEKAN IT
        </span>
      </div>

      {/* Nav Menu */}
      <ul className="flex items-center shrink-0" style={{ gap: "30px" }}>
        {navItems.map((item) => (
          <li key={item.label} className="relative">
            {item.dropdown ? (
              <button
                onClick={() => toggleMenu(item.label)}
                className="flex items-center gap-1 text-white text-2xl font-normal hover:text-indigo-300 transition-colors cursor-pointer whitespace-nowrap"
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
              <a
                href="#"
                className="text-white text-2xl font-normal hover:text-indigo-300 transition-colors whitespace-nowrap"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                {item.label}
              </a>
            )}

            {/* Dropdown */}
            {item.dropdown && openMenu === item.label && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm border border-indigo-400/30 rounded-xl py-2 min-w-[180px] shadow-lg">
                {item.items && item.items.length > 0 ? (
                  item.items.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-5 py-2 text-white text-2xl font-normal hover:text-indigo-300 transition-colors whitespace-nowrap"
                      style={{ fontFamily: "'Exo 2', sans-serif" }}
                    >
                      {subItem}
                    </a>
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