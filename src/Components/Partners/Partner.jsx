import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import PartnerTable from './PartnerTable';
import PageHeader from '../Misc/SubHeader';
import BasePanel from '../Misc/BasePanel';

import { getPartners } from './utils';

const MESSAGE = 'Following Partners already exist';

export default class Partners extends Component {
  render() {
    const partners = getPartners().map(partner => {
      return {
        ...partner,
        url: (
          <Router>
            <Link to={partner.url} onClick={() => window.location.reload()}>
              {`athletia.net${partner.url}`}
            </Link>
          </Router>
        )
      };
    });

    return (
      <BasePanel>
        <Panel.Heading>
          <PageHeader message={MESSAGE} />
        </Panel.Heading>
        <Panel.Body>
          <PartnerTable partners={partners} />
        </Panel.Body>
      </BasePanel>
    );
  }
}
