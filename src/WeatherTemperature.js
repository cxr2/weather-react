import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <h1>
        <span id="temperature"> {Math.round(props.celsius)} </span>
        <p className="units">
          <span id="celsius" className="active">
            °C
          </span>
          <br />
          <a href="/" id="fahrenheit" onClick={showFahrenheit}>
            <span id="fahrenheit"> °F</span>
          </a>
        </p>
      </h1>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <h1>
        <span id="temperature"> {Math.round(fahrenheit)} </span>
        <p className="units">
          <a href="/" id="celsius" onClick={showCelsius}>
            <span id="celsius"> °C</span>
          </a>
          <br />
          <span id="fahrenheit" className="active">
            °F
          </span>
        </p>
      </h1>
    );
  }
}
