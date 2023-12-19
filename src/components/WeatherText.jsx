import { Center, Text3D } from "@react-three/drei";

export default function WeatherText({ location, weather, scale }) {
  return (
    <group scale={scale}>
      <group position={[-5, -1, 2]}>
        <Center>
          <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={1.8}
            height={0.5}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {location.toUpperCase()}
          </Text3D>
        </Center>
      </group>

      <group position={[6, 3, 4]}>
        <Center>
          <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
           Temperature: {weather.main.temp.toFixed(1)}°C
          </Text3D>
        </Center>
      </group>

      {/* <group position={[6, 3, 4]}>
        <Center>
          <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            Weather Condition: {weather.weather[0].main}
          </Text3D>
        </Center>
      </group> */}

      <group position={[6, 1, 4]}>
        <Center>
          <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            Humidity: {weather.main.humidity}%
          </Text3D>
        </Center>
      </group>

      <group position={[6, -1, 4]}>
        <Center>
          <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            Wind Speed: {weather.wind.speed.toFixed(1)}MPH
          </Text3D>
        </Center>
      </group>
    </group>
  );
}
