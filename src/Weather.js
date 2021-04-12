import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  let backgroundClassName = "background";
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      country: response.data.sys.country,
      wind: response.data.wind.speed,
      timezone: response.data.timezone,
    });
  }

  let time = new Date();
  let localTimeOffset = time.getTimezoneOffset() * 60;
  time.setSeconds(time.getSeconds() + localTimeOffset + weatherData.timezone);
  let hours = time.getHours();
  if (hours >= 20 && hours < 24) {
    backgroundClassName = "background evening";
  }
  if (hours >= 5 && hours < 11) {
    backgroundClassName = "background morning";
  }
  if (hours >= 12 && hours < 17) {
    backgroundClassName = "background afternoon";
  }
  if (hours >= 17 && hours < 20) {
    backgroundClassName = "background afternoon";
  }

  if (hours >= 0 && hours < 5) {
    backgroundClassName = "background evening";
  }

  function search() {
    const apiKey = "15351fed24e9858d556a9255a2af3e61";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className={backgroundClassName}>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 justify-content-center">
              <input
                type="search"
                className="form-control"
                id="cityInput"
                placeholder="Enter a town or city"
                autoFocus="on"
                onChange={handleCityChange}
              ></input>
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>

          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
