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
          <Route path={`${process.env.PUBLIC_URL}/reports/overview`} component={Partner} />
          {partners.map(partner => (
            <Route
              key={partner.uri}
              path={`${process.env.PUBLIC_URL}/${partner.uri}`}
              component={Dashboard}
            />
          ))}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}
