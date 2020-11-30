import React from "react";

const CurrentWeather = ({ dataCity }) => {
  const { current, location } = dataCity;
  return (
    <div>
      <h2>{location.name}</h2>
      <p>{location.localtime}</p>
      <h3>{current.weather_descriptions[0]}</h3>
      <img
        src={current.weather_icons[0]}
        alt={current.weather_descriptions[0]}
      />
    </div>
  );
};

export default CurrentWeather;
