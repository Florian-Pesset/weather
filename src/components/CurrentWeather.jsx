import React from "react";
import styles from "../css/currentWeather.module.css";

function CurrentWeather({ getData }) {
  const { name, region, country, localtime } = getData.location;
  const {
    condition,
    temp_c,
    is_day,
    wind_kph,
    wind_dir,
    cloud,
    humidity,
  } = getData.current;

  return (
    <div className={is_day === 1 ? styles["day"] : styles["night"]}>
      <div className={styles.city}>
        <h1>Current weather</h1>
        <hr />
        <h2>{name}</h2>
        <img src={condition.icon} alt={condition.text} /> <h3>{temp_c}°C</h3>
        <p>
          {region} {country}
        </p>
        <p>{localtime}</p>
        <h3>{condition.text}</h3>
        <h3>Wind status</h3>
        <p>Speed: {wind_kph} km/h</p>
        <p>Wind degree: {wind_dir}</p>
        <h3>Cloud cover: {cloud}%</h3>
        <h3>Humidity: {humidity}%</h3>
      </div>
    </div>
  );
}

export default CurrentWeather;
