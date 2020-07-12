import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import YearNav from "./filters/yearNav";
import ProjectBoxes from "./shared/projectBoxes";

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

  const [searchString, setSearchString] = useState('');

  let filteredProjects = {};

  if (searchString !== '') {
    filteredProjects = projects.filter( ({ node: { fieldData: { Name } } }) => Name.toLowerCase().includes( searchString.toLowerCase() ) );
  } else {
    filteredProjects = projects;
  }

  let projectsByYearObj = filteredProjects.reduce( (accumulator, { node }) => {
    accumulator[node.fieldData.Project_Year] = [...accumulator[node.fieldData.Project_Year] || [], node ];
    return accumulator;
  }, {} );

  // Extract the years for the year based navigation.
  const years = [ 'show all', ...Object.entries(projectsByYearObj).map( ( aYear ) => aYear[0] ).reverse() ];

  // Filter to a specific year if one is selected.
  if (year !== 'show all' && searchString === '') {
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
    <div className="projects">
      <input 
        className="projects-search"
        type="search" 
        placeholder="Search project/author"
        aria-label="search"
        onChange={ ({ target: { value } }) => setSearchString(value) }
      />

      <YearNav years={years} setYear={setYear} currentYear={ (searchString === '') ? year : 'show all'} />
      {Object.entries(projectsByYearObj).reverse().map(([key, projects]) => (
      <div key={key}>
        <h3 className="projects-year">{key}</h3>
        <ProjectBoxes projects={projects.reverse()} />
      </div>
      ))}
    </div>
  );
}

export default ProjectList
