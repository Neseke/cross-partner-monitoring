import React, { Component } from 'react';

import Overview from './Components/Navigation/Overview';
import LoginPage from './Components/Google/LoginPage';

import { getLocalStorageItems, handleSuccessfullLogin, handleFailureLogin } from './utils';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isAllowedToLogin: true
    };

    this.onSuccessfulLogin = this.onSuccessfulLogin.bind(this);
    this.onFailureLogin = this.onFailureLogin.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  // use this function as callback when the user successfully logged in
  onSuccessfulLogin(googleAuthResponse) {
    const isAllowedToLogin = handleSuccessfullLogin(googleAuthResponse);

    this.setState({ isAllowedToLogin });

    if (isAllowedToLogin) this.setState({ isLoggedIn: true });
  }

  // use this function as callback when the google login failed
  onFailureLogin() {
    handleFailureLogin();

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
          <LoginPage
            onSuccessfulLogin={this.onSuccessfulLogin}
            onFailureLogin={this.onFailureLogin}
            loginErrorMessage={
              this.state.isAllowedToLogin ? '' : 'You are not allowed to log into this app.'
            }
          />
        )}
      </div>
    );
  }
}
