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
      <div className="row d-flex justify-content-center">
        <div className="col-sm-6">
          <div className="card icon">
            <div className="card-body">
              <p className="card-text emoji">
                <WeatherIcon code={props.data.icon} size={60} />
              </p>
              <p className="text-capitalize" id="description">
                {props.data.description}
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card weatherdetails">
            <div className="card-body">
              <ul className="card-text">
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {Math.round(props.data.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
