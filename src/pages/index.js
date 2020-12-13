import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import './index.scss';

import Layout from '../components/layout';
import ProjectBoxes from '../components/shared/projectBoxes';
import Statement from '../components/vision/statement';

const Index = ({
  data: { allProjectsJson: { edges: projects }, site: { siteMetadata: { siteUrl } } },
}) => {
  const projectsNodes = projects.slice(0, 6).map(({ node }) => node);

  return (
    <Layout>
      <Helmet>
        <title>Tangible Media Group</title>
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      <Statement home />
      <div>
        {projectsNodes.length > 0 && <h3>Featured Projects</h3>}
        <ProjectBoxes projects={projectsNodes} />
        <h3 className="more-projects"><Link to="/projects/">See more projects +</Link></h3>
      </div>
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allProjectsJson(filter: {fieldData: {Featured: {eq: "Yes"}}}, sort: {fields: fieldData___Project_Year, order: DESC}) {
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
  }
`;

export default Index;
