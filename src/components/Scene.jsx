import { Suspense, useRef } from "react";
import {
  MeshReflectorMaterial,
  useVideoTexture,
} from "@react-three/drei";

export default function Scene(props) {
  const videoTexture = useVideoTexture(`./videos/${props.weather}.mp4`);

  return (
    <>
      {/* FLOOR */}
      <mesh receiveShadow position-y={-2.5} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[25, 25]} />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0.5}
          mirror={0.85}
          color="#51568d"
        />
      </mesh>

      {/* VIDEO PROJECTION GEOMETRY */}
      <Suspense>
        <mesh position={[0, 0.5, -5]} scale={5}>
          <boxGeometry args={[2.5, 1, 0.15]} />
          <meshBasicMaterial map={videoTexture} toneMapped={false} />
        </mesh>
      </Suspense>
    </>
  );
}
