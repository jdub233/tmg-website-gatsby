import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import "./peopleList.scss";

const categories = [
  'Professor',
  'Ph.D. Candidate',
  'M.S. Candidate',
  'Visiting Scientist',
  'Administrative Assistant',
  'Research Affiliate',
  'Collaborator',
  'Visiting Student',
  //'Alumni', //handle alumni separately
];


const CategoryList = ( {category, people} ) => (
  <div>
    <h3>{category}</h3>
    <div className="people-list">
      {people.map(({ node }) => (
        <PeopleListItem node={node} />
      ))}
    </div>
  </div>
)


const PeopleListItem = ({ node: { id, fieldData } }) => (
  <div className="person" key={id} >
    <Link to={`/person/${fieldData.slug}`}>
      <img alt={fieldData.Full_Name} src={`${process.env.MEDIA_LIBRARY}/${fieldData.cBadgeRawURL}?width=140`} />
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
    <img alt={fieldData.Full_Name} src={`${process.env.MEDIA_LIBRARY}/${fieldData.cBadgeRawURL}?width=60`} />
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

      const alumni = edges.filter(({ node }) => node.fieldData.Category === 'Alumni');
      const categorized = categories.map((category) => edges.filter(({ node }) => node.fieldData.Category === category ));

      return(
        <div>
          {categories.map( (category, index) => <CategoryList category={category} people={categorized[index]} /> )}

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

