import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import "./awardList.scss";

const AwardList = () => {
  const data = useStaticQuery(graphql`
    {
      allAwardsJson {
        edges {
          node {
            fieldData {
              AwardID
              Award_URL
              Award_Year
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
              proj_portal {
                Projects_for_Awards__Name
                Projects_for_Awards__cBadgeRawURL
                Projects_for_Awards__slug
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
              proj_portal {
                recordId
                Projects_for_Press__ProjectID
                Projects_for_Press__Name
                Projects_for_Press__cBadgeRawURL
                Projects_for_Press__internal_recid
                Projects_for_Press__slug
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
              Year_Published
            }
          }
        }
      }
    }
  `);

  const { allAwardsJson: { edges: awards }, allPressJson: {edges: pressItems} } = data;

  const awardsByYear = awards.reduce( ( accumulator, {node} ) => {
    accumulator[node.fieldData.Award_Year] = [...accumulator[node.fieldData.Award_Year] || [], node ];
    return accumulator;
  }, {} );

  const pressByYear = pressItems.reduce((accumulator, { node }) => {
    accumulator[node.fieldData.Year_Published] = [...accumulator[node.fieldData.Year_Published] || [], node];
    return accumulator;
  }, {});

  // A bit terse, but this extracts all the unique years for both press and awards.
  const years = [...new Set([...Object.entries(pressByYear).map(aYear => aYear[0]), ...Object.entries(awardsByYear).map(aYear => aYear[0])]) ].sort().reverse();

  return (
    <div>
      {years.map( (year) => (
        <div>
          <h3>{year}</h3>
          { awardsByYear[year] &&
            awardsByYear[year].map( ( award ) => (
              <AwardBox key={award.id} award={award} />
            ) )
          } 
          { pressByYear[year] &&
            pressByYear[year].map ( ( press ) => (
              <PressBox key={press.id} press={press} />
            ) )
          }
        </div>
      ) )}
    </div>
  )
}

const AwardBox = ( { award: { id, fieldData, portalData: { proj_portal: projects } } } ) => (
  <div key={id} className="award-box">
    <div className="award-box-content">
      {fieldData.SummaryTitle && 
        <p className="award-box-tagline">{fieldData.SummaryTitle}</p>
      }
      <h4>{fieldData.Title}</h4>
      {fieldData.Description &&
        <p className="award-box-textblock">{fieldData.Description}</p>
      }
      <p className="award-box-details">
        {fieldData.AwardedTo}
      </p>
    </div>
    <div className="award-box-project-badges">
      {projects && 
        projects.map(({ Projects_for_Awards__slug, Projects_for_Awards__Name, Projects_for_Awards__cBadgeRawURL, recordID }) => (
          <Link to={`/projects/${Projects_for_Awards__slug}`} key={recordID} >
            <img 
              alt={Projects_for_Awards__Name}
              src={`${process.env.MEDIA_LIBRARY}/${Projects_for_Awards__cBadgeRawURL}?width=60`}
              width="60px"
              height="60px"  
            />
          </Link>
        ) )
      }
    </div>
  </div>
);

const PressBox = ({ press: { id, fieldData } }) => (
  <div className="press-box" key={id}>
    <h4>
      {(fieldData.Published_URL === "") ? `${fieldData.Title}` : <a href={fieldData.Published_URL}>{fieldData.Title}</a> }
    </h4>
    <p className="press-box-details">Press: {fieldData.Published_In}</p>
  </div>
);

export default AwardList

