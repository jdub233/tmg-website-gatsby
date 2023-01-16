import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import NormalizeP from '../../components/filters/normalizeP';
import ProjectBox from '../../components/shared/projectBox';

import '../detailPage.scss';

// eslint-disable-next-line no-unused-vars
function Person({ data: { allPeopleJson: { edges: [{ node }, ...rest] } } }) {
  const {
    FullName,
    Category,
    cBadgeRawURL,
    DescriptionHTML,
  } = node.fieldData;

  const papers = node.portalData.PeoplePaperJoin_People_WebView;
  // Filter out projects with no slug, they are artifacts from unpublished projects.
  const projects = node.portalData.PeopleProjectJoin_People_WebView.filter(({ Projects_People_WebView__slug: slug }) => slug !== '');

  // Format portal data to match the format of the shared ProjectBox component.
  const projectsNodes = projects.map((project) => (
    {
      id: project.Projects_People_WebView__slug,
      fieldData: {
        slug: project.Projects_People_WebView__slug,
        Name: project.Projects_People_WebView__Name,
        cBadgeRawURL: project.Projects_People_WebView__cBadgeRawURL,
      },
    }
  ));

  return (
    <Layout>
      <h2>
        {FullName}
        <span className="subtitle">{Category}</span>
      </h2>
      <div className="detail">
        <img className="detail-badge" alt={FullName} src={`${process.env.GATSBY_MEDIA_LIBRARY}/${cBadgeRawURL}?width=140`} />
        <NormalizeP className="description" mixedMarkup={DescriptionHTML} />
      </div>

      {projectsNodes.length > 0 && <h3>Projects</h3>}
      <div className="projects-items">
        {projectsNodes.map((project) => <ProjectBox key={project.id} node={project} />)}
      </div>

      {papers.length > 0 && <h3 className="papers-title">Papers</h3>}
      {papers.map((paper) => (
        <div key={paper.recordId}>
          <a href={`${process.env.GATSBY_MEDIA_LIBRARY}/${paper.Download_URL}`}>{paper.Title}</a>
          {paper.Venue && paper.Publication_URL
            && (
              <a className="publication-url" href={paper.Publication_URL}>
                <span className="venue">
                  {paper.Venue}
                  {' '}
                  {paper.PaperYear}
                </span>
              </a>
            )}
          {!paper.Publication_URL && paper.Venue
            && (
              <span className="venue">
                {paper.Venue}
                {' '}
                {paper.PaperYear}
              </span>
            )}
        </div>
      ))}
    </Layout>
  );
}

Person.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const query = graphql`
  query($fieldData__slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allPeopleJson(filter: { fieldData: {slug: {eq: $fieldData__slug} } } ) {
      edges {
        node {
          fieldData {
            slug
            First_Name
            FullName: Full_Name
            Last_Name
            DescriptionHTML
            Category
            BadgeContainerURL
            Title
            cBadgeRawURL
          }
          portalData {
            PeoplePaperJoin_People_WebView {
              recordId
              Publication_URL: Papers_People_WebView__Publication_URL
              Title: Papers_People_WebView__Title
              Download_URL: Papers_People_WebView__SC_published_pdf_Download_URL
              Venue: Papers_People_WebView__Venue
              PaperYear: PeoplePaperJoin_People_WebView__cPaperYear
            }
            PeopleProjectJoin_People_WebView {
              recordId
              Projects_People_WebView__Name
              Projects_People_WebView__cBadgeRawURL
              Projects_People_WebView__slug
            }
          }
        }
      }
    }
  }
`;

export default Person;

export function Head({
  data: {
    allPeopleJson: { edges: [{ node: { fieldData } }] },
    site: { siteMetadata: { siteUrl } },
  },
}) {
  const {
    FullName, DescriptionHTML, slug, cBadgeRawURL,
  } = fieldData;

  const descriptionPlain = DescriptionHTML.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();

  return (
    <>
      <title>
        Tangible Media Group |
        {' '}
        {fieldData.FullName}
      </title>
      <meta name="title" content={FullName} />
      <meta name="description" content={descriptionPlain} />
      <meta name="og:title" content={FullName} />
      <meta name="og:url" content={`${siteUrl}/person/${slug}`} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={`${process.env.GATSBY_MEDIA_LIBRARY}/${cBadgeRawURL}?width=600`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tangible_media" />
      <meta name="twitter:title" content={FullName} />
      <meta
        name="twitter:description"
        content={
          (descriptionPlain.length < 200) ? descriptionPlain : `${descriptionPlain.substring(0, 196)} ...`
        }
      />
      <meta name="twitter:image" content={`${process.env.GATSBY_MEDIA_LIBRARY}/${cBadgeRawURL}?width=600`} />
      <link rel="canonical" href={`${siteUrl}/person/${slug}`} />
    </>
  );
}
