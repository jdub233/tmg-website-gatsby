import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import "./paperList.scss";
import pdfIcon from "../img/pdf-icon.png";

const PaperList = () => (
  <StaticQuery
    query={graphql`
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
                SC_published_pdf_Download_URL
                Title
                Venue
              }
              portalData {
                proj_portal {
                  Projects_forPapers__cBadgeRawURL
                  Projects_forPapers__Name
                  Projects_forPapers__slug
                }
              }
            }
          }
        }
      }
    `}
    render={({ allPapersJson: { edges: papers } }) => {
      // Group papers by year with a reducer. 
      const papersByYear = papers.reduce( (accumulator, {node}) => {
        accumulator[node.fieldData.Paper_Year] = [...accumulator[node.fieldData.Paper_Year] || [], node ];
        return accumulator;
      }, {});

      const sortedList = Object.entries(papersByYear).reverse().map( ([key, papers]) => (
          <div key={key}>
            <h3>{key}</h3>
            {papers.map((node) => (
              <div className="paperBox" key={node.id}>
                <div><a href={`${process.env.MEDIA_LIBRARY}/${node.fieldData.SC_published_pdf_Download_URL}`}><img src={pdfIcon} alt="download pdf icon" /></a></div>
                <div className="citation">
                  <a href={`${process.env.MEDIA_LIBRARY}/${node.fieldData.SC_published_pdf_Download_URL}`}>
                    <h4>{node.fieldData.Title}</h4>
                    <p>{node.fieldData.Citation}</p>
                  </a>
                </div>
                <div>
                  {node.portalData.proj_portal.map( (project) => (
                    <Link to={`/projects/${project.Projects_forPapers__slug}`}>
                      <img 
                        src={`${process.env.MEDIA_LIBRARY}/${project.Projects_forPapers__cBadgeRawURL}?width=60`} 
                        width="60px"
                        alt={project.Projects_forPapers__Name}
                      />
                    </Link>
                  ) )}
                </div>
              </div>
            ))}
          </div>
      ));

      return sortedList;
    }
  }
  ></StaticQuery>
);

export default PaperList

