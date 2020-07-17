import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import YearNav from "./filters/yearNav";

import "./paperList.scss";

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
                Paper_Year
                Download_URL: SC_published_pdf_Download_URL
                Title
                Venue
              }
              portalData {
                proj_portal {
                  Projects_forPapers__cBadgeRawURL
                  Projects_forPapers__Name
                  Projects_forPapers__slug
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
  let papersByYear = papers.reduce( (accumulator, {node}) => {
    accumulator[node.fieldData.Paper_Year] = [...accumulator[node.fieldData.Paper_Year] || [], node ];
    return accumulator;
  }, {});

  // Extract the years for the year based navigation.
  const years = ['show all', ...Object.entries(papersByYear).map((aYear) => aYear[0]).reverse()];

  // Filter to a specific year if one is selected.
  if (year !== 'show all') {
    const filteredYear = Object.entries(papersByYear).filter(
      (aYear) => aYear[0] === year
    );

    // Wraps the filtered results in an object to match the full result object.
    // Seems like there ought to be an easier way, but this is at least effective.
    papersByYear = {
      [filteredYear[0][0]]: filteredYear[0][1]
    };
  }

  const sortedList = Object.entries(papersByYear).reverse().map( ([key, papers]) => (
      <div key={key}>
        <h3>{key}</h3>
        {papers.map((node) => (
          <PaperBox key={node.id} node={node} />
        ))}
      </div>
  ));

  return (
    <div>
      <YearNav years={years} setYear={setYear} currentYear={year} />
      {sortedList}
    </div>
  );
};

const PaperBox = ({ node: { fieldData, portalData }}) => (
  <div className="paperBox">
    <div className="icon-link">
      <a 
        className="icon-link-anchor" 
        href={`${process.env.MEDIA_LIBRARY}/${fieldData.Download_URL}`}
        aria-label="Download link"
      >&nbsp;</a>
    </div>
    <div className="citation">
      <a href={`${process.env.MEDIA_LIBRARY}/${fieldData.Download_URL}`}>
        <h4>{fieldData.Title}</h4>
        <p>{fieldData.Citation}</p>
      </a>
    </div>
    <div>
      {portalData.proj_portal.map( ( { Projects_forPapers__slug, Projects_forPapers__cBadgeRawURL, Projects_forPapers__Name, recordId } ) => (
        <Link key={recordId} to={`/projects/${Projects_forPapers__slug}`}>
          <img
            src={`${process.env.MEDIA_LIBRARY}/${Projects_forPapers__cBadgeRawURL}?width=60`}
            width="60px"
            alt={Projects_forPapers__Name}
          />
        </Link>
      ))}
    </div>
  </div>
);


export default PaperList

