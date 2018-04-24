import React, { Component } from 'react';

import Overview from './Components/Navigation/Overview';

require('dotenv').config('../.env');

export default class App extends Component {
  render() {
    return <Overview />;
  }
}
