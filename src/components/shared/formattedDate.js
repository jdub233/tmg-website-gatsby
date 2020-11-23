import React from 'react';
import PropTypes from 'prop-types';

const FormattedDate = ({ dateString }) => {
  // Days are optional, so count the date segments by the '-' separator to see if the day should be displayed.
  // Filter is useful here because it will always return an array, even an empty one, so will always have a valid length.
  const dateSeparators = [...dateString].filter((x) => x === '-').length;

  const eventDate = new Date(dateString);

  return (
    <>
      { (dateSeparators > 0) && eventDate.toLocaleString('default', { timeZone: 'UTC', month: 'long' }) + ' '}
      { (dateSeparators === 2) && eventDate.getUTCDate().toString() + ', '}
      {eventDate.getUTCFullYear()}
    </>
  );
};

FormattedDate.propTypes = {
  dateString: PropTypes.string.isRequired,
};

export default FormattedDate;
