import React, { useEffect, useState } from "react";
import Axios from "axios";
import WeatherLocation from "./WeatherLocation";
import CurrentWeather from "./CurrentWeather";

const CityCherch = () => {
  const [getData, setGetData] = useState("");

  useEffect(() => {
    Axios.get(
      "http://api.weatherstack.com/current?access_key=780fc7cd0f7634738ded32442b42383b&query=Nantes"
    ).then((response) => setGetData(response.data));
  }, []);

  console.log(getData);

  return (
    <div>
      <WeatherLocation />
      <CurrentWeather dataCity={getData} />
    </div>
  );
};

export default CityCherch;
