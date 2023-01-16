import React from 'react';

import Layout from '../components/layout';
import PeopleList from '../components/peopleList';

function People() {
  return (
    <Layout>
      <h2>People</h2>
      <PeopleList />
    </Layout>
  );
}

export default People;

export function Head() {
  return (
    <title>Tangible Media Group | People</title>
  );
}
