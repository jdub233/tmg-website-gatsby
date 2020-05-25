import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import "./projectList.scss";

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
  <div className="projectYearList">
    {projects.map(( node ) => (
      <div className="projectItem" key={node.id}>
        <Link className="projectBadge" to={`/projects/${node.fieldData.slug}`}>
          <img
            width="140px"
            alt="{node.fieldData.Name}"
            src={`${process.env.MEDIA_LIBRARY}/${node.fieldData.cBadgeRawURL}?width=140`}
          />
          <p>{node.fieldData.Name.length > 18 ? `${node.fieldData.Name.substring(0, 17)}...` : node.fieldData.Name}</p>
        </Link>
      </div>
    ))}
  </div>
);

export default ProjectList
