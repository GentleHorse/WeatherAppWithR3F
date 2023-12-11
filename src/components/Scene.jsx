import { useState } from "react";
import { MeshReflectorMaterial, useVideoTexture } from "@react-three/drei";

export default function Scene() {
  const videoTexture = useVideoTexture("./videos/rain.mp4");

  return (
    <>
      <color args={["black"]} attach="background" />
      <mesh receiveShadow position-y={-3} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[10, 10]} />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0.5}
          mirror={0.85}
          color="#4b53ae"
        />
      </mesh>

      <mesh position={[0, 0, 0]} scale={2}>
        <sphereGeometry />
        <meshBasicMaterial map={videoTexture} toneMapped={false} />
      </mesh>
    </>
  );
}
