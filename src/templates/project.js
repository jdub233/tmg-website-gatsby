import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout";

const Project = ({ data: { allProjectsJson: { edges } } }) => {
  const project = edges[0].node;

  return(
    <Layout>
      <h2><Link to='/projects/'>Projects</Link></h2>
      <h3>{project.fieldData.Name}</h3>
      <div dangerouslySetInnerHTML={{ __html: project.fieldData.DescriptionHTML }} />
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    allProjectsJson(filter: { fieldData: { slug: { eq: $slug } } } ) {
      edges {
        node {
          fieldData {
            slug
            BadgeContainerURL
            DescriptionHTML
            Members
            Name
            ProjectID
            Project_Year
            cBadgeRawURL
          }
        }
      }
    }
  }
`

export default Project

