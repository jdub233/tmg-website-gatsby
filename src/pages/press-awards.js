import React from 'react';

import Layout from '../components/layout';
import AwardList from '../components/awardList';

function PressAwards() {
  return (
    <Layout>
      <h2>Press &amp; Awards</h2>
      <AwardList />
    </Layout>
  );
}

export default PressAwards;

export function Head() {
  return (
    <title>Tangible Media Group | Press &amp; Awards</title>
  );
}
