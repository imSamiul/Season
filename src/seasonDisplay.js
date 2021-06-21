import React from "react";
import "./App.css";
import Weather from "./Weather";
import WeatherDetails from "./WeatherDetails";
class SeasonDisplay extends React.Component {
  render() {
    return (
      <div className="seasonDisplay">
        <div className="ui raised very padded text container segment inner_container">
          <div class="three column stackable ui grid">
            <Weather></Weather>
            <WeatherDetails></WeatherDetails>
          </div>
        </div>
      </div>
    );
  }
}
export default SeasonDisplay;
