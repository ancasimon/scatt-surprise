import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  logoutEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="MyNavbar">
        <h1>My Navbar</h1>
        <button className="btn btn-secondary" onClick={this.logoutEvent}>Log Out</button>
      </div>
    );
  }
}

export default MyNavbar;
