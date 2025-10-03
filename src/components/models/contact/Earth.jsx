import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense, useMemo } from "react";
import * as THREE from "three";

const EarthModel = () => {
  const gltf = useGLTF("/planet/scene.gltf");

  const clonedScene = useMemo(() => {
    if (!gltf.scene) return null;
    const clone = gltf.scene.clone(true);
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material = child.material.clone();
        child.material.side = THREE.DoubleSide;
      }
    });
    return clone;
  }, [gltf.scene]);

  if (!clonedScene) return null;

  return <primitive object={clonedScene} />;
};

const EarthLights = () => {
  return (
    <>
      <ambientLight intensity={0.3} color="#0d1b2a" />
      <directionalLight
        position={[10, 5, 5]}
        intensity={2}
        color="#ffe29f"
        castShadow
      />
      <hemisphereLight
        skyColor="#a9d6e5"
        groundColor="#14213d"
        intensity={0.5}
      />
    </>
  );
};

const Earth = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [-5, 4, 8], fov: 45 }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <EarthLights />

        <OrbitControls
          autoRotate
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />

        <group scale={4.16} rotation={[0, Math.PI / 4, 0]}>
          <EarthModel />
        </group>

        <EffectComposer>
          <Bloom intensity={1.2} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
        </EffectComposer>

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Earth;
