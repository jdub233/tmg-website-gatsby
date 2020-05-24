import React from "react";

import Layout from "../components/layout";
import ProjectList from "../components/projectList";

export default (data) => (
  <Layout>
    <div>
        <h2>Projects</h2>
        <ProjectList />
    </div>
  </Layout>
)
