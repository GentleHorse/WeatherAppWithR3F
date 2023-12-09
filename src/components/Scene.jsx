export default function Scene() {
  return (
    <>
      <mesh receiveShadow position-y={-1.5}>
        <boxGeometry args={[10, 0.5, 10]} />
        <meshStandardMaterial color="snow" />
      </mesh>

      <mesh position={[0, 3.5, -5]} scale={10}>
        <planeGeometry />
      </mesh>
    </>
  );
}
