import React from "react"
import { graphql } from "gatsby"

const Person = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  query($slug: String!) {
    allPeopleJson(filter: { fieldData: {slug: {eq: $slug} } } ) {
      edges {
        node {
          fieldData {
            slug
            First_Name
            Full_Name
            Last_Name
            DescriptionHTML
            Category
            BadgeContainerURL
            Title
            cBadgeRawURL
          }
        }
      }
    }
  }
`
export default Person
