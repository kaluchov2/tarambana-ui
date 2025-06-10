"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SnowParticles: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleNum = 3000; // Reduced for better mobile performance
  const maxRange = 20;
  const minRange = maxRange / 2;

  // Create snow texture
  const snowTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const size = 32; // Smaller texture for better performance

    if (!ctx) return null;

    canvas.width = size;
    canvas.height = size;
    const radius = size / 2;

    // Create radial gradient for snow flake
    const gradient = ctx.createRadialGradient(
      radius,
      radius,
      0,
      radius,
      radius,
      radius
    );
    gradient.addColorStop(0, "rgba(255,255,255,1.0)");
    gradient.addColorStop(0.5, "rgba(255,255,255,0.5)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Create particles with positions and velocities
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(particleNum * 3);
    const velocities: THREE.Vector3[] = [];

    for (let i = 0; i < particleNum; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * maxRange; // x
      positions[i * 3 + 1] = Math.random() * maxRange - minRange; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * maxRange; // z

      // Velocity
      const vx = (Math.random() - 0.5) * 0.002;
      const vy = -(Math.random() * 0.008 + 0.004); // Slower falling down
      const vz = (Math.random() - 0.5) * 0.002;
      velocities.push(new THREE.Vector3(vx, vy, vz));
    }

    return { positions, velocities };
  }, [maxRange, minRange, particleNum]);

  // Animation
  useFrame((state) => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position
      .array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < particleNum; i++) {
      const velocity = velocities[i];
      const i3 = i * 3;

      // Add some sinusoidal movement for realistic snow drift
      const windX = Math.sin(time * 0.5 + positions[i3] * 0.01) * 0.001;
      const windZ = Math.cos(time * 0.3 + positions[i3 + 2] * 0.01) * 0.001;

      // Update positions
      positions[i3] += velocity.x + windX; // x
      positions[i3 + 1] += velocity.y; // y
      positions[i3 + 2] += velocity.z + windZ; // z

      // Reset particle if it falls too low
      if (positions[i3 + 1] < -minRange) {
        positions[i3 + 1] = minRange;
        positions[i3] = (Math.random() - 0.5) * maxRange;
        positions[i3 + 2] = (Math.random() - 0.5) * maxRange;
      }

      // Keep particles within bounds
      if (Math.abs(positions[i3]) > maxRange) {
        positions[i3] = (Math.random() - 0.5) * maxRange;
      }
      if (Math.abs(positions[i3 + 2]) > maxRange) {
        positions[i3 + 2] = (Math.random() - 0.5) * maxRange;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  if (!snowTexture) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particleNum}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        map={snowTexture}
        transparent={true}
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors={false}
      />
    </points>
  );
};

export default SnowParticles;
