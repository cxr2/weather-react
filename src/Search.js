import React from "react";
import ReactDOM from "react-dom";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <form id="search-form">
        <input
          type="search"
          class="form-control"
          id="cityInput"
          placeholder="Enter a town or city"
        ></input>
        <button class="btn btn-outline-secondary" id="search" type="submit">
          <i class="fas fa-search"></i>
        </button>
        <button
          class="btn btn-outline-secondary"
          id="currentlocation"
          type="button"
        >
          <i class="fas fa-map-marker"></i>
        </button>
      </form>
      <h3 id="datetime">9:19 Fri, Mar 12</h3>
      <h2>
        <span id="city">London</span>, <span id="country">UK</span>
      </h2>
    </div>
  );
}
