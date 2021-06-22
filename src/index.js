import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import "./App.css"
class App extends React.Component {
  
state = {
  latitude: 'any',
  err: "",
};
// componentDidMount() {
//   navigator.geolocation.getCurrentPosition(
//     (success) =>
//       this.setState({
//         latitude: success.coords.latitude,
//       }),
//     (error) => this.setState({ err: error })
//   );
// }

render() {
  return (
    <div className = "main-div">
      {this.state.err ? alert("There is an error. Maybe you dont give location permission") : <SeasonDisplay lat = {this.state.latitude}></SeasonDisplay>}
    </div>
  );
}
}
ReactDOM.render(<App></App>, document.getElementById("root"));


