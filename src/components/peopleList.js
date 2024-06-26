import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import slugify from '@sindresorhus/slugify';

import './peopleList.scss';

const categories = [
  'Professor',
  'Postdoctoral Associate',
  'Postdoctoral Fellow',
  'Ph.D. Candidate',
  'M.S. Candidate',
  'Visiting Scientist',
  'Visiting Professor',
  'Administrative Assistant',
  'Research Affiliate',
  'Collaborator',
  'Visiting Student',
];

function CategoryList({ category, people }) {
  return (
    <div>
      { people.length > 0
        && <h3 className="category-title">{category}</h3>}
      <div className="people-list">
        {people.map(({ node }) => (
          <PeopleListItem key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
}

CategoryList.propTypes = {
  category: PropTypes.string.isRequired,
  people: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

function PeopleListItem({
  node: {
    fieldData: {
      slug, FullName, cBadgeRawURL, CategoryOverride, Category, SubCategory,
    },
  },
}) {
  return (
    <div className="person">
      <Link to={`/person/${slugify(slug)}`}>
        <img alt={FullName} src={`${process.env.GATSBY_MEDIA_LIBRARY}/${cBadgeRawURL}?width=140`} />
      </Link>
      <div className="description">
        <Link to={`/person/${slugify(slug)}`}>
          <h4>{FullName}</h4>
        </Link>
        {(Category === 'Professor')
          // The Professor category requires rendering tags from inside the field contents.
          // eslint-disable-next-line react/no-danger
          && <div dangerouslySetInnerHTML={{ __html: CategoryOverride }} />}

        {(Category !== 'Professor' && Category !== 'Visiting Professor')
          && <div>{Category}</div>}
        {(Category !== 'Professor')
          && <div>{SubCategory}</div>}

      </div>
    </div>
  );
}

PeopleListItem.propTypes = {
  node: PropTypes.shape({
    fieldData: PropTypes.shape().isRequired,
  }).isRequired,
};

function AlumniListItem({
  node: {
    fieldData: {
      slug, FullName, cBadgeRawURL, SubCategory,
    },
  },
}) {
  return (
    <div className="alumnus">
      <Link to={`/person/${slugify(slug)}`}>
        <img alt={FullName} src={`${process.env.GATSBY_MEDIA_LIBRARY}/${cBadgeRawURL}?width=60`} />
      </Link>
      <div className="alumnus-details">
        <Link to={`/person/${slugify(slug)}`}>
          <h4>{FullName}</h4>
        </Link>
        <div className="subcategory">{SubCategory}</div>
      </div>
    </div>
  );
}

AlumniListItem.propTypes = {
  node: PropTypes.shape().isRequired,
};

function PeopleList() {
  return (
    <StaticQuery
      query={graphql`
      {
        allPeopleJson {
          edges {
            node {
              id
              fieldData {
                slug
                FullName: Full_Name
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
        // Assemble people by categories.
        const categorized = categories.map((category) => (
          edges.filter(({ node: { fieldData: { Category } } }) => Category === category)));

        // Alumni are rendered separately.
        const alumni = edges.filter(({ node: { fieldData: { Category } } }) => Category === 'Alumni');

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
}

export default PeopleList;
