import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { RigidBody, Physics } from "@react-three/rapier";
import { Clear } from "./components/models/Clear";
import { Cloud } from "./components/models/Cloud";
import { Drizzle } from "./components/models/Drizzle";
import { Mist } from "./components/models/Mist";
import { Rain } from "./components/models/Rain";
import { Snow } from "./components/models/Snow";
import { Thunderstorm } from "./components/models/Thunderstorm";
import { Floor } from "./components/Floor";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Physics debug gravity={[0, -4, 0]}>
        <Floor />

        <RigidBody>
          <mesh castShadow position={[-2, 2, 0]}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        <RigidBody>
          <mesh castShadow position={[2, 2, 0]}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
        </RigidBody>
      </Physics>

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
