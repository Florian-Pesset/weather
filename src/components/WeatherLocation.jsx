import React, { useContext, useState } from "react";
import CityContext from "../contexts/CityContext";
import styles from "../css/weatherLocation.module.css";

const WeatherLocation = () => {
  const [userInput, setUserInput] = useState("");
  const { setCity } = useContext(CityContext);

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  const adduserInput = () => {
    setCity(userInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setCity(userInput);
    }
  };

  return (
    <div className={styles.location}>
      <h2>Find your city</h2>
      <input
        type="text"
        value={userInput}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={adduserInput}>
        Enter
      </button>
    </div>
  );
};

export default WeatherLocation;
