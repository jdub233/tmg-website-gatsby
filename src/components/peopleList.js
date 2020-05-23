import React from "react"
import { StaticQuery, graphql } from "gatsby"

const PeopleList = () => (
    <StaticQuery
        query={graphql`
      {
        allPeopleJson {
          edges {
            node {
              id
              fieldData {
                Full_Name
                cBadgeRawURL
                Category
              }
            }
          }
        }
      }
    `}
        render={data => (
            <div>
                {data.allPeopleJson.edges.map( ({ node }) => (
                    <div key={node.id} >
                        {node.fieldData.Full_Name}
                    </div>
                ) )}
            </div>
        )}
    ></StaticQuery>
)

export default PeopleList

