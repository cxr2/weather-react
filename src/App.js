import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="London, GB" />
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
