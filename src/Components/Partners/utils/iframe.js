import React from 'react';

import partners from '../../../partners.json';

export function getIframes() {
  if (partners.length < 1) return [];

  return partners.map(partner => {
    return {
      ...partner,
      iframe: (
        <div
          style={{ textAlign: 'center', backgroundColor: 'black' }}
          /* eslint-disable react/no-danger */
          dangerouslySetInnerHTML={{ __html: partner.iframe }}
        />
      )
    };
  });
}

export function getIframeByUri(uri = '') {
  const iframes = getIframes();
  // get the specific iframe for the given uri
  return iframes.filter(partner => partner.uri === uri)[0].iframe;
}

export default { getIframeByUri };
