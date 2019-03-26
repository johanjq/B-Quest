import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link } from 'react-router-dom';

//
class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to='/' header>
            <img src="assets/logo.png" alt="logo" />
            B-Quest
          </Menu.Item>
          <Menu.Item as={NavLink} to='/events' name="My Treasure Hunts" />
          <Menu.Item as={NavLink} to='/people' name="People" />
          
            {/*<Menu.Item><Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Treasure Hunt" /></Menu.Item>*/}
            
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: "0.5em" }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
