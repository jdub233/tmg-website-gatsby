import React from 'react';
import PropTypes from 'prop-types';

import ProjectBadge from './projectBadge';

const AwardBox = ({
  award: {
    id,
    fieldData: {
      SummaryTitle, Title, AwardURL, Description, AwardedTo,
    },
    portalData: { projects },
  },
}) => (
  <div key={id} className="award-box">
    <div className="award-box-content">
      {SummaryTitle
        && <p className="award-box-tagline">{SummaryTitle}</p>}
      <h4>
        {(AwardURL === '') ? Title : <a href={AwardURL}>{Title}</a>}
      </h4>
      {Description
        && <p className="award-box-textblock">{Description}</p>}
      <p className="award-box-details">
        {AwardedTo}
      </p>
    </div>
    <div className="award-box-project-badges">
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

AwardBox.propTypes = {
  award: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fieldData: PropTypes.shape({
      SummaryTitle: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      AwardURL: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      AwardedTo: PropTypes.string.isRequired,
    }).isRequired,
    portalData: PropTypes.shape().isRequired,
  }).isRequired,
};

export default AwardBox;
