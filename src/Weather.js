import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      city: response.data.name,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search">
          <div class="input-group justify-content-center">
            <form id="search-form">
              <input
                type="search"
                class="form-control"
                id="cityInput"
                placeholder="Enter a town or city"
                autoFocus="on"
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
          </div>
          <h3 id="datetime">
            <FormattedDate date={weatherData.date} />
          </h3>
          <h2>
            <span id="city">{weatherData.city}</span>,{" "}
            <span id="country">UK</span>
          </h2>
        </div>
        <h1>
          <span id="temperature"> {Math.round(weatherData.temperature)} </span>
          <p class="units">
            <span id="celsius" class="active">
              °C
              <br />
            </span>
            <span id="fahrenheit">°F</span>
          </p>
        </h1>
        <div class="row">
          <div class="col-sm-6">
            <div class="card icon">
              <div class="card-body">
                <p class="card-text emoji">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    id="icon"
                  />
                </p>
                <p className="text-capitalize" id="description">
                  {weatherData.description}
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card weatherdetails">
              <div class="card-body">
                <p class="card-text">
                  <ul>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "15351fed24e9858d556a9255a2af3e61";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
