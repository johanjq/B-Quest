import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/navBar/NavBar";
import EventForm from "../../features/event/EventForm/EventForm";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
        <Route exact path='/' component={HomePage}/>
          <Route path='/events' component={EventDashboard}/>
          <Route path='/event/:id' component={EventDashboard}/>
          <Route path='/people' component={EventDetailedPage}/>
          <Route path='/profile/:id' component={PeopleDashboard}/>
          <Route path='/events/profile/:id' component={UserDetailedPage}/>
          <Route path='/settings' component={SettingsDashboard}/>
          <Route path='/createEvent' component={EventForm}/>
        </Container>
      </div>
    );
  }
}
//This is a comment to test

export default App;
