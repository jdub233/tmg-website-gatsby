import React from "react";

import Layout from '../components/layout'
import PeopleList from "../components/peopleList";

export default (data) => (
  <div>
    <Layout>
      <h2>People</h2>
      <PeopleList />
    </Layout>
  </div>
)
