import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import NormalizeP from "../components/filters/normalizeP";
import Gallery from "../components/shared/gallery";

import "./detailPage.scss"

const Project = ({ data: { allProjectsJson: { edges: [ {node: { fieldData, portalData }}, ...rest ] }, allAssetsJson: { nodes: assets }, site: { siteMetadata: { siteUrl } } } }) => {
  const project = fieldData;
  const papers = portalData.ProjectPaperJoin_displayProject;

  // Normally there is only one public collection.
  const collection = portalData.CollectionsForWeb[0];

  // Filter the assets for the primary collection.
  let collectionAssets = null;
  if (collection) { 
    // Only allow assets that are part of the primary collection.
    collectionAssets = assets.filter((asset) => asset.fieldData.CollectionID === collection.Collections__CollectionID); 
  }

  return(
    <Layout>
      <Helmet>
        <title>{project.Name}</title>
        <meta property="og:title" content={project.Name} />
        <meta property="og:url" content={`${siteUrl}/project/${project.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${process.env.MEDIA_LIBRARY}/${project.cBadgeRawURL}?width=600`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tangible_media" />
        <meta name="twitter:title" content={project.Name} />
        <meta name="twitter:image" content={`${process.env.MEDIA_LIBRARY}/${project.cBadgeRawURL}?width=600`} />
        <link rel="canonical" href={`${siteUrl}/project/${project.slug}`} />
      </Helmet>
      <h2>{project.Name} <span className="subtitle">{project.Members}</span></h2>
      <div className="detail">
        <img 
          className="detail-badge" 
          alt={project.Name} 
          src={`${process.env.MEDIA_LIBRARY}/${project.cBadgeRawURL}?width=140`}
        />
        <div className="detail-main">
          <NormalizeP className="description" mixedMarkup={project.DescriptionHTML} />

          {collection &&
            <Gallery assets={collectionAssets} name={collection.Collections__Name} />
          }
          
          <h4>Papers</h4>
          {papers.map((node) => (
            <div key={node.recordId}>
              <a href={`${process.env.MEDIA_LIBRARY}/${node.Paper_Download_URL}`}>
                {node.Papers_WebView__Title}
              </a>
              {node.Papers_WebView__Venue &&
                <span className="venue">{node.Papers_WebView__Venue}</span>
              }
            </div>
          ))}

        </div>
      </div>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
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
              Paper_Download_URL: Papers_WebView__SC_published_pdf_Download_URL
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
