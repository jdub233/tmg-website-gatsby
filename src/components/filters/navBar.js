import React from 'react';
import PropTypes from 'prop-types';

import './navBar.scss';

const NavBar = ({
  years, setYear, currentYear, showPrevNext,
}) => (
  <ul className="yearNav">
    {showPrevNext
      && <li key="prev"><button type="button" className="prevNext" onClick={() => setYear((currentYear === 1) ? (years.length) : currentYear - 1)}>previous</button></li>}
    {years.map((y) => (
      <li key={y}>
        <button
          type="button"
          onClick={() => setYear(y)}
          className={`year${(y === currentYear) ? '-selected' : ''}`}
        >
          {y}
        </button>
      </li>
    ))}
    {showPrevNext
      && (
      <li key="next">
        <button type="button" className="prevNext" onClick={() => setYear((currentYear === years.length) ? 1 : currentYear + 1)}>next</button>
      </li>
      )}
  </ul>
);

NavBar.propTypes = {
  years: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  currentYear: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  setYear: PropTypes.func.isRequired,
  showPrevNext: PropTypes.bool,
};

NavBar.defaultProps = {
  showPrevNext: false,
};

export default NavBar;
