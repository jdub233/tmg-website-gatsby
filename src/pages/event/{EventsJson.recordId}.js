import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import NormalizeP from '../../components/filters/normalizeP';
import FormattedDate from '../../components/shared/formattedDate';
import ProjectBox from '../../components/shared/projectBox';
import Gallery from '../../components/shared/gallery';

import './event.scss';

function Event({
  // eslint-disable-next-line no-unused-vars
  data: { allEventsJson: { edges: [{ node: { fieldData, portalData } }, ...rest] }, allAssetsJson },
}) {
  const {
    Title, EventLink, VenueName, VenueLink, DescriptionHTML, cDateFragment,
  } = fieldData;

  const { projectPortal, Collections_Events_WebView: Collections } = portalData;
  const { nodes: assets } = allAssetsJson;

  // Filter out projects with no slug, they are artifacts from unpublished projects.
  const projects = projectPortal.filter(({ slug }) => slug !== '');
  // Format portal data to match the format of the shared ProjectBox component.
  const projectsNodes = projects.map((node) => (
    {
      id: node.slug,
      fieldData: {
        slug: node.slug,
        Name: node.Name,
        cBadgeRawURL: node.cBadgeRawURL,
      },
    }
  ));

  // Normally there is only one public collection.
  const collection = Collections[0];
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
      <h2>{Title}</h2>
      <div className="event">
        {EventLink
          && <h4 className="event-link"><a href={EventLink}>Event Link</a></h4>}
        <p className="event-venue">
          {VenueLink && 'Venue: '}
          {VenueLink
            ? <a href={VenueLink}>{VenueName}</a>
            : VenueName}
        </p>
        <p className="event-date"><FormattedDate dateString={cDateFragment} /></p>
        <NormalizeP mixedMarkup={DescriptionHTML} />
        {collection
          && <Gallery assets={collectionAssets} name={collection.Name} />}
      </div>

      {projectsNodes.length > 0 && <h3 className="event-projects">Projects</h3>}
      <div className="projects-items">
        {projectsNodes.map((project) => <ProjectBox key={project.id} node={project} />)}
      </div>
    </Layout>
  );
}

Event.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const query = graphql`
  query($recordId: String!) {
    allEventsJson(filter: {recordId: {eq: $recordId}}) {
      edges {
        node {
          fieldData {
            EventLink: Event_Link
            EventID
            VenueName: Venue_Name
            VenueLink: Venue_Link
            Presenter
            Title
            Type
            DescriptionHTML
            cDateFragment
          }
          recordId
          portalData {
            projectPortal: proj_portal {
              Name: Projects_People_WebView__Name
              cBadgeRawURL: Projects_People_WebView__cBadgeRawURL
              slug: Projects_People_WebView__slug
            }
            Collections_Events_WebView {
              CollectionID: Collections_Events_WebView__CollectionID
              Name: Collections_Events_WebView__Name
            }
          }
        }
      }
    }
    allAssetsJson(filter: {fieldData: {gatsby_EventID: {eq: $recordId}}}) {
      nodes {
        recordId
        fieldData {
          AssetID
          Description
          Title
          RelativeURL: sc_asset_relative_url
          CollectionID
          Collections__ForWeb
        }
      }
    }
  }
`;

export default Event;

export function Head({ data: { allEventsJson: { edges: [{ node: { fieldData: { Title } } }] } } }) {
  return (
    <title>{Title}</title>
  );
}
