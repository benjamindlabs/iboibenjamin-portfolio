
import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const RotatingGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Load Earth texture
  const earthTexture = useLoader(TextureLoader, 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg');

  useFrame((state) => {
    if (meshRef.current) {
      // Continuous rotation
      meshRef.current.rotation.y += 0.005;
      // Slight wobble effect
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        map={earthTexture}
        roughness={0.7}
        metalness={0.1}
      />
    </mesh>
  );
};

const Globe3D = () => {
  return (
    <div className="w-80 h-80 sm:w-96 sm:h-96 relative">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        <Stars
          radius={300}
          depth={60}
          count={1000}
          factor={7}
          saturation={0}
          fade={true}
        />
        <RotatingGlobe />
      </Canvas>
      
      {/* Glow effect overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-transparent to-emerald-500/20 blur-xl scale-110 pointer-events-none"></div>
    </div>
  );
};

export default Globe3D;
