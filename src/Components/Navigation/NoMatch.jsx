import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class NoMatch extends Component {
  render() {
    return (
      <Jumbotron style={{ textAlign: 'center' }}>
        <h2>We are sorry, but there is nothing here!</h2>
        <p>Referring to the URL you entered, this is where you expected your report:</p>
        <h1>{`athletia.net${this.props.location.pathname}`}</h1>
        <p>Make sure this URL is the one we sent you. If so, please contact</p>
        <h2>
          <u>Lukas.Hoepfner@zlyde.com</u>
        </h2>
      </Jumbotron>
    );
  }
}

export default NoMatch;
