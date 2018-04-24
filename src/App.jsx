import React, { Component } from 'react';

import Overview from './Components/Navigation/Overview';
import LoginButton from './Components/Google/LoginButton';

require('dotenv').config('../.env');

export default class App extends Component {
  render() {
    return (
      <div>
        <Overview />
        <LoginButton />
      </div>
    );
  }
}
