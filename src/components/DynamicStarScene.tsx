"use client";

import dynamic from "next/dynamic";
import LoadingAnimation from "./LoadingAnimation";

// Dynamically import the Three.js scene to prevent blocking initial page load
const ThreeJsStarScene = dynamic(() => import("./ThreeJsStarScene"), {
  ssr: false, // Disable server-side rendering for Three.js
  loading: () => <LoadingAnimation />,
});

const DynamicStarScene: React.FC = () => {
  return <ThreeJsStarScene />;
};

export default DynamicStarScene;
