import React from "react";
import styles from "../css/forecast.module.css";

const Forecast = ({ getData }) => {
  const forecast = getData.forecast.forecastday;

  let current_date = new Date(forecast.date);

  console.log(current_date.getDay());
  return (
    <div className={styles.forecast}>
      {forecast.map((weather) => {
        return (
          <div className={styles.dayWeek}>
            <p>{current_date.getDay()}</p>
            <h3>{weather.day.condition.text}</h3>
            <img
              src={weather.day.condition.icon}
              alt={weather.day.condition.text}
            />
            <p>Min: {weather.day.mintemp_c}°C</p>
            <p>Average: {weather.day.avgtemp_c}°C</p>
            <p>Max: {weather.day.maxtemp_c}°C</p>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
