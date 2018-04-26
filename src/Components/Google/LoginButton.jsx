import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import { onSuccessfulLogin, onFailureLogin } from './utils';

class LoginButton extends Component {
  render() {
    return (
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Login"
        onSuccess={onSuccessfulLogin}
        onFailure={onFailureLogin}
      />
    );
  }
}

export default LoginButton;
