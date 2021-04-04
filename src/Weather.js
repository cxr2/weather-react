import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      wind: response.data.wind.speed,
    });
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
        <div class="input-group justify-content-center">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              class="form-control"
              id="cityInput"
              placeholder="Enter a town or city"
              autoFocus="on"
              onChange={handleCityChange}
            ></input>
            <button
              className="btn btn-outline-secondary"
              id="search"
              type="submit"
            >
              <i class="fas fa-search"></i>
            </button>
            <button
              className="btn btn-outline-secondary"
              id="currentlocation"
              type="button"
            >
              <i class="fas fa-map-marker"></i>
            </button>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
