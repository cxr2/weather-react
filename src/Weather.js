import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="search">
        <div class="input-group justify-content-center">
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
      <h1>
        <span id="temperature"> 8 </span>
        <p class="units">
          <span id="celsius" class="active">
            °C
            <br />
          </span>
          <span id="fahrenheit">°F</span>
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
