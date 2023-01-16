import React from 'react';

import Layout from '../components/layout';
import ProjectList from '../components/projectList';

function Projects() {
  return (
    <Layout>
      <h2>Projects</h2>
      <ProjectList />
    </Layout>
  );
}

export default Projects;

export function Head() {
  return (
    <title>Tangible Media Group | Projects</title>
  );
}
