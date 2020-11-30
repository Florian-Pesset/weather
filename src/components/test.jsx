import React, { Component } from "react";
import axios from "axios";
import WeatherLocation from "./WeatherLocation";
import CurrentWeather from "./CurrentWeather";

class CityCherch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getData: {},
    };
    this.getCityData = this.getCityData.bind(this);
  }

  componentDidMount() {
    this.getCityData();
  }

  getCityData() {
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=780fc7cd0f7634738ded32442b42383b&query=Nantes"
      )
      .then(({ response }) =>
        this.setState({
          getData: response,
        })
      );
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <WeatherLocation />
        <CurrentWeather dataCity={this.stategetData} />
      </div>
    );
  }
}

export default CityCherch;

/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherLocation from "./WeatherLocation";
import CurrentWeather from "./CurrentWeather";

const CityCherch = () => {
  const [getData, setGetData] = useState();

  const getCityData = () => {
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=780fc7cd0f7634738ded32442b42383b&query=Nantes"
      )
      .then((response) => setGetData(response));
  };

  useEffect(() => {
    getCityData();
  }, []);

  console.log(getData);

  return (
    <div>
      <WeatherLocation />
      <CurrentWeather dataCity={getData} />
    </div>
  );
};

export default CityCherch;
*/
