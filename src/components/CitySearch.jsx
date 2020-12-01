import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherLocation from "./WeatherLocation";
import CurrentWeather from "./CurrentWeather";

const CitySearch = () => {
  const [getData, setData] = useState({});

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Nantes,fr&APPID=b5486ab24e040ab212b4f65582a885ab"
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  };

  console.log(getData);
  return (
    <div>
      <WeatherLocation />
      <CurrentWeather dataCity={getData} />
    </div>
  );
};

export default CitySearch;
