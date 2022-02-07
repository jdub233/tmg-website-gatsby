import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './citation.scss';

function CitationDetails({
  fieldData: {
    DownloadURL, Title, Citation, DOI_URL, Abstract,
  },
}) {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <div className="citation">
      <a href={`${process.env.GATSBY_MEDIA_LIBRARY}/${DownloadURL}`}>
        <h4>{Title}</h4>
      </a>
      <p>{Citation}</p>
      {DOI_URL !== '' && !Citation.includes('DOI:')
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

CitationDetails.propTypes = {
  fieldData: PropTypes.shape({
    DownloadURL: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Citation: PropTypes.string.isRequired,
    DOI_URL: PropTypes.string.isRequired,
    Abstract: PropTypes.string.isRequired,
  }).isRequired,
};

export default CitationDetails;
