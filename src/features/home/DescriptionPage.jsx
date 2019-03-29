import React, { Component } from "react";
import "./style.css";
import ReactYoutube from "./ReactYoutube";
import NBDescriptionPage from "./NBDescriptionPage";

class DescriptionPage extends Component {
  render() {
    return (
      <div>
        <div className="masthead segment">
          <NBDescriptionPage />
          <div className="container">
            <div className="container">
              <div className="toppane">
                <ReactYoutube videoId="Drcq3IxTgTs" />
              </div>
              <div class="leftpane">
                <h1>Description About B-Quest</h1>
              </div>
              <div class="rightpane">
                <h2>
                  Hi there and welcome to B-Quest Web Application. We're a group
                  of students that creates software to make people's bithdays
                  more enjoyable.
                </h2>
                <h3>We are: </h3>
                <img src="https://bit.ly/2HDrEkL" alt="Johan" width="100px" height="100px" />
                <img src="https://bit.ly/2HRMsnN" alt="Ronald" width="100px" height="100px" />
                <img src="https://bit.ly/2UgsI3J" alt="Ailem" width="100px" height="100px" />
                <img src="https://bit.ly/2HRLmsb" alt="Juan" width="100px" height="100px" />
                <img src="https://bit.ly/2HDmTHG" alt="Robert" width="100px" height="100px" />
                <img src="https://bit.ly/2CKyhOf" alt="Mafer" width="100px" height="100px" />
                <div>
                  <h4>Johan Ronald Ailem Juan Robert Mafer</h4>
                </div>

                <footer>&copy;Copyright. All rights reserved.</footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DescriptionPage;
