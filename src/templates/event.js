import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import NormalizeP from "../components/filters/normalizeP";
import FormattedDate from "../components/shared/formattedDate";
import ProjectBoxes from "../components/shared/projectBoxes";
import Gallery from "../components/shared/gallery";

import "./event.scss";

const Event = ({ data: { allEventsJson: { edges: [{ node: { fieldData, portalData } }, ...rest] }, allAssetsJson } } ) => {
  const { Title, Event_Link, Venue_Name, Venue_Link, DescriptionHTML, cDateFragment } = fieldData;
  const { proj_portal, Collections_Events_WebView: Collections } = portalData;
  const { nodes: assets  } = allAssetsJson;

  // Filter out projects with no slug, they are artifacts from unpublished projects.
  const projects = proj_portal.filter( ({slug}) => slug !== '' );
  // Format portal data to match the format of the shared ProjectBoxes component.
  const projectsNodes = projects.map((node) => (
    {
      id: node.slug,
      fieldData: {
        slug: node.slug,
        Name: node.Name,
        cBadgeRawURL: node.cBadgeRawURL,
      }
    }
  ));

  // Normally there is only one public collection.
  const collection = Collections[0];
  // Filter the assets for the primary collection.
  let collectionAssets = null;
  if (collection) {
    // Only allow assets that are part of the primary collection.
    collectionAssets = assets.filter( (asset) => asset.fieldData.CollectionID === collection.CollectionID);
  }

  return (
    <Layout>
      <h2>{Title}</h2>
      {Event_Link  &&
        <h4 className="event-link"><a href={Event_Link}>Event Link</a></h4>
      }
      <p className="event-venue">
        {Venue_Link && `Venue: `}
        {Venue_Link
          ? <a href={Venue_Link}>{Venue_Name}</a>
          : Venue_Name
        }
      </p>
      <p className="event-date"><FormattedDate dateString={cDateFragment} /></p>
      <NormalizeP mixedMarkup={DescriptionHTML} />
      {projectsNodes.length > 0 && <h3 className="event-projects">Projects</h3>}
      <ProjectBoxes projects={projectsNodes} />
      <Gallery assets={collectionAssets} name={collection.Name} />
    </Layout>
  )
}

export const query = graphql`
  query($recordId: String!) {
    allEventsJson(filter: {recordId: {eq: $recordId}}) {
      edges {
        node {
          fieldData {
            Event_Link
            EventID
            Venue_Name
            Venue_Link
            Presenter
            Title
            Type
            DescriptionHTML
            cDateFragment
          }
          recordId
          portalData {
            proj_portal {
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
`

export default Event;
