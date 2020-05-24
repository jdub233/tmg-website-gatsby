import React from "react"
import { graphql } from "gatsby"

const Project = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

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

