import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './index.scss';

import Layout from '../components/layout';
import ProjectBox from '../components/shared/projectBox';
import Statement from '../components/vision/statement';

function Index({
  data: { allProjectsJson: { edges: projects } },
}) {
  const projectsNodes = projects.map(({ node }) => node);

  return (
    <Layout>
      <Statement home />
      <div className="featured-projects">
        {projectsNodes.length > 0 && <h3>Featured Projects</h3>}
        <CarouselProvider
          totalSlides={projectsNodes.length}
          visibleSlides={6}
          step={6}
          naturalSlideWidth={140}
          naturalSlideHeight={182}
          infinite
          isPlaying
          interval={5000}
        >
          <Slider>
            {projectsNodes.map((project) => (
              <Slide key={project.id}>
                <ProjectBox node={project} />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>

        <h3 className="more-projects"><Link to="/projects/">See more projects +</Link></h3>
      </div>
    </Layout>
  );
}

Index.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const query = graphql`{
  site {
    siteMetadata {
      siteUrl
    }
  }
  allProjectsJson(
    filter: {fieldData: {Featured: {eq: "Yes"}}}
    sort: {fieldData: {Project_Year: DESC}}
  ) {
    edges {
      node {
        id
        recordId
        fieldData {
          cBadgeRawURL
          Name
          slug
        }
      }
    }
  }
}`;

export default Index;

export function Head({ data: { site: { siteMetadata: { siteUrl } } } }) {
  return (
    <>
      <title>Tangible Media Group</title>
      <link rel="canonical" href={siteUrl} />
    </>
  );
}
