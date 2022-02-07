import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import EventsList from '../components/eventsList';

function Events() {
  return (
    <Layout>
      <Helmet>
        <title>Tangible Media Group | Events</title>
      </Helmet>
      <h2>Events</h2>
      <EventsList />
    </Layout>
  );
}

export default Events;
