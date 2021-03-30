import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <h1>
        <span id="temperature"> 8 </span>
        <p class="units">
          <a href="#" id="celsius" class="active">
            °C
            <br />
          </a>
          <a href="#" id="fahrenheit">
            °F
          </a>
        </p>
      </h1>
      <div class="row">
        <div class="col-sm-6">
          <div class="card icon">
            <div class="card-body">
              <p class="card-text emoji">
                <img src="" alt="Current Weather Icon" id="icon" />
              </p>
              <p id="description">Cloudy</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card weatherdetails">
            <div class="card-body">
              <p class="card-text">
                <ul>
                  <li>
                    Humidity: <span id="humidity"></span>%
                  </li>
                  <li>
                    Wind: <span id="windspeed"></span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
