import { useState, useEffect, useContext } from "react";
import axios from "axios";

import WeatherLocation from "./WeatherLocation";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

import CityContext from "../contexts/CityContext";

import styles from "../css/weather.module.css";

const Weather = () => {
  const [getData, setData] = useState("");
  const { city } = useContext(CityContext);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=24c738f7df664b6fb1f143056200712&q=${city}&days=3`
      )
      .then((response) => setData(response.data));
  }, [city]);

  return (
    <div className={styles.weather}>
      {getData && (
        <>
          <CurrentWeather getData={getData} />
          <div>
            <WeatherLocation />
            <Forecast getData={getData} />
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
