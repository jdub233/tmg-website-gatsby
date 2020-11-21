import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import ProjectList from "../components/projectList";

export default () => (
  <Layout>
    <Helmet>
      <title>Tangible Media Group | Projects</title>
    </Helmet>
    <h2>Projects</h2>
    <ProjectList />
  </Layout>
)
