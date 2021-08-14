import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import slugify from '@sindresorhus/slugify';

import './projectBox.scss';

const NameSpan = ({ name }) => <span>{name.length > 18 ? `${name.substring(0, 17)}...` : name}</span>;

NameSpan.propTypes = {
  name: PropTypes.string.isRequired,
};

const ProjectBox = ({ node: { fieldData: { slug, Name, cBadgeRawURL } } }) => (
  <Link className="projectBadge" to={`/project/${slugify(slug)}`}>
    <img
      alt={Name}
      src={`${process.env.GATSBY_MEDIA_LIBRARY}/${cBadgeRawURL}?width=140`}
    />
    <p className="projectBadge-title">
      <NameSpan name={Name} />
    </p>
  </Link>
);

ProjectBox.propTypes = {
  node: PropTypes.shape({
    fieldData: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      Name: PropTypes.string.isRequired,
      cBadgeRawURL: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProjectBox;
