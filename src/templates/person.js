import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout";

const Person = ({ data: { allPeopleJson: { edges } } }) => {
  const person = edges[0].node;

  return (
    <Layout>
      <Link to='/people/'><h2>People</h2></Link>
      <h3>{person.fieldData.Full_Name}</h3>
      <div dangerouslySetInnerHTML={{ __html: person.fieldData.DescriptionHTML }} />
    </Layout>
  );
};

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
