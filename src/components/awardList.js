import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
          }
        }
      }
    }
  `)
    return (
        <div>
            {data.allAwardsJson.edges.map( ({ node }) => (
                <div key={node.id}>
                    {node.fieldData.Title}
                </div>
            ) )}
        </div>
    )
}

export default AwardList

