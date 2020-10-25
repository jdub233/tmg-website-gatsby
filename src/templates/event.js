import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import NormalizeP from "../components/filters/normalizeP";
import FormattedDate from "../components/shared/formattedDate";

import "./event.scss";

const Event = ({ data: { allEventsJson: { edges: [{ node: { fieldData: { Title, Event_Link, Venue_Name, Venue_Link, DescriptionHTML, cDateFragment } } }, ...rest ] } } } ) => (
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
  </Layout>
)

export const query = graphql`
  query($recordId: String!) {
    allEventsJson(filter: {recordId: {eq: $recordId}}) {
      edges {
        node {
          fieldData {
            Event_Year
            Event_Month
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
        }
      }
    }
  }
`

export default Event;
