import React from "react";
import styles from "../css/currentWeather.module.css";

import N from "../img/pointN.png";
import NNE from "../img/pointNNE.png";
import NE from "../img/pointNE.png";
import ENE from "../img/pointENE.png";
import E from "../img/pointE.png";
import ESE from "../img/pointESE.png";
import SE from "../img/pointSE.png";
import SSE from "../img/pointSSE.png";
import S from "../img/pointS.png";
import SSW from "../img/pointSSW.png";
import SW from "../img/pointSW.png";
import WSW from "../img/pointWSW.png";
import W from "../img/pointW.png";
import WNW from "../img/pointWNW.png";
import NW from "../img/pointNW.png";
import NNW from "../img/pointNNW.png";

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

  const wind = (wind_dir) => {
    switch (wind_dir) {
      case "N":
        return N;
      case "NNE":
        return NNE;
      case "NE":
        return NE;
      case "ENE":
        return ENE;
      case "E":
        return E;
      case "ESE":
        return ESE;
      case "SE":
        return SE;
      case "SSE":
        return SSE;
      case "S":
        return S;
      case "SSW":
        return SSW;
      case "SW":
        return SW;
      case "WSW":
        return WSW;
      case "W":
        return W;
      case "WNW":
        return WNW;
      case "NW":
        return NW;
      case "NNW":
        return NNW;

      default:
        return <h1>No project match</h1>;
    }
  };

  return (
    <div className={is_day === 1 ? styles["day"] : styles["night"]}>
      <div className={styles.city}>
        <h1>Current weather</h1>
        <hr />
        <h2>{name}</h2>
        <p>
          {region} {country}
        </p>
        <p>{localtime}</p>

        <h2>Today's Hightlights</h2>
        <img src={condition.icon} alt={condition.text} />
        <p>{condition.text}</p>
        <p>{temp_c}°C</p>

        <h3>Wind status</h3>
        <p>Speed: {wind_kph} km/h</p>
        <p>Wind degree: {wind_dir}</p>
        <img src={wind(wind_dir)} alt={wind_dir} className={styles.windir} />

        <h3>Cloud cover</h3>
        <p>{cloud}%</p>
        <h3>Humidity</h3>
        <p>{humidity}%</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
