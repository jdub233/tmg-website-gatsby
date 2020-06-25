import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout";
import NormalizeP from "../components/filters/normalizeP";

import "./detailPage.scss"

const Project = ({ data: { allProjectsJson: { edges }, allAssetsJson: { nodes: assets } } }) => {
  const project = edges[0].node.fieldData;
  const papers = edges[0].node.portalData.ProjectPaperJoin_displayProject;

  // Normally there is only one public collection.
  const collection = edges[0].node.portalData.CollectionsForWeb[0];

  // Filter the assets for the primary collection.
  let collectionAssets = null;
  let gallery = null;
  if (collection) { 
    // Only allow assets that are part of the primary collection.
    collectionAssets = assets.filter((asset) => asset.fieldData.CollectionID === collection.Collections__CollectionID); 

    gallery = collectionAssets.map(({ fieldData: { AssetID, Title, sc_asset_relative_url } }) => (
      <div key={AssetID}>
        <img
          src={`${process.env.MEDIA_LIBRARY}/${sc_asset_relative_url}?width=60`}
          alt={Title}
        />
      </div>
    ));
  }

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
      
      {collection && <h4>{collection.Collections__Name}</h4>}
      {collection &&
        <img
          src={`${process.env.MEDIA_LIBRARY}/${collectionAssets[0].fieldData.sc_asset_relative_url}?width=780`}
          alt={collectionAssets[0].fieldData.Title}
        />
      }
      {gallery}

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
    allProjectsJson(filter: {fieldData: {slug: {eq: $slug}}}) {
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
              Collections__Name
              Collections__ForWeb
              Collections__Description
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
    allAssetsJson(filter: {fieldData: {Projects__slug: {eq: $slug}}}) {
      nodes {
        recordId
        fieldData {
          AssetID
          Description
          Projects__slug
          Title
          sc_asset_relative_url
          CollectionID
          Collections__ForWeb
        }
      }
    }
  }
`

export default Project
