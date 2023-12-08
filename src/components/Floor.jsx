export default function Floor() {
  return (
    <mesh receiveShadow position-y={-1.25}>
      <boxGeometry args={[10, 0.5, 10]} />
      <meshStandardMaterial color="snow" />
    </mesh>
  );
}
