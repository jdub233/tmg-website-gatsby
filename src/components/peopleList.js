import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import "./peopleList.scss";

const PeopleListItem = ({ node: { id, fieldData } }) => (
  <div className="person" key={id} >
    <Link to={`/people/${fieldData.slug}`}>
      <img src={`${process.env.MEDIA_LIBRARY}/${fieldData.cBadgeRawURL}?width=140`} />
    </Link>
    <div className="description">
      <Link to={`/people/${fieldData.slug}`}>
        <h4>{fieldData.Full_Name}</h4>
      </Link>
      <div>{fieldData.Category}</div>
      <div>{fieldData.SubCategory}</div>
    </div>
  </div>
);

const AlumniListItem = ({ node: { id, fieldData } }) => (
  <div className="alumnus" key={id}>
    <img src={`${process.env.MEDIA_LIBRARY}/${fieldData.cBadgeRawURL}?width=60`} />
    <h4>{fieldData.Full_Name}</h4>
  </div>
);

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
              SubCategory
            }
          }
        }
      }
    }
  `}
    render={({ allPeopleJson: {edges} }) => {
      const prof     = edges.filter(({ node }) => node.fieldData.Category === 'Professor');
      const phds     = edges.filter(({ node }) => node.fieldData.Category === 'Ph.D. Candidate');
      const masters  = edges.filter(({ node }) => node.fieldData.Category === 'M.S. Candidate');
      const visitingScientist = edges.filter(({ node }) => node.fieldData.Category === 'Visiting Scientist');
      const admin    = edges.filter(({ node }) => node.fieldData.Category === 'Administrative Assistant');
      const affiliate = edges.filter(({ node }) => node.fieldData.Category === 'Research Affiliate');
      const collab = edges.filter(({ node }) => node.fieldData.Category === 'Collaborator');
      const visitingStudent = edges.filter(({ node }) => node.fieldData.Category === 'Visiting Student');
      const alumni = edges.filter(({ node }) => node.fieldData.Category === 'Alumni');

      return(
        <div>
          <h3>Professor</h3>
          <div className="people-list">
            {prof.map(({ node }) => (
              <PeopleListItem node={node} />
            ))}
          </div>

          <h3>Ph.D. Candidates</h3>
          <div className="people-list">
            {phds.map( ({ node }) => (
              <PeopleListItem node={node} />
            ))}
          </div>

          <h3>M.S. Candidates</h3>
          <div className="people-list">
            {masters.map(({ node }) => (
              <PeopleListItem node={node} />
            ))}
          </div>

          <h3>Visiting Scientists</h3>
          <div className="people-list">
            {visitingScientist.map(({ node }) => (
              <PeopleListItem node={node} />
            ))}
          </div>

          <h3>Administrative Assistant</h3>
          <div className="people-list">
            {admin.map(({ node }) => (
              <PeopleListItem node={node} />
            ))}
          </div>

          <h3>Research Affiliate</h3>
          <div className="people-list">
            {affiliate.map(({ node }) => (
              <PeopleListItem node={node} />
            ))}
          </div>

          <h3>Collaborator</h3>
          <div className="people-list">
            {collab.map(({ node }) => (
              <PeopleListItem node={node} />
          ))}
          </div>

          <h3>Visiting Student</h3>
          <div className="people-list">
            {visitingStudent.map(({ node }) => (
              <PeopleListItem node={node} />
            ))}
          </div>

          <h3>Alumni</h3>
          <div className="alumni-list">
            {alumni.map(({ node }) => (
              <AlumniListItem node={node} />
            ))}
          </div>

        </div>
    );}}
  ></StaticQuery>
)

export default PeopleList

