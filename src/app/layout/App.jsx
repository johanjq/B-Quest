import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/navBar/NavBar";
import EventForm from "../../features/event/EventForm/EventForm";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";
import DescriptionPage from "../../features/home/DescriptionPage";
import TestComponent from "../../features/testarea/TestComponent";

class App extends Component {
  render() {
    return (
      //With this adition to the home page route in a different
      //Div, we make sure to display the Home page without the NavBar
      <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/descriptionPage" component={DescriptionPage}/>
          </Switch>

        {/*A Route with forward Slash(/) plus anything else will result on a routing
        looking for a match */}
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/test" component={TestComponent} />
                  <Route path="/event/:id" component={EventDashboard} />
                  <Route path="/people" component={EventDetailedPage} />
                  <Route path="/profile/:id" component={PeopleDashboard} />
                  <Route
                    path="/events/profile/:id"
                    component={UserDetailedPage}
                  />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}
export default App;
