import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import PressBox from './awardList/pressBox';
import AwardBox from './awardList/awardBox';
import NavBar from './filters/navBar';

import './awardList.scss';

const AwardList = () => {
  const data = useStaticQuery(graphql`
    {
      allAwardsJson {
        edges {
          node {
            fieldData {
              AwardID
              AwardURL: Award_URL
              AwardYear: Award_Year
              AwardedTo
              Description
              ForWeb
              PDFDownloadURL
              SummaryTitle
              Title
              Type
              isPDFPublic
            }
            id
            portalData {
              projects: proj_portal {
                Name: Projects_for_Awards__Name
                badge: Projects_for_Awards__cBadgeRawURL
                slug: Projects_for_Awards__slug
                recordId
              }
            }
          }
        }
      }
      allPressJson {
        edges {
          node {
            id
            portalData {
              projects: proj_portal {
                recordId
                Name: Projects_for_Press__Name
                badge: Projects_for_Press__cBadgeRawURL
                slug: Projects_for_Press__slug
                modId
              }
            }
            fieldData {
              PDFDownloadURL
              PressID
              PublishedIn: Published_In
              PublishedURL: Published_URL
              Title
              Type
              isPDFPublic
              YearPublished: Year_Published
            }
          }
        }
      }
    }
  `);

  const { allAwardsJson: { edges: awards }, allPressJson: { edges: pressItems } } = data;

  const [year, setYear] = useState('show all');

  const awardsByYear = awards.reduce((accumulator, { node }) => {
    const { fieldData: { AwardYear } } = node;

    accumulator[AwardYear] = [...accumulator[AwardYear] || [], node];
    return accumulator;
  }, {});

  const pressByYear = pressItems.reduce((accumulator, { node }) => {
    const { fieldData: { YearPublished } } = node;

    accumulator[YearPublished] = [...accumulator[YearPublished] || [], node];
    return accumulator;
  }, {});

  // A bit terse, but this extracts all the unique years for both press and awards.
  const years = [
    ...new Set(
      [
        ...Object.entries(pressByYear).map((aYear) => aYear[0]),
        ...Object.entries(awardsByYear).map((aYear) => aYear[0]),
      ],
    ),
  ].sort().reverse();

  const yearsForNav = ['show all', ...years];

  // Filter to a specific year if one is selected.
  const filteredYears = (year !== 'show all') ? [year] : years;

  return (
    <div className="press-awards">
      <NavBar elements={yearsForNav} setElement={setYear} currentElement={year} />
      {filteredYears.map((aYear) => (
        <div key={aYear} className="year-item">
          <h3>{aYear}</h3>
          { awardsByYear[aYear]
            && awardsByYear[aYear].map((award) => (
              <AwardBox key={award.id} award={award} />
            ))}
          { pressByYear[aYear]
            && pressByYear[aYear].map((press) => (
              <PressBox key={press.id} press={press} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default AwardList;
