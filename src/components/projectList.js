import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ProjectList = () => {
    const data = useStaticQuery(graphql`
    {
      allProjectsJson(sort: {fields: [fieldData___Project_Year], order: DESC}) {
        edges {
          node {
            id
            recordId
            fieldData {
              ForWeb
              slug
              Name
              BadgeContainerURL
              Project_Year
            }
          }
        }
      }
    }
  `)
    return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ProjectList
