import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const ref = useRef();
  const positions = useMemo(
    () => random.inSphere(new Float32Array(51000), { radius: 2.5 }),
    []
  );

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 16;
    ref.current.rotation.y -= delta / 22;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f5f5ff"
          size={0.004}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ContactStars = () => (
  <div className="pointer-events-none absolute inset-0 z-0">
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 1.5] }}
      dpr={[1, 1.6]}
      frameloop="always"
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      performance={{ min: 0.6 }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default ContactStars;
