import React from 'react';
import PropTypes from 'prop-types';

function FormattedDate({ dateString }) {
  // Days are optional, so count the date segments by the '-' separator.
  // Filter is useful here because it will always return an array.
  const dateSeparators = [...dateString].filter((x) => x === '-').length;

  const eventDate = new Date(dateString);
  const month = eventDate.toLocaleString('default', { timeZone: 'UTC', month: 'long' });
  const day = eventDate.getUTCDate().toString();

  return (
    <>
      { (dateSeparators > 0) && `${month} `}
      { (dateSeparators === 2) && `${day}, `}
      {eventDate.getUTCFullYear()}
    </>
  );
}

FormattedDate.propTypes = {
  dateString: PropTypes.string.isRequired,
};

export default FormattedDate;
