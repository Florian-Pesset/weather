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
    const API_KEY = process.env.REACT_APP_API_KEY;

    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`
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
