import React, { useContext, useState, useEffect } from "react";
import CityContext from "../contexts/CityContext";
import styles from "../css/weatherLocation.module.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MicIcon from "@material-ui/icons/Mic";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const WeatherLocation = () => {
  const [userInput, setUserInput] = useState("");
  const { setCity } = useContext(CityContext);
  const { transcript } = useSpeechRecognition();

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Ups, your browser is not supported!");
    }
  }, []);

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  const adduserInput = () => {
    setCity(transcript || userInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setCity(transcript || userInput);
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
        <MicIcon onClick={SpeechRecognition.startListening} fontSize="large" />

        <TextField
          label="Enter your city"
          value={transcript || userInput}
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
