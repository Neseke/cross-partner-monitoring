import React, { Component } from 'react';

import Overview from './Components/Navigation/Overview';
import Header from './Components/Misc/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Overview />
      </div>
    );
  }
}
