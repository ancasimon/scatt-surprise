import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import PropTypes from 'prop-types';

import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  }

  logoutEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle= () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;

    const buildNavbar = () => {
      const { authed } = this.props;
      // we want to base this based on whether use is authenticated > so we need to pull in authed form the state in App.js > so we pass authed into MyNavbar component there > and then we have access to it here in props > we also need to defien prop types!
      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
          </Nav>
        );
      }
      return <Nav className="ml-auto" navbar></Nav>;
      // we need the return line above becase otherwise we get an ESLint error which requires that you always return somethign at the end of the function - that is why we did not do an else statement - you would still need a final return because the else is still part of the conditional return.
    };

    return (
      <div className="MyNavbar">
        <h1>My Navbar</h1>
        <button className="btn btn-secondary" onClick={this.logoutEvent}>Log Out</button>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Scat Surprise</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          { buildNavbar() }
        </Collapse>
      </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
