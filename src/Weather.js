import React from "react";
import "./App.css";
import TimeAndDate from "./TimeAndDate";
class Weather extends React.Component {
  render() {
    return (
      <div className="column right weather div only">
        <div className="ui segment right">
          <div class="ui category search">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search City..."
              ></input>
              <i className="search icon"></i>
            </div>
          </div>
          <i className="sun icon"></i>
          <h1 className="temparature degree">12</h1>
          <p className="temparature unit">°C</p>
          <p>Mostly Cloudy</p>
          <p>Rain, 30%</p>
          <div class="ui divider"></div>
          <TimeAndDate></TimeAndDate>
        </div>
      </div>
    );
  }
}
export default Weather;
