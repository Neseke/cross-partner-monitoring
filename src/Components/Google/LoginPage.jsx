import React, { Component } from 'react';

import { Panel, Jumbotron } from 'react-bootstrap';

import LoginButton from './LoginButton';
import BasePanel from '../Misc/BasePanel';
import Logo from '../Misc/Logo';

const STYLES = {
  page: {
    textAlign: 'center'
  },
  jumbotron: {
    backgroundColor: '#2e2d33',
    borderRadius: '5px'
  },
  text: {
    color: 'white',
    marginBottom: '2%'
  },
  accent: {
    color: '#b9ff0f'
  }
};

class LoginPage extends Component {
  render() {
    return (
      <BasePanel>
        <Panel.Body style={STYLES.page}>
          <Jumbotron style={STYLES.jumbotron}>
            <Logo type="white" position="left" />
            {this.props.loginErrorMessage ? (
              <div style={STYLES.text}>
                <p>{this.props.loginErrorMessage}</p>
                <p>If you think you should be allowed, please contact Lukas.Hoepfner@zlyde.com</p>
              </div>
            ) : (
              <div style={STYLES.text}>
                <p>
                  Before you can get started, we need you to Login with your{' '}
                  <u style={STYLES.accent}>Google Account</u>{' '}
                </p>
                <LoginButton
                  onSuccessfulLogin={this.props.onSuccessfulLogin}
                  onFailureLogin={this.props.onFailureLogin}
                />
              </div>
            )}
          </Jumbotron>
        </Panel.Body>
      </BasePanel>
    );
  }
}

export default LoginPage;
