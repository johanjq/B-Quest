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
                <ReactYoutube videoId="Drcq3IxTgTs"/>
              </div>
              <div class="leftpane">
                <h1>Description About B-Quest</h1>
              </div>
              <div class="rightpane">
                <h1>Description about Us</h1>
                <h1>Images</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DescriptionPage;
