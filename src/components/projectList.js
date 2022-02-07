import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import NavBar from './filters/navBar';
import ProjectBox from './shared/projectBox';

import './projectList.scss';

function ProjectList() {
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
              ProjectYear: Project_Year
              cBadgeRawURL
              Members
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
    filteredProjects = projects.filter(({ node: { fieldData: { Name, Members } } }) => (
      Name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
      || Members.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
    ));
  } else {
    filteredProjects = projects;
  }

  let projectsByYearObj = filteredProjects.reduce((accumulator, { node }) => {
    const { fieldData: { ProjectYear } } = node;

    accumulator[ProjectYear] = [...accumulator[ProjectYear] || [], node];
    return accumulator;
  }, {});

  // Extract the years for the year based navigation.
  const years = ['show all', ...Object.entries(projectsByYearObj).map((aYear) => aYear[0]).reverse()];

  // Filter to a specific year if one is selected.
  if (year !== 'show all' && searchString === '') {
    const filteredYear = Object.entries(projectsByYearObj).filter(
      (aYear) => aYear[0] === year,
    );
    // Wraps the filtered results in an object to match the full result object.
    // Seems like there ought to be an easier way, but this is at least effective.
    projectsByYearObj = {
      [filteredYear[0][0]]: filteredYear[0][1],
    };
  }

  return (
    <div className="projects">
      <input
        className="projects-search"
        type="search"
        placeholder="Search project/author"
        aria-label="search"
        onChange={({ target: { value } }) => setSearchString(value)}
      />

      <NavBar elements={years} setElement={setYear} currentElement={(searchString === '') ? year : 'show all'} />
      {Object.entries(projectsByYearObj).reverse().map(([key, items]) => (
        <div key={key}>
          <h3 className="projects-year">{key}</h3>
          <div className="projects-items">
            {items.reverse().map((item) => <ProjectBox key={item.id} node={item} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
