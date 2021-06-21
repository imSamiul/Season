import React from "react";
import "./App.css";
import Weather from "./Weather";
import WeatherDetails from "./WeatherDetails";
class SeasonDisplay extends React.Component {
  render() {
    return (
      <div className="seasonDisplay">
        <div className="ui raised very padded text container segment inner_container">
          <div className="three column stackable ui grid">
            <Weather lat = {this.props.lat}></Weather>
            <WeatherDetails></WeatherDetails>
          </div>
        </div>
      </div>
    );
  }
}
export default SeasonDisplay;
