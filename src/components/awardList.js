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
            }
          }
        }
      }
    }
  `);

  const { allAwardsJson: { edges: awards }, allPressJson: {edges: pressItems} } = data;

  return (
    <div>
      {awards.map(({ node }) => (
        <div key={node.id}>
          {node.fieldData.Title}
        </div>
      ))}
      {pressItems.map(({ node }) => (
        <div key={node.id}>
          {node.fieldData.Title}
        </div>
      ))}
    </div>
  )
}

export default AwardList

