"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import LoadingAnimation from "../LoadingAnimation";

// Dynamically import StarLogo for client-side rendering
const StarLogo = dynamic(() => import("./StarLogo"), {
  ssr: false,
  loading: () => <LoadingAnimation />,
});

const ThreeJsStarScene: React.FC = () => {
  return (
    <div className="w-full h-64 sm:h-80 flex flex-col items-center justify-center my-8">
      {/* Title above the Three.js scene */}
      <div className="mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-300 text-center">
          Tarambana
        </h2>
      </div>

      {/* StarLogo Canvas */}
      <div className="w-full max-w-md h-64 sm:h-80 rounded-lg overflow-hidden  shadow-lg flex items-center justify-center">
        <Suspense fallback={<LoadingAnimation />}>
          <StarLogo />
        </Suspense>
      </div>
    </div>
  );
};

export default ThreeJsStarScene;
