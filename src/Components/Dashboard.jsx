import React, { Component } from 'react';

export default class Dashboard extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', backgroundColor: 'black' }}>
        <iframe
          title="test"
          width="1200"
          height="1050"
          src="https://datastudio.google.com/embed/reporting/1FvWpQ8viGPPEs5gHP-5j7vI2eyuRTYYJ/page/dwAQ"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    );
  }
}
