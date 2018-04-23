import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class BasePanel extends Component {
  render() {
    return <Panel style={{ margin: '0px auto' }}>{this.props.children}</Panel>;
  }
}
