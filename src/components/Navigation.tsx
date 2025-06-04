"use client";

import React from "react";
import { NAV_LINKS, BRAND_NAME } from "@/constants/navigation";
import type { NavLink } from "@/types/navigation";

const handleNavKeyDown = (
  event: React.KeyboardEvent<HTMLAnchorElement>,
  href: string
) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    window.location.href = href;
  }
};

const Navigation: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-10">
      <a
        href="#home"
        className="flex items-center gap-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        tabIndex={0}
        aria-label="Go to homepage"
        onKeyDown={(event) => handleNavKeyDown(event, "#home")}
      >
        {/* Placeholder for logo image */}
        <span
          className="inline-block w-8 h-8 bg-blue-600 rounded-full mr-2"
          aria-hidden="true"
        ></span>
        {BRAND_NAME}
      </a>
      <nav aria-label="Main navigation" className="flex gap-6">
        {NAV_LINKS.map((link: NavLink) => (
          <a
            key={link.href}
            href={link.href}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2"
            tabIndex={0}
            aria-label={link.label}
            onKeyDown={(event) => handleNavKeyDown(event, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
