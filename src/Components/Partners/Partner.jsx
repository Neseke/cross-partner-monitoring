import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import PartnerTable from './PartnerTable';
import PageHeader from '../Misc/SubHeader';
import BasePanel from '../Misc/BasePanel';

import { getPartners } from './utils';

const MESSAGE = 'Following Partners already exist';

export default class Partners extends Component {
  render() {
    const partners = getPartners();

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
