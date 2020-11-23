import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './projectBoxes.scss';

const NameSpan = ({ name }) => <span>{name.length > 18 ? `${name.substring(0, 17)}...` : name}</span>;

NameSpan.propTypes = {
  name: PropTypes.string.isRequired,
};

const ProjectBoxes = ({ projects }) => (
  <div className="projectBoxes">
    {projects.map((node) => (
      <div className="projectItem" key={node.id}>
        <Link className="projectBadge" to={`/project/${node.fieldData.slug}`}>
          <img
            alt="{node.fieldData.Name}"
            src={`${process.env.GATSBY_MEDIA_LIBRARY}/${node.fieldData.cBadgeRawURL}?width=140`}
          />
          <p className="projectBadge-title">
            <NameSpan name={node.fieldData.Name} />
          </p>
        </Link>
      </div>
    ))}
  </div>
);

ProjectBoxes.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectBoxes;
