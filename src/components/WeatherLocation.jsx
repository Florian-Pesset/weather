import React, { useState } from "react";

const WeatherLocation = () => {
  const [userInput, setUserInput] = useState("");
  const [city, setCity] = useState("");

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

      <h3>Ville choisie:</h3>
      <p>{city}</p>
    </div>
  );
};

export default WeatherLocation;
