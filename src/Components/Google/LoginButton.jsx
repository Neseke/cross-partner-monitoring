import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class LoginButton extends Component {
  render() {
    return (
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={this.props.onSuccessfulLogin}
        onFailure={this.props.onFailureLogin}
        isSignedIn
      />
    );
  }
}

export default LoginButton;
