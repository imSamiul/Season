import React from "react";
import "./App.css";
import TimeAndDate from "./TimeAndDate";
class Weather extends React.Component {
  render() {
    return (
      <div className="column right weather div only">
        <div className="ui segment right">
        <div className="ui fluid icon input">
  <input type="text" className= "ui input SearchCity" placeholder="Search City...."></input>
  <i class="search icon"></i>
</div>
          
          <i className="sun icon"></i>
          <h1 className="temparature degree">12</h1>
          <p className="temparature unit">°C</p>
          <p>Mostly Cloudy</p>
          <p>Rain, 30%</p>
          <div className="ui divider"></div>
          <TimeAndDate></TimeAndDate>
        </div>
      </div>
    );
  }
}
export default Weather;
