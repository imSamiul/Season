import React from "react";

class SeasonDisplay extends React.Component {
  state = {
    longitude: null,
    latitude: null,
    err: "",
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (success) =>
        this.setState({
          latitude: success.coords.latitude,
          longitude: success.coords.longitude,
        }),
      (error) => this.setState({ err: error })
    );
  }

  render() {
    return (
      <div>
        {this.state.err ? alert("There is an error. Maybe you dont give location permission") :
        <h1>{"Latitude: " + this.state.latitude + " and Longitude: " + this.state.longitude}</h1>}
      </div>
    );
  }
}
export default SeasonDisplay;
