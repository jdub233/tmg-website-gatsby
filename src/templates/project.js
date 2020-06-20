import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout";
import NormalizeP from "../components/filters/normalizeP";

import "./detailPage.scss"

const Project = ({ data: { allProjectsJson: { edges } } }) => {
  const project = edges[0].node.fieldData;
  const papers = edges[0].node.portalData.ProjectPaperJoin_displayProject;

  return(
    <Layout>
      <h2>{project.Name} <span className="subtitle">{project.Members}</span></h2>
      <div className="details">
        <img 
          className="badge" 
          alt={project.Name} 
          src={`${process.env.MEDIA_LIBRARY}/${project.cBadgeRawURL}?width=140`}
        />
        <NormalizeP className="description" mixedMarkup={project.DescriptionHTML} />
      </div>
      <h4>Papers</h4>
      {papers.map((node) => (
        <div key={node.recordId}>
          <a href={`${process.env.MEDIA_LIBRARY}/${node.Papers_WebView__SC_published_pdf_Download_URL}`}>
            {node.Papers_WebView__Title}
          </a>
          {node.Papers_WebView__Venue && 
            <span className="venue">{node.Papers_WebView__Venue}</span>
          }
        </div>
      ))}

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
          portalData {
            CollectionsForWeb {
              Collections__CollectionID
            }
            ProjectPaperJoin_displayProject {
              Papers_WebView__Title
              Papers_WebView__Publication_URL
              Papers_WebView__SC_published_pdf_Download_URL
              Papers_WebView__Venue
              recordId
            }
            PeopleProjectJoin {
              People__Full_Name
            }
          }
        }
      }
    }
  }
`

export default Project

