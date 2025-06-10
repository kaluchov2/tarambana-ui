"use client";

import React from "react";

const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 sm:h-80 w-full">
      <div className="mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-2">
          Tarambana
        </h2>
      </div>

      {/* Animated loading dots */}
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
        <div
          className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 animate-pulse">
        Loading experience...
      </p>
    </div>
  );
};

export default LoadingAnimation;
