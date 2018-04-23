import { Component } from 'react';

import { getIframeByUri } from './Partners/utils/iframe';

export default class Dashboard extends Component {
  render() {
    const { path } = this.props.match;
    const uri = path.replace('/reports/', '');
    return getIframeByUri(uri) || null;
  }
}
