import React, { Component } from 'react';

import { Panel, Jumbotron } from 'react-bootstrap';

import LoginButton from './LoginButton';
import BasePanel from '../Misc/BasePanel';

const STYLES = {
  page: {
    textAlign: 'center'
  },
  jumbotron: {
    backgroundColor: '#2e2d33',
    borderRadius: '25px'
  },
  text: {
    color: '#b9ff0f',
    marginBottom: '2%'
  }
};

class LoginPage extends Component {
  render() {
    return (
      <BasePanel>
        <Panel.Body style={STYLES.page}>
          <Jumbotron style={STYLES.jumbotron}>
            <h3 style={STYLES.text}>
              Before you can get started, we need you to Login with your Google Account
            </h3>
            <LoginButton
              onSuccessfulLogin={this.props.onSuccessfulLogin}
              onFailureLogin={this.props.onFailureLogin}
            />
          </Jumbotron>
        </Panel.Body>
      </BasePanel>
    );
  }
}

export default LoginPage;
