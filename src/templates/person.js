import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout";

const Person = ({ data }) => <Layout><pre>{JSON.stringify(data, null, 4)}</pre></Layout>

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
