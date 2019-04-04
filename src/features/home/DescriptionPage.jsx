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
              <div className="leftpane">
                <h1>B-Quest</h1>
                <h2>
                  B-Quest is a birthday application where a group of friends can create
                  an event that involves a group of tasks to complete in order
                  to win a prize that will be the birthday present. For our
                  application purposes the prize is always money. In our app the
                  event is considered a Treasure Hunt, the birthday person is a
                  hero so it’s called a B- Hero and the birthday present is a
                  Treasure.
                </h2>
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
                    width="100px"
                    height="100px"
                  />
                  <Image
                    src="/assets/usImages/Ronald.jpg"
                    alt="Ronald"
                    width="100px"
                    height="100px"
                  />
                  <Image
                    src="/assets/usImages/Ailem.jpg"
                    alt="Ailem"
                    width="100px"
                    height="100px"
                  />
                  <Image
                    src="/assets/usImages/Juan.jpg"
                    alt="Juan"
                    width="100px"
                    height="100px"
                  />
                  <Image
                    src="/assets/usImages/Robert.jpg"
                    alt="Robert"
                    width="100px"
                    height="100px"
                  />
                  <Image
                    src="/assets/usImages/Mafer.jpg"
                    alt="Mafer"
                    width="100px"
                    height="100px"
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
