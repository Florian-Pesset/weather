import React from "react";

function CurrentWeather({ getData }) {
  const { weather, main } = getData;
  return (
    <div>
      <h3>{weather[0].description}</h3>
      <h4>Température : {main.temp - 273.15}°C </h4>
    </div>
  );
}

export default CurrentWeather;
