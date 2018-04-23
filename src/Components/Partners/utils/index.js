import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import partners from '../../../partners.json';

/**
 * @param { String } url - Where the url should direct to
 * @returns { Link } - A valid react-router Link
 */
function createReactRouterLink(url) {
  return (
    <Router>
      {/* we don't want a state, so we can simply reload the window to match the
      url in the browser window */}
      <Link to={url} onClick={() => window.location.reload()}>
        {`athletia.net${url}`}
      </Link>
    </Router>
  );
}

/**
 * @param { Array } partners - The partners that will appear in the partner table and
 * for which we need a report.
 * @returns { Array } - A copy of partners, but instead of an url string we now have
 * a react-router Link.
 */
export function getPartners() {
  return partners.map(partner => {
    return {
      ...partner,
      url: createReactRouterLink(partner.url)
    };
  });
}

export default getPartners;
