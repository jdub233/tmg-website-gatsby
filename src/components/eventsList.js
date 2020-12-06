import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import YearNav from './filters/yearNav';
import FormattedDate from './shared/formattedDate';

import './eventsList.scss';

const eventTypes = [
  'Exhibition',
  'Conference',
  'Presentation',
  'show all',
];

const EventsList = () => {
  const data = useStaticQuery(graphql`
    {
      allEventsJson {
        edges {
          node {
            fieldData {
              EventYear: Event_Year
              Event_Link
              EventID
              VenueName: Venue_Name
              VenueLink: Venue_Link
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

  // Filter by event type from state, before reducing.
  if (eventType !== 'show all') {
    filteredEvents = events.filter(
      ({ node: { fieldData: { Type } } }) => Type === eventType,
    );
  }

  // Group events by year with reduce.
  let eventsByYearObj = filteredEvents.reduce((accumulator, { node }) => {
    const { fieldData: { EventYear } } = node;

    accumulator[EventYear] = [...accumulator[EventYear] || [], node];
    return accumulator;
  }, {});

  const years = ['show all', ...Object.entries(eventsByYearObj).map((aYear) => aYear[0]).reverse()];

  // Filter to a specific year if one is selected.
  if (year !== 'show all') {
    const filteredYear = Object.entries(eventsByYearObj).filter(
      (aYear) => aYear[0] === year,
    );

    // Wraps the filtered results in an object to match the full result object.
    // Seems like there ought to be an easier way, but this is at least effective.
    (filteredYear.length !== 0)
      ? eventsByYearObj = {
        [filteredYear[0][0]]: filteredYear[0][1],
      }
      : eventsByYearObj = {};
  }

  return (
    <div>
      <TypeFilter setEventType={setEventType} eventType={eventType} />
      <YearNav years={years} setYear={setYear} currentYear={year} />
      {Object.entries(eventsByYearObj).reverse().map(([key, eventsThisYear]) => (
        <div className="year" key={key}>
          <h3 className="year-header">{key}</h3>
          <EventYearList events={eventsThisYear} />
        </div>
      ))}
    </div>
  );
};

const TypeFilter = ({ setEventType, eventType }) => (
  <div className="type-filter">
    {eventTypes.map((aType) => (
      <TypeButton
        key={aType}
        setEventType={setEventType}
        eventType={eventType}
        thisEventType={aType}
      />
    ))}
  </div>
);

TypeFilter.propTypes = {
  setEventType: PropTypes.func.isRequired,
  eventType: PropTypes.string.isRequired,
};

const TypeButton = ({ setEventType, eventType, thisEventType }) => (
  <button
    type="button"
    className={`type-filter-option${(eventType === thisEventType) ? '-selected' : ''}`}
    onClick={() => setEventType(thisEventType)}
  >
    {thisEventType}
  </button>
);

TypeButton.propTypes = {
  setEventType: PropTypes.func.isRequired,
  eventType: PropTypes.string.isRequired,
  thisEventType: PropTypes.string.isRequired,
};

const EventYearList = ({ events }) => (
  <div className="events">
    {events.map(({
      recordId,
      fieldData: {
        Title, VenueName, VenueLink, Presenter, EventID, Type, cDateFragment,
      },
    }) => (
      <div className="events-item" key={EventID}>
        <h4>
          <Link to={`/event/${recordId}`}>{Title}</Link>
        </h4>
        <div className="events-item-venue">
          {VenueLink
            ? <a href={VenueLink}>{VenueName}</a>
            : <div>{VenueName}</div>}
        </div>
        <div className="event-details">
          {(Type === 'Presentation' && Presenter) ? `${Presenter} / ` : null}
          <FormattedDate dateString={cDateFragment} />
        </div>
      </div>
    ))}
  </div>
);

EventYearList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

export default EventsList;
