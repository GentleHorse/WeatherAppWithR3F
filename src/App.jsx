import axios from "axios";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import Backdrop from "./components/Backdrop.jsx";

import classes from "./App.module.css";

export default function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  function closewindowHandler() {
    setIsWindowOpen(true);
  }

  const apiKey = "7a11ff201910162a879e7aa32d259914";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  const getWeatherData = () => {
    axios.get(apiUrl).then((response) => {
      setWeatherData(response.data);
    });
    closewindowHandler();
  };

  if (isWindowOpen == false) {
    return (
      <>
        <Backdrop />
        <div className={classes.searchBox}>
          <div className={classes.control}>
            <p>WEATHER CHECKER</p>
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Type a city name where you want to check the weather"
              type="text"
            />
            <button onClick={getWeatherData}>See Weather</button>
          </div>
        </div>
      </>
    );
  }

  if(weatherData) {
    return (
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-2, -2.3, 10],
        }}
      >
        <Experience weather={weatherData} />
      </Canvas>
    );
  }

  return;
}
