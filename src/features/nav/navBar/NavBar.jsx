import React, { Component } from "react";
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { openModal } from '../../modals/modalActions'


const actions = {
  openModal
}

const mapState = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

class NavBar extends Component {
  

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;

    return (
      <Menu inverted fixed="top">
        <Container>
          {/*The Home page is always activated due having the NavLink below*/}
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            B-Quest
          </Menu.Item>
          {authenticated && (
            <Menu.Item as={NavLink} to="/events" name="My Treasure Hunts" />
          )}
          {/*<Menu.Item as={NavLink} to="/test" name="Test" /> */}
          {/*{authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )} */}
          {authenticated && (
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Treasure Hunt"
              />
            </Menu.Item>
          )}
          {authenticated ? (
            <SignedInMenu profile={profile} signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));
