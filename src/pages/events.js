import React from "react";

import Layout from '../components/layout';
import EventsList from "../components/eventsList";


export default () => (
    <Layout>
        <h2>Events</h2>
        <EventsList />
    </Layout>
);