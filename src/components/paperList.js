import React from "react"
import { StaticQuery, graphql } from "gatsby"

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
            <h2>{key}</h2>
            <PapersForYear papers={papers} />
          </div>
      ));

      return (<div>{sortedList}</div>);
    }
  }
  ></StaticQuery>
);

const PapersForYear = ({papers}) => (
  <div>
    {papers.map(( node ) => (
        <div key={node.id}>
          <a href={`${process.env.MEDIA_LIBRARY}/${node.fieldData.SC_published_pdf_Download_URL}`}>{node.fieldData.Title}</a>
        </div>
    ))}
  </div>
);

export default PaperList

