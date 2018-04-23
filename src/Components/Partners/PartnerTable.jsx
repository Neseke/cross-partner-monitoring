import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { getPartners } from './utils';

export default class PartnerTable extends Component {
  render() {
    const partners = getPartners();
    return (
      <Table responsive>
        <thead>
          <tr>
            {Object.getOwnPropertyNames(partners[0]).map(prop => (
              <th key={prop}>{prop.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {partners.map(partner => {
            const props = Object.getOwnPropertyNames(partner);
            return <tr key={partner}>{props.map(prop => <td key={prop}>{partner[prop]}</td>)}</tr>;
          })}
        </tbody>
      </Table>
    );
  }
}
