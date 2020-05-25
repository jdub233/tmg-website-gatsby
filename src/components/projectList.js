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
  `);

  const { allProjectsJson: { edges: projects } } = data;

  const projectsByYearObj = projects.reduce( (accumulator, { node }) => {
    accumulator[node.fieldData.Project_Year] = [...accumulator[node.fieldData.Project_Year] || [], node ];
    return accumulator;
  }, {} );

  return( 
    Object.entries(projectsByYearObj).reverse().map(([key, projects]) => (
    <div key={key}>
      <h3>{key}</h3>
      <ProjectYearList projects={projects} />
    </div>
    ))
  );
}

const ProjectYearList = ( {projects} ) => (
  <div>
    {projects.map(( node ) => (
      <div key={node.id}>
        <Link to={`/projects/${node.fieldData.slug}`}>
          <img
            width="140px"
            alt="{node.fieldData.Name}"
            src={`${process.env.MEDIA_LIBRARY}/${node.fieldData.cBadgeRawURL}?width=140`}
          />
          {node.fieldData.Name}
        </Link>
      </div>
    ))}
  </div>
);

export default ProjectList
