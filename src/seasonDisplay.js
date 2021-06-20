import React from "react";
import "./App.css";
class SeasonDisplay extends React.Component {
  render() {
    return (
      <div className="seasonDisplay">
        <div className="ui raised very padded text container segment inner_container">
          <div class="two column stackable ui grid">
            <div class="column">
              <div class="ui segment">
                <p></p>
                <p></p>
              </div>
            </div>
            <div class="column">
              <div class="ui segment">
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="column right">
              <h2>Column 1</h2>
              <p>Some text..</p>
            </div>
            <div className="column left">
              <h2>Column 2</h2>
              <p>Some text..</p>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
export default SeasonDisplay;
