import { Component } from 'react';

import { getIframeByUri } from './Partners/utils';

export default class Dashboard extends Component {
  render() {
    return getIframeByUri('ath') || null;
  }
}
