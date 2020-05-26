import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const EventsList = () => {
  const data = useStaticQuery(graphql`
    {
      allEventsJson {
        edges {
          node {
            fieldData {
              Event_Year
              Event_Link
              EventID
              Venue_Name
              Venue_Link
              Presenter
              Title
              Type
            }
          }
        }
      }
    }
  `);
  
  const { allEventsJson: { edges: events } } = data;

  // Group events by year with reduce.
  const eventsByYearObj = events.reduce( (accumulator, { node }) => {
    accumulator[node.fieldData.Event_Year] = [ ...accumulator[node.fieldData.Event_Year] || [], node ];
    return accumulator;
  }, {} );

  return (
    Object.entries(eventsByYearObj).reverse().map( ([key, events]) => (
      <div key={key}>
        <h3>{key}</h3>
        <EventYearList events={events} />
      </div>
    ) )
    
  );
}

const EventYearList = ( {events} ) => (
  <div className="eventYearList">
    {events.map( ( node ) => (
      <div>{node.fieldData.Title}</div>
    ) )}
  </div>
);

export default EventsList
