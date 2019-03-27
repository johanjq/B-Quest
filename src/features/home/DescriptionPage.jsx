import React, { Component } from "react";
import './style.css'
import ReactYoutube from './ReactYoutube';
import NBDescriptionPage from "./NBDescriptionPage";

class DescriptionPage extends Component {
  render() {
    return (
      <div>
        <div className="masthead segment">
        <NBDescriptionPage/>
          <div className="container">
            <div className="container">
              <div className="toppane">
                <ReactYoutube videoId="_nBlN9yp9R8"/>
              </div>
              <div class="leftpane">
                <h1>Test Page</h1>
              </div>
              <div class="rightpane">
                <h1>Test Page</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DescriptionPage;
