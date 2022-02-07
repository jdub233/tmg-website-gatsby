import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import NormalizeP from '../../components/filters/normalizeP';
import Gallery from '../../components/shared/gallery';

import '../detailPage.scss';

function Project({
  data: {
    // eslint-disable-next-line no-unused-vars
    allProjectsJson: { edges: [{ node: { fieldData, portalData } }, ...rest] },
    allAssetsJson: { nodes: assets },
    site: { siteMetadata: { siteUrl } },
  },
}) {
  const project = fieldData;
  const papers = portalData.ProjectPaperJoin_displayProject;

  // For meta tag descriptions; strip html tags and pad with spaces.
  // Then trim all extra spaces from the result.
  const descriptionPlain = fieldData.DescriptionHTML.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();

  // Normally there is only one public collection.
  const collection = portalData.CollectionsForWeb[0];

  // Filter the assets for the primary collection.
  let collectionAssets = null;
  if (collection) {
    // Only allow assets that are part of the primary collection.
    collectionAssets = assets.filter(({ fieldData: { CollectionID } }) => (
      CollectionID === collection.CollectionID
    ));
  }

  return (
    <Layout>
      <Helmet>
        <title>{project.Name}</title>
        <meta name="title" content={project.Name} />
        <meta name="description" content={descriptionPlain} />
        <meta name="og:title" content={project.Name} />
        <meta name="og:url" content={`${siteUrl}/project/${project.slug}`} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content={`${process.env.GATSBY_MEDIA_LIBRARY}/${project.cBadgeRawURL}?width=600`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tangible_media" />
        <meta name="twitter:title" content={project.Name} />
        <meta
          name="twitter:description"
          content={
          (descriptionPlain.length < 200) ? descriptionPlain : `${descriptionPlain.substring(0, 196)} ...`
        }
        />
        <meta name="twitter:image" content={`${process.env.GATSBY_MEDIA_LIBRARY}/${project.cBadgeRawURL}?width=600`} />
        <link rel="canonical" href={`${siteUrl}/project/${project.slug}/`} />
      </Helmet>
      <h2>
        {project.Name}
        {' '}
        <span className="subtitle">{project.Members}</span>
      </h2>
      <div className="detail">
        <img
          className="detail-badge"
          alt={project.Name}
          src={`${process.env.GATSBY_MEDIA_LIBRARY}/${project.cBadgeRawURL}?width=140`}
        />
        <div className="detail-main">
          <NormalizeP className="description" mixedMarkup={project.DescriptionHTML} />

          {collection
            && <Gallery assets={collectionAssets} name={collection.Collections__Name} />}

          {(papers.length > 0) && <h3 className="detail-main-papers">Papers</h3>}
          {papers.map((node) => (
            <div key={node.recordId}>
              <a href={`${process.env.GATSBY_MEDIA_LIBRARY}/${node.Paper_Download_URL}`}>
                {node.Papers_WebView__Title}
              </a>
              {node.Papers_WebView__Venue
                && <span className="venue">{node.Papers_WebView__Venue}</span>}
            </div>
          ))}

        </div>
      </div>
    </Layout>
  );
}

Project.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const query = graphql`
  query($fieldData__slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allProjectsJson(filter: {fieldData: {slug: {eq: $fieldData__slug}}}) {
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
              CollectionID: Collections__CollectionID
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
    allAssetsJson(filter: {fieldData: {Projects__slug: {eq: $fieldData__slug}}}) {
      nodes {
        recordId
        fieldData {
          AssetID
          Description
          Projects__slug
          Title
          RelativeURL: sc_asset_relative_url
          CollectionID
          Collections__ForWeb
        }
      }
    }
  }
`;

export default Project;
