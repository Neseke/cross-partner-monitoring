import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Partner from '../Partners/Partner';
import Dashboard from '../Dashboard';

export default class Overview extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/partners" component={Partner} />
          <Route path="/reports/ath" component={Dashboard} />
        </div>
      </Router>
    );
  }
}
