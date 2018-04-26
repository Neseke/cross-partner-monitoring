import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';

import Logo from './Logo';

const Headline = () => (
  <Grid>
    <Row>
      <Col xs={12} md={8}>
        Cross Partner Monitoring App
      </Col>
      <Col xs={6} md={4}>
        <Logo type="black" />
      </Col>
    </Row>
  </Grid>
);

export default class SubHeader extends Component {
  render() {
    return (
      <PageHeader>
        <Headline />
      </PageHeader>
    );
  }
}
