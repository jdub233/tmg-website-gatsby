import React, { useState } from "react";
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

  const [year, setYear] = useState('show all');

  let projectsByYearObj = projects.reduce( (accumulator, { node }) => {
    accumulator[node.fieldData.Project_Year] = [...accumulator[node.fieldData.Project_Year] || [], node ];
    return accumulator;
  }, {} );

  // Extract the years for the year based navigation.
  const years = [ 'show all', ...Object.entries(projectsByYearObj).map( ( aYear ) => aYear[0] ).reverse() ];

  // Filter to a specific year if one is selected.
  if (year !== 'show all') {
    const filteredYear = Object.entries(projectsByYearObj).filter(
      (aYear) => aYear[0] === year
    );
    
    // Wraps the filtered results in an object to match the full result object.
    // Seems like there ought to be an easier way, but this is at least effective.
    projectsByYearObj = {
      [filteredYear[0][0]]: filteredYear[0][1]
    };
  }

  return( 
    <div>
      <YearNav years={years} setYear={setYear} currentYear={year} />
      {Object.entries(projectsByYearObj).reverse().map(([key, projects]) => (
      <div key={key}>
        <h3>{key}</h3>
        <ProjectYearList projects={projects} />
      </div>
      ))}
    </div>
  );
}

const YearNav = ({years, setYear, currentYear}) => (
  <ul className="yearNav">
    {years.map((y) => (
      <li>
        <a 
          href="#" onClick={() => setYear(y)}
          className={`year${(y === currentYear) ? '-selected' : ''}`}
        >
          {y}
        </a>
      </li>
    ))}
  </ul>
);

const ProjectYearList = ( {projects} ) => (
  <div className="projectYearList">
    {projects.map(( node ) => (
      <div className="projectItem" key={node.id}>
        <Link className="projectBadge" to={`/projects/${node.fieldData.slug}`}>
          <img
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
