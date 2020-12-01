import React from "react";

function CurrentWeather({ dataCity }) {
  const { weather, main } = dataCity;
  return (
    <div>
      <h3>{weather[0].description}</h3>
      <h3>Température : {main.temp - 273.15} </h3>
    </div>
  );
}

export default CurrentWeather;
