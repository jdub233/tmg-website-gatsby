import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import EventsList from '../components/eventsList';

function Events() {
  return (
    <Layout>
      <h2>Events</h2>
      <EventsList />
    </Layout>
  );
}

export default Events;

export function Head() {
  return (
    <title>Tangible Media Group | Events</title>
  );
}
