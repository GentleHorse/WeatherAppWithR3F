import { MeshReflectorMaterial, useVideoTexture } from "@react-three/drei";

export default function Scene(props) {
  const videoTexture = useVideoTexture(`./videos/${props.weather}.mp4`);

  return (
    <>
      <color args={["black"]} attach="background" />
      <mesh receiveShadow position-y={-2.5} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[20, 20]} />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0.5}
          mirror={0.85}
          color="#51568d"
        />
      </mesh>

      <mesh position={[0, 0, 0]} scale={2.5}>
        <sphereGeometry />
        <meshBasicMaterial map={videoTexture} toneMapped={false} />
      </mesh>

      <mesh position={[-2.5, 0, 0]} scale={5}>
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial color="silver" roughness={0.1} metalness={0.7}/>
      </mesh>
    </>
  );
}
