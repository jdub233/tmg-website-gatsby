import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import './peopleList.scss';

const categories = [
  'Professor',
  'Ph.D. Candidate',
  'M.S. Candidate',
  'Visiting Scientist',
  'Administrative Assistant',
  'Research Affiliate',
  'Collaborator',
  'Visiting Student',
];

const CategoryList = ({ category, people }) => (
  <div>
    <h3 className="category-title">{category}</h3>
    <div className="people-list">
      {people.map(({ node }) => (
        <PeopleListItem key={node.id} node={node} />
      ))}
    </div>
  </div>
);

CategoryList.propTypes = {
  category: PropTypes.string.isRequired,
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const PeopleListItem = ({
  node: {
    fieldData: {
      slug, Full_Name, cBadgeRawURL, CategoryOverride, Category, SubCategory,
    },
  },
}) => (
    <div className="person">
      <Link to={`/person/${slug}`}>
        <img alt={Full_Name} src={`${process.env.GATSBY_MEDIA_LIBRARY}/${cBadgeRawURL}?width=140`} />
      </Link>
      <div className="description">
        <Link to={`/person/${slug}`}>
          <h4>{Full_Name}</h4>
        </Link>
        {(Category === 'Professor')
          && <div dangerouslySetInnerHTML={{ __html: CategoryOverride }} />}

        {(Category !== 'Professor')
          && <div>{Category}</div>}
        {(Category !== 'Professor')
          && <div>{SubCategory}</div>}

      </div>
    </div>
  );

const AlumniListItem = ({ node: { fieldData: { slug, Full_Name, cBadgeRawURL, SubCategory } } }) => (
  <div className="alumnus">
    <Link to={`/person/${slug}`}>
      <img alt={Full_Name} src={`${process.env.GATSBY_MEDIA_LIBRARY}/${cBadgeRawURL}?width=60`} />
    </Link>
    <div className="alumnus-details">
      <Link to={`/person/${slug}`}>
        <h4>{Full_Name}</h4>
      </Link>
      <div className="subcategory">{SubCategory}</div>
    </div>
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
                CategoryOverride
              }
            }
          }
        }
      }
    `}
    render={({ allPeopleJson: { edges } }) => {
      const alumni = edges.filter(({ node: { fieldData: { Category } } }) => Category === 'Alumni');
      const categorized = categories.map((category) => edges.filter(({ node: { fieldData: { Category } } }) => Category === category));

      return (
        <div className="people">
          <div className="temp-spacer">&nbsp;</div>
          {categories.map((category, index) => (
            <CategoryList
              key={category}
              category={category}
              people={categorized[index]}
            />
          ))}

          <h3>Alumni</h3>
          <div className="alumni-list">
            {alumni.reverse().map(({ node }) => (
              <AlumniListItem key={node.id} node={node} />
            ))}
          </div>

        </div>
      );
    }}
  />
);

export default PeopleList;
