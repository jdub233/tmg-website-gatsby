import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import ElementNav from './filters/elementNav';
import FormattedDate from './shared/formattedDate';

import './eventsList.scss';

const eventTypes = [
  'Exhibition',
  'Conference',
  'Presentation',
  'show all',
];

function EventsList() {
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

    // If an event type is selected, and there are no events of that type for the year,
    // then filteredYear will be empty, so just set eventsByYearObj to an empty object.
    if (filteredYear.length === 0) {
      eventsByYearObj = {};
    } else {
      // Otherwise wrap the filtered results in an object to match the full result object.
      // Seems like there ought to be an easier way, but this is at least effective.
      eventsByYearObj = { [filteredYear[0][0]]: filteredYear[0][1] };
    }
  }

  return (
    <div>
      <TypeFilter setEventType={setEventType} eventType={eventType} />
      <ElementNav elements={years} setElement={setYear} currentElement={year} />
      {Object.entries(eventsByYearObj).reverse().map(([key, eventsThisYear]) => (
        <div className="year" key={key}>
          <h3 className="year-header">{key}</h3>
          <EventYearList events={eventsThisYear} />
        </div>
      ))}
    </div>
  );
}

function TypeFilter({ setEventType, eventType }) {
  return (
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
}

TypeFilter.propTypes = {
  setEventType: PropTypes.func.isRequired,
  eventType: PropTypes.string.isRequired,
};

function TypeButton({ setEventType, eventType, thisEventType }) {
  return (
    <button
      type="button"
      className={`type-filter-option${(eventType === thisEventType) ? '-selected' : ''}`}
      onClick={() => setEventType(thisEventType)}
    >
      {(thisEventType === 'show all' ? 'show all' : `${thisEventType}s`)}
    </button>
  );
}

TypeButton.propTypes = {
  setEventType: PropTypes.func.isRequired,
  eventType: PropTypes.string.isRequired,
  thisEventType: PropTypes.string.isRequired,
};

function EventYearList({ events }) {
  return (
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
}

EventYearList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

export default EventsList;
