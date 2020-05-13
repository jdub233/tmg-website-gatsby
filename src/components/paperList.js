import React from "react"
import { StaticQuery, graphql } from "gatsby"

const PaperList = () => (
    <StaticQuery
        query={graphql`
      {
        allPapersJson(sort: {fields: fieldData___Paper_Year}) {
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
                        {node.fieldData.Title}
                    </div>
                ) )}
            </div>
            //<pre>{JSON.stringify(data.allPapersJson.nodes, null, 4)}</pre>
        )}
    ></StaticQuery>
)

export default PaperList

