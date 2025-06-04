"use client";

import React from "react";

interface CallToActionButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const handleKeyDown = (
  event: React.KeyboardEvent<HTMLAnchorElement>,
  href: string
) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    window.location.href = href;
  }
};

const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`inline-block bg-blue-600 text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-lg ${className}`}
      tabIndex={0}
      aria-label="Shop now"
      onKeyDown={(event) => handleKeyDown(event, href)}
    >
      {children}
    </a>
  );
};

export default CallToActionButton;
