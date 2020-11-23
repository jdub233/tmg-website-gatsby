import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './citation.scss';

export default function Citation({
  fieldData: {
    Download_URL, Title, Citation, DOI_URL, Abstract,
  },
}) {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <div className="citation">
      <a href={`${process.env.GATSBY_MEDIA_LIBRARY}/${Download_URL}`}>
        <h4>{Title}</h4>
      </a>
      <p>{Citation}</p>
      {DOI_URL !== ''
        && (
        <div className="citation-doi">
          DOI:
          {' '}
          {DOI_URL}
        </div>
        )}
      <h5>
        <button type="button" className="show-abstract" onClick={() => setShowAbstract(!showAbstract)}>
          Abstract
          {' '}
          <span className="show-abstract-icon">{showAbstract ? '-' : '+'}</span>
        </button>
      </h5>
      <div className={`citation-abstract${!showAbstract ? '-hide' : ''}`}>{Abstract}</div>
    </div>
  );
}

Citation.propTypes = {
  fieldData: PropTypes.shape({
    Download_URL: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Citation: PropTypes.string.isRequired,
    DOI_URL: PropTypes.string.isRequired,
    Abstract: PropTypes.string.isRequired,
  }).isRequired,
};
