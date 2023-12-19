import { useRef } from "react";
import {
  useGLTF,
  MeshReflectorMaterial,
  useVideoTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Scene(props) {
  const videoTexture = useVideoTexture(`./videos/${props.weather}.mp4`);
  // const videoTexture = useVideoTexture("./videos/clear.mp4");

  const sphereRef = useRef();
  useFrame((state, delta) => {
    sphereRef.current.rotation.y += delta * 0.2;
  })

  return (
    <>
      <color args={["black"]} attach="background" />
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

      <mesh ref={sphereRef} position={[0, 2.5, -5]} scale={5}>
        {/* <planeGeometry args={[1.28, 0.72]} /> */}
        <sphereGeometry args={[1, 4, 2]} />
        <meshBasicMaterial map={videoTexture} toneMapped={false} />
      </mesh>
    </>
  );
}
