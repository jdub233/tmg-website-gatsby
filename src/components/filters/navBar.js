import React from 'react';
import PropTypes from 'prop-types';

import './navBar.scss';

const NavBar = ({
  years: elements, setYear: setElement, currentYear: currentElement, showPrevNext,
}) => (
  <ul className="yearNav">
    {showPrevNext
      && <li key="prev"><button type="button" className="prevNext" onClick={() => setElement((currentElement === 1) ? (elements.length) : currentElement - 1)}>previous</button></li>}
    {elements.map((y) => (
      <li key={y}>
        <button
          type="button"
          onClick={() => setElement(y)}
          className={`year${(y === currentElement) ? '-selected' : ''}`}
        >
          {y}
        </button>
      </li>
    ))}
    {showPrevNext
      && (
      <li key="next">
        <button type="button" className="prevNext" onClick={() => setElement((currentElement === elements.length) ? 1 : currentElement + 1)}>next</button>
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
