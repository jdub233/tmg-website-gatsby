import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

function FourOhFour() {
  return (
    <Layout>
      <h2>404 sorry not found!</h2>
      <p>
        The link you requested could not be found. It may have been moved or deleted.
        If you have any questions, please
        {' '}
        <Link to="/contact-admissions/">contact us.</Link>
      </p>
    </Layout>
  );
}

export default FourOhFour;

export function Head() {
  return (
    <title>Tangible Media Group | Not Found!</title>
  );
}
