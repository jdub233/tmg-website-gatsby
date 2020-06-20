import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout";
import NormalizeP from "../components/filters/normalizeP";
import ProjectBoxes from "../components/shared/projectBoxes";

import "./person.scss";

const Person = ({ data: { allPeopleJson: { edges } } }) => {
  const person   = edges[0].node.fieldData;
  const papers = edges[0].node.portalData.PeoplePaperJoin_People_WebView;
  const projects = edges[0].node.portalData.PeopleProjectJoin_People_WebView;

  // Format portal data to match the format of the shared ProjectBoxes component.
  const projectsNodes = projects.map( ( node ) => (
    {
      id: node.Projects_People_WebView__slug, 
      fieldData: {
        slug: node.Projects_People_WebView__slug,
        Name: node.Projects_People_WebView__Name,
        cBadgeRawURL: node.Projects_People_WebView__cBadgeRawURL,
      }
    }
  ) );

  return (
    <Layout>
      <h2>
        {person.Full_Name} <span className="person-category">{person.Category}</span>
      </h2>
      <div className="person-details">
        <img className="badge" alt={person.Full_Name} src={`${process.env.MEDIA_LIBRARY}/${person.cBadgeRawURL}?width=140`} />
        <NormalizeP className="description" mixedMarkup={person.DescriptionHTML} />
      </div>
      <h4>Papers</h4>
      {papers.map((node) => (
        <div key={node.Papers__ID}>
          <a href={`${process.env.MEDIA_LIBRARY}/${node.Papers_People_WebView__SC_published_pdf_Download_URL}`}>{node.Papers_People_WebView__Title}</a>
        </div>
      ))}
      <h4>Projects</h4>
      <ProjectBoxes projects={projectsNodes} />
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
            PeoplePaperJoin_People_WebView {
              Papers_People_WebView__Publication_URL
              Papers_People_WebView__Title
              Papers_People_WebView__SC_published_pdf_Download_URL
            }
            PeopleProjectJoin_People_WebView {
              Projects_People_WebView__Name
              Projects_People_WebView__cBadgeRawURL
              Projects_People_WebView__slug
            }
          }
        }
      }
    }
  }
`
export default Person
