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
        render={data => (
          <div>
              {data.allPapersJson.edges.map( ({ node }) => (
                  <div key={node.id}>
                    <a href={`${process.env.MEDIA_LIBRARY}/${node.fieldData.SC_published_pdf_Download_URL}`}>{node.fieldData.Title}</a>
                  </div>
              ) )}
          </div>
        )}
    ></StaticQuery>
)

export default PaperList

