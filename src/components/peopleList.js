import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const PeopleList = () => (
    <StaticQuery
        query={graphql`
      {
        allPeopleJson {
          edges {
            node {
              id
              fieldData {
                slug
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
                      <Link to={`/people/${node.fieldData.slug}`}>
                        {node.fieldData.Full_Name}
                      </Link>
                    </div>
                ) )}
            </div>
        )}
    ></StaticQuery>
)

export default PeopleList

