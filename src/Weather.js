import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}C`
    );
  }

  let apiKey = "15351fed24e9858d556a9255a2af3e61";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(url).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
