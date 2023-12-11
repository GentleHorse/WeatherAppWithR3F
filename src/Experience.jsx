import { useGLTF, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Scene from "./components/Scene.jsx";

export default function Experience() {
  const clear = useGLTF("./models/weather-icons/clear-small.glb");

  let loadedIcon = clear;
  

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Scene />

      <primitive object={loadedIcon.scene} position-y={5} />
    </>
  );
}
