import React from 'react';
import PropTypes from 'prop-types';

import ProjectBadge from './projectBadge';

const PressBox = ({
  press: {
    id,
    fieldData: {
      PublishedURL, Title, isPDFPublic, PDFDownloadURL, PublishedIn,
    },
    portalData: { projects },
  },
}) => (
  <div className="press-box" key={id}>
    <div className="press-box-content">
      <h4>
        {(PublishedURL.trim() === '') ? Title : <a href={PublishedURL}>{Title}</a>}
      </h4>
      {isPDFPublic
          && (
            <div className="icon-link">
              <a
                className="icon-link-anchor"
                href={`${process.env.GATSBY_MEDIA_LIBRARY}/${PDFDownloadURL}`}
              >
                &nbsp;
              </a>
            </div>
          )}
      <p className="press-box-details">
        Press:
        {' '}
        {PublishedIn}
      </p>
    </div>
    <div className="press-box-project-badges">
      {projects
          && projects.map(({
            slug, Name, badge, recordId,
          }) => (
            <ProjectBadge
              slug={slug}
              name={Name}
              srcURL={badge}
              key={recordId}
            />
          ))}
    </div>
  </div>
);

PressBox.propTypes = {
  press: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fieldData: PropTypes.shape({
      PublishedURL: PropTypes.string,
      Title: PropTypes.string.isRequired,
      isPDFPublic: PropTypes.string,
      PDFDownloadURL: PropTypes.string,
      PublishedIn: PropTypes.string,
    }).isRequired,
    portalData: PropTypes.shape().isRequired,
  }).isRequired,
};

export default PressBox;
