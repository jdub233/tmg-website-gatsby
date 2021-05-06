import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './projectBoxes.scss';

const slugify = require('@sindresorhus/slugify');

const NameSpan = ({ name }) => <span>{name.length > 18 ? `${name.substring(0, 17)}...` : name}</span>;

NameSpan.propTypes = {
  name: PropTypes.string.isRequired,
};

const ProjectBoxes = ({ projects }) => (
  <CarouselProvider
    totalSlides={projects.length}
    visibleSlides={6}
    step={6}
    naturalSlideWidth={140}
    naturalSlideHeight={182}
    infinite
    isPlaying
    interval={5000}
  >
    <Slider className="projectBoxes">
      {projects.map((node) => (
        <Slide className="projectItem" key={node.id}>
          <Link className="projectBadge" to={`/project/${slugify(node.fieldData.slug)}`}>
            <img
              alt={node.fieldData.Name}
              src={`${process.env.GATSBY_MEDIA_LIBRARY}/${node.fieldData.cBadgeRawURL}?width=140`}
            />
            <p className="projectBadge-title">
              <NameSpan name={node.fieldData.Name} />
            </p>
          </Link>
        </Slide>
      ))}
    </Slider>
  </CarouselProvider>
);

ProjectBoxes.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectBoxes;
