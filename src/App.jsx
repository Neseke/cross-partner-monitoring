import React, { Component } from 'react';

import Overview from './Components/Navigation/Overview';
import LoginButton from './Components/Google/LoginButton';

import getLocalStorageItems from './utils';

const LOGIN_STORAGE = window.localStorage;

require('dotenv').config('../.env');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.isLoggedIn()
    };

    this.onSuccessfulLogin = this.onSuccessfulLogin.bind(this);
    this.onFailureLogin = this.onFailureLogin.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  // use this function as callback when the user successfully logged in
  onSuccessfulLogin(googleAuthResponse) {
    const { profileObj } = googleAuthResponse;
    const { name, email } = profileObj; // e.g. "Lukas Höpfner"

    LOGIN_STORAGE.setItem('name', name);
    LOGIN_STORAGE.setItem('email', email);

    this.setState({ isLoggedIn: true });
  }

  // use this function as callback when the google login failed
  onFailureLogin() {
    LOGIN_STORAGE.clear();

    this.setState({
      isLoggedIn: false
    });
  }

  isLoggedIn() {
    const profileInfos = getLocalStorageItems();

    const { name, email } = profileInfos;

    const isLoggedIn = !!(name && email); // true, if logged in. Else false.

    this.setState({
      isLoggedIn
    });

    return isLoggedIn;
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <Overview />
        ) : (
          <LoginButton
            onSuccessfulLogin={this.onSuccessfulLogin}
            onFailureLogin={this.onFailureLogin}
          />
        )}
      </div>
    );
  }
}
