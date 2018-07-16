import { Component } from 'react';

import getIframeByUri from './utils/iframe';

export default class Dashboard extends Component {
  render() {
    const { path } = this.props.match;
    console.log(path);
    const uri = path.replace('/reports/', '');
    return getIframeByUri(uri) || null;
  }
}
