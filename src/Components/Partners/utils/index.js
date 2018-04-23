import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import partners from '../../../partners.json';

/**
 * @param { Array } partners - The partners that will appear in the partner table and
 * for which we need a report.
 * @returns { Array } - A copy of partners, but instead of an url string we now have
 * a react-router Link.
 */
function createReactRouterLink(partners = []) {
  return partners.map(partner => {
    return {
      ...partner,
      url: (
        <Router>
          <Link to={partner.url} onClick={() => window.location.reload()}>
            {`athletia.net${partner.url}`}
          </Link>
        </Router>
      )
    };
  });
}

export function getPartners() {
  return createReactRouterLink(partners);
}

export default {
  getPartners
};
