import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout";

const Person = ({ data: { allPeopleJson: { edges } } }) => {
  const person = edges[0].node;
  const papers = edges[0].node.portalData.PeoplePaperJoin;

  return (
    <Layout>
      <Link to='/people/'><h2>People</h2></Link>
      <h3>{person.fieldData.Full_Name}</h3>
      <div dangerouslySetInnerHTML={{ __html: person.fieldData.DescriptionHTML }} />
      <h4>Papers</h4>
      {papers.map((node) => <div key={node.Papers__ID}>{node.Papers__Title}</div>)}
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
          portalData {
            PeoplePaperJoin {
              Papers__PaperID
              Papers__Title
              Papers__SC_published_pdf_Download_URL
            }
          }
        }
      }
    }
  }
`
export default Person
