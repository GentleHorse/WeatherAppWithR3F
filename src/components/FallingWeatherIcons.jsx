import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { InstancedRigidBodies } from "@react-three/rapier";
import { Geometry, Base, Addition } from "@react-three/csg";

export default function FallingWeatherIcons() {
  const clear = useGLTF("./models/weather-icons/clear-small.glb");
  const clouds = useGLTF("./models/weather-icons/clouds-small.glb");
  const drizzle = useGLTF("./models/weather-icons/drizzle-small.glb");
  const mist = useGLTF("./models/weather-icons/mist-small.glb");
  const rain = useGLTF("./models/weather-icons/rain-small.glb");
  const snow = useGLTF("./models/weather-icons/snow-small.glb");
  const thunderstorm = useGLTF("./models/weather-icons/thunderstorm-small.glb");

  console.log(clear.nodes);

  /**
   * Object instances' count & matrices
   */
  const objectsCount = 300;
  const instances = useMemo(() => {
    const instances = [];

    for (let i = 0; i < objectsCount; i++) {
      instances.push({
        key: "instance_" + i,
        position: [
          (Math.random() - 0.5) * 8,
          4 + i * 0.2,
          (Math.random() - 0.5) * 8,
        ],
        rotation: [Math.random(), Math.random(), Math.random()],
      });
    }

    return instances;
  }, []);

  return (
    <>
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
