import React from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Search() {
  return (
    <div className="search">
      <div class="input-group">
        <form id="search-form">
          <input
            type="search"
            class="form-control"
            id="cityInput"
            placeholder="Enter a town or city"
            autoFocus="on"
          ></input>
          <button
            className="btn btn-outline-secondary"
            id="search"
            type="submit"
          >
            <i class="fas fa-search"></i>
          </button>
          <button
            className="btn btn-outline-secondary"
            id="currentlocation"
            type="button"
          >
            <i class="fas fa-map-marker"></i>
          </button>
        </form>
      </div>
      <h3 id="datetime">9:19 Fri, Mar 12</h3>
      <h2>
        <span id="city">London</span>, <span id="country">UK</span>
      </h2>
    </div>
  );
}
