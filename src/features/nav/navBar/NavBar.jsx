import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSignIn = () => {
    this.setState({
      authenticated: true
    })
  }

  handleSignOut = () => {
    this.setState({
      authenticated: false
    })
    this.props.history.push('/')
  }

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          {/*The Home page is always activated due having the NavLink below*/}
          <Menu.Item as={Link} to="/" header>
            <img src="assets/logo.png" alt="logo" />
            B-Quest
          </Menu.Item>
          {authenticated &&
          <Menu.Item as={NavLink} to="/events" name="My Treasure Hunts" />}
          {authenticated &&
          <Menu.Item as={NavLink} to="/people" name="People" />}
          {/*<Menu.Item><Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Treasure Hunt" /></Menu.Item>*/}
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
