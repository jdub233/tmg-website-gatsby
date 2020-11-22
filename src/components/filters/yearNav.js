import React from 'react';

import './yearNav.scss';

export default ({
  years, setYear, currentYear, showPrevNext = false,
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
