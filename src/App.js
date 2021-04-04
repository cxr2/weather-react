import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid" id="background">
        <div className="input-group justify-content-center">
          <Weather defaultCity="London" />
        </div>
      </div>
      <div className="footer">
        <a href="https://github.com/cxr2/weather-react" rel="noreferrer">
          Open-source code
        </a>{" "}
        by{" "}
        <a href="https://github.com/cxr2" rel="noreferrer">
          CJ Houlihan
        </a>
      </div>
    </div>
  );
}
