import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

export default class SubHeader extends Component {
  render() {
    return (
      <PageHeader>
        <small>{this.props.message}</small>
      </PageHeader>
    );
  }
}
