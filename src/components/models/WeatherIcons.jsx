import { useGLTF } from "@react-three/drei";

const WeatherIcons = () => {
  const clear = useGLTF("./models/weather-icons/clear.glb");
  const cloud = useGLTF("./models/weather-icons/cloud.glb");
  const drizzle = useGLTF("./models/weather-icons/drizzle.glb");
  const mist = useGLTF("./models/weather-icons/mist.glb");
  const rain = useGLTF("./models/weather-icons/rain.glb");
  const snow = useGLTF("./models/weather-icons/snow.glb");
  const thunderstorm = useGLTF("./models/weather-icons/thunderstorm.glb");

  return (
    <group position={[0, 3, -3]}>
      <primitive object={clear.scene} scale={0.2} position-x={-6} />
      <primitive object={cloud.scene} scale={0.2} position-x={-4} />
      <primitive object={drizzle.scene} scale={0.2} position-x={-2} />
      <primitive object={mist.scene} scale={0.2} position-x={0} />
      <primitive object={rain.scene} scale={0.2} position-x={2} />
      <primitive object={snow.scene} scale={0.2} position-x={4} />
      <primitive object={thunderstorm.scene} scale={0.2} position-x={6} />
    </group>
  );
};

export default WeatherIcons;
