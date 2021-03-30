import React from "react";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid" id="background">
        <div className="input-group justify-content-center">
          <Search />
          <Weather />
        </div>
      </div>
      <div className="footer">
        <a href="https://github.com/cxr2/WeatherProject" target="_blank">
          Open-source code
        </a>{" "}
        by{" "}
        <a href="https://github.com/cxr2" target="_blank">
          CJ Houlihan
        </a>
      </div>
    </div>
  );
}
