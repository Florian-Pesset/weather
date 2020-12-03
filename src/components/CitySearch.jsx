import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import WeatherLocation from "./WeatherLocation";
import CurrentWeather from "./CurrentWeather";
import CityContext from "../contexts/CityContext";

const CitySearch = () => {
  const [getData, setData] = useState("");
  const { city } = useContext(CityContext);

  useEffect(() => {
    getCurrentWeather();
    console.log(getData);
  }, [city]);

  const getCurrentWeather = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},fr&APPID=b5486ab24e040ab212b4f65582a885ab`
      )
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <WeatherLocation />
      {getData && <CurrentWeather getData={getData} />}
    </div>
  );
};

export default CitySearch;
