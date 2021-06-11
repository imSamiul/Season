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
  window.location.replace(`https://maps.google.com/?q=${this.state.latitude},${this.state.longitude}`)}
      </div>
    );
  }
}
export default SeasonDisplay;
