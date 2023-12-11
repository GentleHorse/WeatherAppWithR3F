import { useEffect } from "react";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Scene from "./components/Scene.jsx";

export default function Experience(props) {
  let weatherCondition;
  switch (props.weather.weather[0].main) {
    case "Clear":
      weatherCondition = "clear";
      break;

    case "Clouds":
      weatherCondition = "clouds";
      break;

    case "Rain":
      weatherCondition = "rain";
      break;

    case "Drizzle":
      weatherCondition = "drizzle";
      break;

    case "Thunderstorm":
      weatherCondition = "thunderstorm";
      break;

    case "Snow":
      weatherCondition = "snow";
      break;

    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      weatherCondition = "mist";
      break;
  }

  const loadedIcon = useGLTF(
    `./models/weather-icons/${weatherCondition}-small.glb`
  );

  const karina = useGLTF("./models/Marina-1276/Marina-1276.glb");


  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <Environment preset="city" />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Scene weather={weatherCondition} />

      <primitive object={loadedIcon.scene} position={[2, -1.5, 2]} />
      <primitive
        object={karina.scene}
        scale={0.7}
        position={[-2.5, -2.5, 4]}
        rotation-y={Math.PI * 0.7}
      />
    </>
  );
}
