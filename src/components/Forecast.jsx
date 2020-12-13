import React from "react";
import styles from "../css/forecast.module.css";
import ForecastCard from "./ForecastCard";

const Forecast = ({ getData }) => {
  const forecast = getData.forecast.forecastday;

  return (
    <div className={styles.forecast}>
      {forecast.map((forecast) => {
        return <ForecastCard key={forecast.date_epoch} forecast={forecast} />;
      })}
    </div>
  );
};

export default Forecast;
