import React from "react";
import { Helmet } from "react-helmet";

import Layout from '../components/layout'
import PeopleList from "../components/peopleList";

export default () => (
  <Layout>
    <Helmet>
      <title>Tangible Media Group | People</title>
    </Helmet>
    <h2>People</h2>
    <PeopleList />
  </Layout>
)
