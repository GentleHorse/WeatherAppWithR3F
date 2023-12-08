import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Floor from "./components/Floor.jsx";
import Clear from "./components/models/Clear.jsx";
import Cloud from "./components/models/Cloud.jsx";
import Drizzle from "./components/models/Drizzle.jsx";
import Mist from "./components/models/Mist.jsx";
import Rain from "./components/models/Rain.jsx";
import Snow from "./components/models/Snow.jsx";
import Thunderstorm from "./components/models/Thunderstorm.jsx";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Floor />

        <Clear scale={0.2} position={[-9, 0, 1.5]} />
        <Cloud scale={0.2} position={[-6, 0, 1.5]} />
        <Drizzle scale={0.2} position={[-3, 0, 1.5]} />
        <Mist scale={0.2} position={[0, 0, 1.5]} />
        <Rain scale={0.2} position={[3, 0, 1.5]} />
        <Snow scale={0.2} position={[6, 0, 1.5]} />
        <Thunderstorm scale={0.2} position={[9, 0, 1.5]} />
    </>
  );
}
