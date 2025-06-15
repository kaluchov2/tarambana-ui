"use client";

import React, { useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import SnowParticles from "./SnowParticles";

function StarMesh() {
  const group = useRef<THREE.Group>(null);

  // Define the 8 star points with exact proportions
  const starPoints = useMemo(
    () => [
      //Top Spike
      { x: 0, y: 3 },
      //Top Right Spike
      { x: 0.8, y: 0.8 },
      // Right Spike
      { x: 1.5, y: 0 },
      //Bottom Left Spike
      { x: 0.8, y: -0.8 },
      //Bottom Spike
      { x: 0, y: -1.3 },
      //Bottom Left Spike
      { x: -0.8, y: -0.8 },
      //Left Spike
      { x: -1.5, y: 0 },
      //Bottom Right Spike
      { x: -0.8, y: 0.8 },
    ],
    []
  );

  // Create the star spikes as mesh objects
  const spikes = useMemo(() => {
    return starPoints.map((point, idx) => {
      const angle = Math.atan2(point.y, point.x);
      const spikeWidth = 0.099;
      const perpX = -Math.sin(angle) * spikeWidth;
      const perpY = Math.cos(angle) * spikeWidth;
      // Create triangle shape
      const shape = new THREE.Shape();
      shape.moveTo(perpX, perpY);
      shape.lineTo(-perpX, -perpY);
      shape.lineTo(point.x, point.y);
      shape.lineTo(perpX, perpY);
      // Extrude settings
      const extrudeSettings = { depth: 0.1, bevelEnabled: false };
      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      return (
        <mesh key={idx} geometry={geometry} position={[0, 0, -0.1]}>
          <meshLambertMaterial color={0xffffff} side={THREE.DoubleSide} />
        </mesh>
      );
    });
  }, [starPoints]);

  return (
    <group ref={group} position={[0, -0.5, 0]}>
      {spikes}
    </group>
  );
}

const StarLogo: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 2]}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      {/* Star mesh */}
      <StarMesh />
      {/* Snow particles */}
      <SnowParticles />
      {/* Controls */}
      <OrbitControls enableDamping enablePan={false} />
    </Canvas>
  );
};

export default StarLogo;
