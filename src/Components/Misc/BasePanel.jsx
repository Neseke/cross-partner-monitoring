import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

const STYLE = {
  margin: '20px 10px 10px 10px'
};

export default class BasePanel extends Component {
  render() {
    return <Panel style={STYLE}>{this.props.children}</Panel>;
  }
}
