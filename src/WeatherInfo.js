import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3 id="datetime">
        <FormattedDate date={props.data.date} />
      </h3>
      <h2>
        {props.data.city}, {props.data.country}
      </h2>
      <WeatherTemperature celsius={props.data.temperature} />
      <div class="row">
        <div class="col-sm-6">
          <div class="card icon">
            <div class="card-body">
              <p class="card-text emoji">
                <WeatherIcon code={props.data.icon} size={60} />
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
