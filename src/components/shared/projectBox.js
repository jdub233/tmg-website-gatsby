
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './projectBox.scss';

const slugify = require('@sindresorhus/slugify');

const NameSpan = ({ name }) => <span>{name.length > 18 ? `${name.substring(0, 17)}...` : name}</span>;

NameSpan.propTypes = {
  name: PropTypes.string.isRequired,
};

const ProjectBox = ({ node }) => (
  <Link className="projectBadge" to={`/project/${slugify(node.fieldData.slug)}`}>
    <img
      alt={node.fieldData.Name}
      src={`${process.env.GATSBY_MEDIA_LIBRARY}/${node.fieldData.cBadgeRawURL}?width=140`}
    />
    <p className="projectBadge-title">
      <NameSpan name={node.fieldData.Name} />
    </p>
  </Link>
);

ProjectBox.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectBox;
