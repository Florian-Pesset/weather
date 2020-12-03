import React, { useContext, useState } from "react";
import CityContext from "../contexts/CityContext";

const WeatherLocation = () => {
  const [userInput, setUserInput] = useState("");
  const { city, setCity } = useContext(CityContext);

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  const adduserInput = () => {
    setCity(userInput);
  };

  return (
    <div>
      <h2>Tapez votre ville</h2>

      <input type="text" value={userInput} onChange={onChange} />
      <button type="button" onClick={adduserInput}>
        Enter
      </button>

      <h3>{city}</h3>
    </div>
  );
};

export default WeatherLocation;
