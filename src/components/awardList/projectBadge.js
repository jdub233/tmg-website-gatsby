import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function ProjectBadge({ slug, name, srcURL }) {
  return (
    <Link to={`/project/${slug}`}>
      <img
        alt={name}
        src={`${process.env.GATSBY_MEDIA_LIBRARY}/${srcURL}?width=60`}
        width="60px"
        height="60px"
      />
    </Link>
  );
}

ProjectBadge.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  srcURL: PropTypes.string.isRequired,
};

export default ProjectBadge;
