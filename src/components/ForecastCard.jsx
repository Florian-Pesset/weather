import React from "react";
import styles from "../css/forecast.module.css";

function ForecastCard({ forecast }) {
  const weekday = new Date(forecast.date).toDateString();

  return (
    <div className={styles.dayWeek}>
      <h2>{weekday}</h2>
      <hr />
      <h3>{forecast.day.condition.text}</h3>
      <img
        src={forecast.day.condition.icon}
        alt={forecast.day.condition.text}
      />
      <p>Min: {forecast.day.mintemp_c}°C</p>
      <p>Average: {forecast.day.avgtemp_c}°C</p>
      <p>Max: {forecast.day.maxtemp_c}°C</p>
    </div>
  );
}

ForecastCard.propTypes = {};

export default ForecastCard;
