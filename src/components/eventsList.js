import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import YearNav from "./filters/yearNav";
import FormattedDate from "../components/shared/formattedDate";

import "./eventsList.scss";

const EventsList = () => {
  const data = useStaticQuery(graphql`
    {
      allEventsJson {
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
              cDateFragment
            }
            recordId
          }
        }
      }
    }
  `);
  
  const { allEventsJson: { edges: events } } = data;

  const [year, setYear] = useState('show all');
  const [eventType, setEventType] = useState('show all');

  let filteredEvents = events;

  //filter by type before reducing
  if (eventType !== 'show all') {
    filteredEvents = events.filter(
      ({ node: { fieldData: { Type } } }) => Type === eventType
    );
  }

  // Group events by year with reduce.
  let eventsByYearObj = filteredEvents.reduce( (accumulator, { node }) => {
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
    (filteredYear.length !==0) 
      ? eventsByYearObj = {
        [filteredYear[0][0]]: filteredYear[0][1]
      }
      : eventsByYearObj = {};
    
  }

  return (
    <div>
      <TypeFilter setEventType={setEventType} eventType={eventType} />
      <YearNav years={years} setYear={setYear} currentYear={year} />
      {Object.entries(eventsByYearObj).reverse().map( ([key, events]) => (
        <div className="year" key={key}>
          <h3 className="year-header">{key}</h3>
          <EventYearList events={events} />
        </div>
      ) )}
    </div> 
  );
}

const TypeFilter = ({setEventType, eventType}) => (
  <div className="type-filter">
    <button className={`type-filter-option${(eventType === 'Exhibition') ? '-selected' : ''}`} onClick={() => setEventType('Exhibition')}>Exhibitions</button>
    <button className={`type-filter-option${(eventType === 'Conference') ? '-selected' : ''}`} onClick={() => setEventType('Conference')}>Conferences</button>
    <button className={`type-filter-option${(eventType === 'Presentation') ? '-selected' : ''}`} onClick={() => setEventType('Presentation')}>Presentations</button>
    <button className={`type-filter-option${(eventType === 'show all') ? '-selected' : ''}`} onClick={() => setEventType('show all')}>show all</button>
  </div>
);

const EventYearList = ( { events } ) => (
  <div className="events">
    {events.map(({ recordId, fieldData: { Title, Venue_Name, Venue_Link, Presenter, EventID, Event_Year, Event_Month, Type, cDateFragment } } ) => {

      return (
        <div className="events-item" key={EventID}>
          <h4>
            <Link to={`/event/${recordId}`}>{Title}</Link>
          </h4>
          <div className="events-item-venue">
            {Venue_Link 
              ? <a href={Venue_Link}>{Venue_Name}</a>
              : <div>{ Venue_Name }</div>
            }
          </div>
          <div className="event-details">
            { (Type === "Presentation" && Presenter) ? `${Presenter} / ` : null }
            <FormattedDate dateString={cDateFragment} />
          </div>
        </div>
      )}
    )}
  </div>
);

export default EventsList
