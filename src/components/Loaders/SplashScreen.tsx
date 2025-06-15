"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CldImage } from "next-cloudinary";

export function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [matrixText, setMatrixText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%";

    const matrixInterval = setInterval(() => {
      const randomText = Array(8)
        .fill(0)
        .map(() =>
          characters.charAt(Math.floor(Math.random() * characters.length))
        )
        .join("");
      setMatrixText(randomText);
    }, 50);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(progressInterval);
          clearInterval(matrixInterval);
          setMatrixText("L0V3 YOU ALL");
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(progressInterval);
      clearInterval(matrixInterval);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-green-800 transition-all duration-500",
        isComplete
          ? "opacity-0 pointer-events-none translate-y-[-100%]"
          : "opacity-100"
      )}
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div className="relative w-48 h-48 mb-16">
        <CldImage
          width="560"
          height="600"
          src="LOGO-FULL"
          sizes="100vw"
          alt="TARAMBANA LOGO"
        />
      </div>

      {/* Matrix-style loading text */}
      <div className="font-mono text-white mb-4 h-6">{`ACCESSING: ${matrixText}`}</div>

      {/* Progress bar container */}
      <div className="w-64 h-1 bg-dark-400 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress percentage */}
      <div className="mt-2 font-mono text-sm text-white">{`${progress}%`}</div>
    </div>
  );
}
