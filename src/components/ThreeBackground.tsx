import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import * as THREE from 'three';

function GlowingCube({ position, color = '#00eaff', glowColor = '#00eaff' }) {
  return (
    <group position={position}>
      {/* Main Cube */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </mesh>
      {/* Glow Effect */}
      <mesh>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial color={glowColor} transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function ConnectingLine({ start, end, color = '#00eaff' }) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  return (
    <line>
      <bufferGeometry attach="geometry" setFromPoints={points} />
      <lineBasicMaterial attach="material" color={color} linewidth={2} />
    </line>
  );
}

const cubes = [
  { position: [-2, 0, 0] },
  { position: [2, 0, 0] },
  { position: [0, 0, 2.5] },
];

const lines = [
  { start: [-2, 0.5, 0], end: [0, 0.5, 2.5] },
  { start: [2, 0.5, 0], end: [0, 0.5, 2.5] },
  { start: [-2, 0.5, 0], end: [2, 0.5, 0] },
];

export default function ThreeBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%' }}>
      <Canvas shadows dpr={[1, 2]} gl={{ alpha: false }} style={{ background: 'linear-gradient(135deg, #0a1a3c 60%, #0e2a47 100%)' }}>
        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={50} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow />
        {/* Glowing Cubes */}
        {cubes.map((cube, i) => (
          <GlowingCube key={i} position={cube.position} />
        ))}
        {/* Connecting Lines */}
        {lines.map((line, i) => (
          <ConnectingLine key={i} {...line} />
        ))}
        {/* Optional: Subtle grid or floating particles for extra techy feel */}
        {/* <gridHelper args={[20, 20, '#00eaff', '#0a1a3c']} position={[0, -0.51, 0]} /> */}
        {/* Controls for dev only, remove for production */}
        {/* <OrbitControls enablePan={false} enableZoom={false} /> */}
      </Canvas>
    </div>
  );
} 