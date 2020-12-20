import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import NavBar from './filters/navBar';

import CitationDetails from './paperList/citationDetails';

import './paperList.scss';

const PaperList = () => {
  const data = useStaticQuery(graphql`
      {
        allPapersJson(sort: {fields: fieldData___Paper_Year, order: DESC}) {
          edges {
            node {
              id
              recordId
              fieldData {
                Abstract
                Authors_Display
                Citation
                DOI
                DOI_URL
                PaperID
                PaperYear: Paper_Year
                DownloadURL: SC_published_pdf_Download_URL
                Title
                Venue
              }
              portalData {
                proj_portal {
                  BadgeURL: Projects_forPapers__cBadgeRawURL
                  Name: Projects_forPapers__Name
                  slug: Projects_forPapers__slug
                  recordId
                }
              }
            }
          }
        }
      }
    `);

  const { allPapersJson: { edges: papers } } = data;

  const [year, setYear] = useState('show all');

  // Group papers by year with a reducer.
  let papersByYear = papers.reduce((accumulator, { node }) => {
    const { fieldData: { PaperYear } } = node;

    accumulator[PaperYear] = [...accumulator[PaperYear] || [], node];
    return accumulator;
  }, {});

  // Extract the years for the year based navigation.
  const years = ['show all', ...Object.entries(papersByYear).map((aYear) => aYear[0]).reverse()];

  // Filter to a specific year if one is selected.
  if (year !== 'show all') {
    const filteredYear = Object.entries(papersByYear).filter(
      (aYear) => aYear[0] === year,
    );

    // Wraps the filtered results in an object to match the full result object.
    // Seems like there ought to be an easier way, but this is at least effective.
    papersByYear = {
      [filteredYear[0][0]]: filteredYear[0][1],
    };
  }

  const sortedList = Object.entries(papersByYear).reverse().map(([key, items]) => (
    <div key={key}>
      <h3>{key}</h3>
      {items.map((node) => (
        <PaperBox key={node.id} node={node} />
      ))}
    </div>
  ));

  return (
    <div>
      <NavBar elements={years} setElement={setYear} currentElement={year} />
      {sortedList}
    </div>
  );
};

const PaperBox = ({ node: { fieldData, portalData } }) => (
  <div className="paperBox">
    <div className="icon-link">
      <a
        className="icon-link-anchor"
        href={`${process.env.GATSBY_MEDIA_LIBRARY}/${fieldData.DownloadURL}`}
        aria-label="Download link"
      >
        &nbsp;
      </a>
    </div>
    <CitationDetails fieldData={fieldData} />
    <div className="related-projects">
      {portalData.proj_portal.map(({
        slug, BadgeURL, Name, recordId,
      }) => {
        // Filter out any blank records.
        if (slug === '') {
          return null;
        }

        return (
          <Link className="related-projects-link" key={recordId} to={`/project/${slug}`}>
            <img
              src={`${process.env.GATSBY_MEDIA_LIBRARY}/${BadgeURL}?width=60`}
              width="60px"
              alt={Name}
            />
          </Link>
        );
      })}
    </div>
  </div>
);

PaperBox.propTypes = {
  node: PropTypes.shape({
    fieldData: PropTypes.shape({
      DownloadURL: PropTypes.string.isRequired,
    }).isRequired,
    portalData: PropTypes.shape(),
  }).isRequired,
};

export default PaperList;
