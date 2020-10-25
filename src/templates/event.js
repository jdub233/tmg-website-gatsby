import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import NormalizeP from "../components/filters/normalizeP";
import FormattedDate from "../components/shared/formattedDate";
import ProjectBoxes from "../components/shared/projectBoxes";

import "./event.scss";

const Event = ({ data: { allEventsJson: { edges: [{ node: { fieldData, portalData } }, ...rest ] } } } ) => {
  const { Title, Event_Link, Venue_Name, Venue_Link, DescriptionHTML, cDateFragment } = fieldData;

  // Filter out projects with no slug, they are artifacts from unpublished projects.
  const projects = portalData.proj_portal.filter( ({slug}) => slug !== '' );
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
              Name: Projects_for_Events__Name
              cBadgeRawURL: Projects_for_Events__cBadgeRawURL
              slug: Projects_for_Events__slug
            }
          }
        }
      }
    }
  }
`

export default Event;
