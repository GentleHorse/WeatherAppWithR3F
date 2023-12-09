import { useGLTF, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Floor from "./components/Floor.jsx";
import WeatherIcons from "./components/models/WeatherIcons.jsx";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Floor />

      <WeatherIcons />
    </>
  );
}
