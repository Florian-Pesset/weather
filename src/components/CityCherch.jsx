import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherLocation from "./WeatherLocation";
import CurrentWeather from "./CurrentWeather";

const CityCherch = () => {
  const [getData, setData] = useState({});

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Nantes,fr&APPID=b5486ab24e040ab212b4f65582a885ab"
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  };

  console.log(getData);
  return (
    <div>
      <WeatherLocation />
      <CurrentWeather dataCity={getData} />
    </div>
  );
};

export default CityCherch;

/*
<div id="openweathermap-widget-11"></div>
<script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script><script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 11,cityid: '2990968',appid: 'b5486ab24e040ab212b4f65582a885ab',units: 'metric',containerid: 'openweathermap-widget-11',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script>*/
