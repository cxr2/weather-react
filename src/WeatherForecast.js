import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div class="row row-cols-auto justify-content-center">
        <div class="col">
          <div class="card forecast">
            <div class="card-body">
              <h5 class="card-title">mon</h5>
              <p class="card-text forecast">
                <WeatherIcon code="01d" size={25} />
                <br />
                <span class="temp-max">14°</span>
                <span className="temp-min"> 8°</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
