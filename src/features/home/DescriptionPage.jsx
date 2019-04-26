import React, { Component } from "react";
import "./style.css";
import ReactYoutube from "./ReactYoutube";
import NBDescriptionPage from "./NBDescriptionPage";
import { Image } from "semantic-ui-react";


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
              <div className="rightpane">
                <h2>
                  Hi there and welcome to B-Quest Web Application. We're a group
                  of students that creates software to make people's bithdays
                  more enjoyable.
                </h2>
                <h3>We are: </h3>
                <Image.Group>
                  <Image
                    src="/assets/usImages/Johan.jpg"
                    alt="Johan"
                    width="130px"
                    height="130"
                  />
                  <Image
                    src="/assets/usImages/Ronald.jpg"
                    alt="Ronald"
                    width="130px"
                    height="130px"
                  />
                  <Image
                    src="/assets/usImages/Ailem.jpg"
                    alt="Ailem"
                    width="130px"
                    height="130px"
                  />
                  <Image
                    src="/assets/usImages/Juan.jpg"
                    alt="Juan"
                    width="130px"
                    height="130px"
                  />
                  <Image
                    src="/assets/usImages/Robert.jpg"
                    alt="Robert"
                    width="130px"
                    height="130px"
                  />
                  <Image
                    src="/assets/usImages/Mafer.jpg"
                    alt="Mafer"
                    width="130px"
                    height="130px"
                  />
                </Image.Group>
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
