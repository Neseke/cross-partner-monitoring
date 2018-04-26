import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import Logo from './Logo';

export default class SubHeader extends Component {
  render() {
    return (
      <PageHeader style={{ position: 'relative' }}>
        <Logo type="black" position="right" />
        <small>{this.props.message}</small>
      </PageHeader>
    );
  }
}
