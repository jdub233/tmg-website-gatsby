import React from "react";
import { graphql } from "gatsby";

import Layout from '../components/layout';
import ProjectBoxes from "../components/shared/projectBoxes";

import Statement from "../components/vision/statement";

export default ({ data: { allProjectsJson: { edges: projects } } }) => {

  const projectsNodes = projects.slice(0, 6).map( ( {node} ) => node );

  return (
    <Layout>
      <Statement />
      <div>
        {projectsNodes.length > 0 && <h3>Featured Projects</h3>}
        <ProjectBoxes projects={projectsNodes} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    allProjectsJson(filter: {fieldData: {Featured: {eq: "Yes"}}}, sort: {fields: fieldData___Project_Year, order: DESC}) {
      edges {
        node {
          id
          recordId
          fieldData {
            cBadgeRawURL
            Name
            slug
          }
        }
      }
    }
  }
`
