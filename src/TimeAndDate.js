import React from "react";
import "./App.css"
class TimeAndDate extends React.Component {
  state = {
    date: "date",
    day: "day",
    time: "time",
  };
  componentDidMount() {
    const date = { year: "numeric", month: "long", day: "numeric"};
    const today = new Date();
    const day = { weekday: "long" };
    
   setInterval(()=>this.handleClockUpdate(), 1000);
    this.setState({
      date: today.toLocaleDateString("en-US", date),
      day: today.toLocaleDateString("en-US", day)
    });
  }
  handleClockUpdate() {
    const today = new Date();
    const time = {hour:"numeric", minute:"numeric", second:"numeric"};
    this.setState({ time: today.toLocaleString("en-US", time) });
  }
  render() {
    return (
      <div className="TimeAndDate">
        <p>{this.state.time}</p>
        <p>{this.state.day}</p>
        <p>{this.state.date}</p>
        <p>location</p>
      </div>
    );
  }
}
export default TimeAndDate;
