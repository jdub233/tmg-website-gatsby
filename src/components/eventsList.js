import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import YearNav from "./filters/yearNav";

import "./eventsList.scss";

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

  const [year, setYear] = useState('show all');

  // Group events by year with reduce.
  let eventsByYearObj = events.reduce( (accumulator, { node }) => {
    accumulator[node.fieldData.Event_Year] = [ ...accumulator[node.fieldData.Event_Year] || [], node ];
    return accumulator;
  }, {} );

  const years = ['show all', ...Object.entries(eventsByYearObj).map((aYear) => aYear[0]).reverse()];

  // Filter to a specific year if one is selected.
  if (year !== 'show all') {
    const filteredYear = Object.entries(eventsByYearObj).filter(
      (aYear) => aYear[0] === year
    );

    // Wraps the filtered results in an object to match the full result object.
    // Seems like there ought to be an easier way, but this is at least effective.
    eventsByYearObj = {
      [filteredYear[0][0]]: filteredYear[0][1]
    };
  }


  return (
    <div>
      <YearNav years={years} setYear={setYear} currentYear={year} />
      {Object.entries(eventsByYearObj).reverse().map( ([key, events]) => (
        <div key={key}>
          <h3>{key}</h3>
          <EventYearList events={events} />
        </div>
      ) )}
    </div> 
  );
}

const EventYearList = ( { events } ) => (
  <div className="eventYearList">
    {events.map( ( { fieldData: { Title, Venue_Name, Venue_Link, Presenter, Event_Year, Type } } ) => (
      <div>
        <h4>{Title}</h4>
        <div className="venue">
          {Venue_Link 
            ? <a href={Venue_Link}>{Venue_Name}</a>
            : <div>{ Venue_Name }</div>
            }
        </div>
        <div className="event-details">
            { (Type === "Presentation") ? `${Presenter} / ` : null }
            { Event_Year ? `${Event_Year}` : null }
        </div>

      </div>
    ) )}
  </div>
);

export default EventsList
