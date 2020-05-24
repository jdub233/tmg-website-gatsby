import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const PeopleListItem = (props) => (
  <div key={props.node.id} >
    <Link to={`/people/${props.node.fieldData.slug}`}>
      {props.node.fieldData.Full_Name}
    </Link>
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
          <h4>Professor</h4>
          {prof.map(({ node }) => (
            <PeopleListItem node={node} />
          ))}
          <h4>Ph.D. Candidates</h4>
          {phds.map( ({ node }) => (
            <PeopleListItem node={node} />
          ))}
          <h4>M.S. Candidates</h4>
          {masters.map(({ node }) => (
            <PeopleListItem node={node} />
          ))}
          <h4>Visiting Scientists</h4>
          {visitingScientist.map(({ node }) => (
            <PeopleListItem node={node} />
          ))}
          <h4>Administrative Assistant</h4>
          {admin.map(({ node }) => (
            <PeopleListItem node={node} />
          ))}
          <h4>Research Affiliate</h4>
          {affiliate.map(({ node }) => (
            <PeopleListItem node={node} />
          ))}
          <h4>Collaborator</h4>
          {collab.map(({ node }) => (
            <PeopleListItem node={node} />
          ))}
          <h4>Visiting Student</h4>
          {visitingStudent.map(({ node }) => (
            <PeopleListItem node={node} />
          ))}
          <h4>Alumni</h4>
          {alumni.map(({ node }) => (
            <PeopleListItem node={node} />
          ))}

        </div>
    );}}
  ></StaticQuery>
)

export default PeopleList

