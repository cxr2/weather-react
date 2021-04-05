import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherpropsDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="card forecast">
      <div className="card-body">
        <h5 className="card-title">{day()}</h5>
        <p className="card-text forecast">
          <WeatherIcon code={props.data.weather[0].icon} size={25} />
          <br />
          <span className="temp-max">{maxTemp()}</span>
          <span className="temp-min"> {minTemp()}</span>
        </p>
      </div>
    </div>
  );
}
