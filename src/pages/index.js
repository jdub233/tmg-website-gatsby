import React from "react";
import { graphql } from "gatsby";

import "./home-vision.scss";
import gui from "../img/vision-image-gui.jpg";

import Layout from '../components/layout';
import ProjectBoxes from "../components/shared/projectBoxes";
import VisionHeadline from "../components/shared/visionHeadline";

export default ({ data: { allProjectsJson: { edges: projects } } }) => {

  const projectsNodes = projects.slice(0, 6).map( ( {node} ) => node );

  return (
    <Layout>
      <div className="vision-statement">
        <VisionHeadline />
        <div className="vision-image">
          <img alt="TUI iceberg" src={gui} />
        </div>
      </div>
      <div className="text-block">
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
