import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3 id="datetime">
        <FormattedDate date={props.data.date} />
      </h3>
      <h2>
        <span id="city">{props.data.city}</span>, <span id="country">UK</span>
      </h2>
      <h1>
        <span id="temperature"> {Math.round(props.data.temperature)} </span>
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
                  src={props.data.iconUrl}
                  alt={props.data.description}
                  id="icon"
                />
              </p>
              <p className="text-capitalize" id="description">
                {props.data.description}
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card weatherdetails">
            <div class="card-body">
              <p class="card-text">
                <ul>
                  <li>Humidity: {props.data.humidity}%</li>
                  <li>Wind: {Math.round(props.data.wind)} km/h</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
