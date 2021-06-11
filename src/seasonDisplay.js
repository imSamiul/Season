import React from "react";

class SeasonDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.routeToMap = this.routeToMap.bind(this);
      }
  state = {
    longitude: '',
    latitude: '',
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
  routeToMap(){
      
  window.location.replace(`https://maps.google.com/?q=${this.state.latitude},${this.state.longitude}`)
  }
  render() {
    return (
      <div>
        {this.state.err ? alert("There is an error. Maybe you dont give location permission") : <button onClick ={this.routeToMap}>Take me to the map</button>}
      </div>
    );
  }
}
export default SeasonDisplay;
