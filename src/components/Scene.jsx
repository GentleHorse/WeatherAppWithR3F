import { Suspense, useRef } from "react";
import { MeshReflectorMaterial, useVideoTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Scene(props) {
  const videoTexture = useVideoTexture(`./videos/${props.weather}.mp4`);

  return (
    <>
      {/* FLOOR */}
      <RigidBody type="fixed" restitution={0.5}>
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
      </RigidBody>

      {/* VIDEO PROJECTION GEOMETRY */}
      <Suspense>
        <RigidBody type="fixed">
          <mesh position={[0, 0.5, -5]} scale={5}>
            <boxGeometry args={[2.5, 1, 0.15]} />
            <meshBasicMaterial map={videoTexture} toneMapped={false} />
          </mesh>
        </RigidBody>
      </Suspense>
    </>
  );
}
