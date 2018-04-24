import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class Logo extends Component {
  render() {
    return (
      <Image
        style={{
          width: '172px',
          height: '87px'
        }}
        responsive
        src="../../../logo.png"
        rounded
      />
    );
  }
}

export default Logo;
