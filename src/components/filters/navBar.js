import React from 'react';
import PropTypes from 'prop-types';

import './navBar.scss';

/**
 * Renders a clickable navigation box for a set of elements
 *
 * Used for the year navigation in projects, papers, events, and awards.
 * Also provides the gallery navigation for image galleries.
 */
const NavBar = ({
  elements, setElement, currentElement, showPrevNext,
}) => (
  <ul className="navBar">
    {showPrevNext
      && <li key="prev"><button type="button" className="prevNext" onClick={() => setElement((currentElement === 1) ? (elements.length) : currentElement - 1)}>previous</button></li>}
    {elements.map((element) => (
      <li key={element}>
        <button
          type="button"
          onClick={() => setElement(element)}
          className={`year${(element === currentElement) ? '-selected' : ''}`}
        >
          {element}
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
  elements: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  currentElement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  setElement: PropTypes.func.isRequired,
  showPrevNext: PropTypes.bool,
};

NavBar.defaultProps = {
  showPrevNext: false,
};

export default NavBar;
