import React, { useContext, useState } from "react";
import CityContext from "../contexts/CityContext";
import styles from "../css/weatherLocation.module.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
  const useStyles = makeStyles(() => ({
    text: {
      backgroundColor: "whitesmoke",
      borderRadius: "5px",
    },
    button: {
      backgroundColor: "whitesmoke",
      height: "100%",
    },
  }));

  const classes = useStyles();
  return (
    <div className={styles.location}>
      <h1>WeatherWorld</h1>
      <div className={styles.container}>
        <TextField
          label="Enter your city"
          value={userInput}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          variant="filled"
          className={classes.text}
        />
        <Button
          type="button"
          color="primary"
          onClick={adduserInput}
          variant="outlined"
          className={classes.button}
        >
          Enter
        </Button>
      </div>
    </div>
  );
};

export default WeatherLocation;
