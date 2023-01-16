import React from 'react';

import PaperList from '../components/paperList';
import Layout from '../components/layout';

function Papers() {
  return (
    <Layout>
      <h2>Papers</h2>
      <PaperList />
    </Layout>
  );
}

export default Papers;

export function Head() {
  return (
    <title>Tangible Media Group | Papers</title>
  );
}
