import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import YearNav from './filters/yearNav';

import './awardList.scss';

const AwardList = () => {
  const data = useStaticQuery(graphql`
    {
      allAwardsJson {
        edges {
          node {
            fieldData {
              AwardID
              Award_URL
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
              Published_In
              Published_URL
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
  const years = [...new Set([...Object.entries(pressByYear).map((aYear) => aYear[0]), ...Object.entries(awardsByYear).map((aYear) => aYear[0])])].sort().reverse();

  const yearsForNav = ['show all', ...years];

  // Filter to a specific year if one is selected.
  const filteredYears = (year !== 'show all') ? [year] : years;

  return (
    <div className="press-awards">
      <YearNav years={yearsForNav} setYear={setYear} currentYear={year} />
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

const AwardBox = ({ award: { id, fieldData, portalData: { projects } } }) => (
  <div key={id} className="award-box">
    <div className="award-box-content">
      {fieldData.SummaryTitle
        && <p className="award-box-tagline">{fieldData.SummaryTitle}</p>}
      <h4>
        {(fieldData.Award_URL === '') ? fieldData.Title : <a href={fieldData.Award_URL}>{fieldData.Title}</a>}
      </h4>
      {fieldData.Description
        && <p className="award-box-textblock">{fieldData.Description}</p>}
      <p className="award-box-details">
        {fieldData.AwardedTo}
      </p>
    </div>
    <div className="award-box-project-badges">
      {projects
        && projects.map(({
          slug, Name, badge, recordId,
        }) => (
          <ProjectBadge
            slug={slug}
            name={Name}
            srcURL={badge}
            key={recordId}
          />
        ))}
    </div>
  </div>
);

AwardBox.propTypes = {
  award: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fieldData: PropTypes.shape({
      SummaryTitle: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Award_URL: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      AwardedTo: PropTypes.string.isRequired,
    }).isRequired,
    portalData: PropTypes.shape().isRequired,
  }).isRequired,
};

const PressBox = (
  { press: { id, fieldData: { Published_URL, Title, isPDFPublic, PDFDownloadURL, Published_In }, portalData: { projects } } },
) => (
  <div className="press-box" key={id}>
    <div className="press-box-content">
      <h4>
        {(Published_URL.trim() === '') ? Title : <a href={Published_URL}>{Title}</a> }
      </h4>
      {isPDFPublic
       && (
       <div className="icon-link">
         <a
           className="icon-link-anchor"
           href={`${process.env.GATSBY_MEDIA_LIBRARY}/${PDFDownloadURL}`}
         >
          &nbsp;
         </a>
       </div>
       )}
      <p className="press-box-details">
        Press:
        {' '}
        {Published_In}
      </p>
    </div>
    <div className="press-box-project-badges">
      {projects
        && projects.map(({
          slug, Name, badge, recordId,
        }) => (
          <ProjectBadge
            slug={slug}
            name={Name}
            srcURL={badge}
            key={recordId}
          />
        ))}
    </div>
  </div>
);

PressBox.propTypes = {
  press: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fieldData: PropTypes.shape().isRequired,
    portalData: PropTypes.shape().isRequired,
  }).isRequired,
};

const ProjectBadge = ({ slug, name, srcURL }) => (
  <Link to={`/project/${slug}`}>
    <img
      alt={name}
      src={`${process.env.GATSBY_MEDIA_LIBRARY}/${srcURL}?width=60`}
      width="60px"
      height="60px"
    />
  </Link>
);

export default AwardList;
