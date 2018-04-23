import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Partner from '../Partners/Partner';
import Dashboard from '../Dashboard';

import { getPartners } from '../Partners/utils/partners';

export default class Overview extends Component {
  render() {
    const partners = getPartners();
    return (
      <Router>
        <div>
          <Route path="/partners" component={Partner} />
          {partners.map(partner => (
            <Route path={`/reports/${partner.uri}`} component={Dashboard} />
          ))}
        </div>
      </Router>
    );
  }
}
