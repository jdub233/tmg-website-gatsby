import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const ProjectList = () => {
    const data = useStaticQuery(graphql`
    {
      allProjectsJson(sort: {fields: [fieldData___Project_Year], order: DESC}) {
        edges {
          node {
            id
            recordId
            fieldData {
              ForWeb
              slug
              Name
              BadgeContainerURL
              Project_Year
              cBadgeRawURL
            }
          }
        }
      }
    }
  `)
    return (
        
        <div>
            {data.allProjectsJson.edges.map( ({ node }) => (
                <div key={node.id}>
                <Link to={`/projects/${node.fieldData.slug}`}>
                    <img 
                      width="140px" 
                      alt="{node.fieldData.Name}"
                      src={`https://trackr-media.tangiblemedia.org/publishedmedia/${node.fieldData.cBadgeRawURL}?width=140`} 
                    />
                    {node.fieldData.Name}
                </Link>
                </div>
            ) )}
        </div>
        
    );
}

export default ProjectList
