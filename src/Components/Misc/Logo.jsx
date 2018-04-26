import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class Logo extends Component {
  render() {
    const logoName = `logo_${this.props.type}.png`;

    return (
      <Image
        style={{
          width: '172px',
          height: '87px',
          marginLeft: '2%',
          marginRight: '2%',
          position: 'absolute',
          [this.props.position]: '10px'
        }}
        responsive
        src={`../../../${logoName}`}
        rounded
      />
    );
  }
}

export default Logo;
