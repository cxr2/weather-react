import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="container">
        <div
          className="row row-cols-auto justify-content-center"
          id="forecast"
        ></div>
      </div>
    </div>
  );
}
