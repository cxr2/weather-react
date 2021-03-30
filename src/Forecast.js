import { StrictMode } from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div class="container">
        <div
          class="row row-cols-auto justify-content-center"
          id="forecast"
        ></div>
      </div>
    </div>
  );
}
