import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Partner from '../Partners/Partner';
import Dashboard from '../Partners/Dashboard';
import NoMatch from './NoMatch';

import { getPartners } from '../Partners/utils/partners';

export default class Overview extends Component {
  render() {
    const partners = getPartners();
    return (
      <Router>
        <Switch>
          <Route path="/reports/overview" component={Partner} basename={process.env.PUBLIC_URL} />
          {partners.map(partner => (
            <Route key={partner.uri} path={`/reports/${partner.uri}`} component={Dashboard} />
          ))}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}
