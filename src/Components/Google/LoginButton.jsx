import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = response => {
  console.log(response);
};

class LoginButton extends Component {
  render() {
    return (
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    );
  }
}

export default LoginButton;
