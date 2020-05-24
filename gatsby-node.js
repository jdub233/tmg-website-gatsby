const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const people = await graphql(`
    query {
      allPeopleJson {
        edges {
          node {
            fieldData {
              slug
            }
          }
        }
      }
    }
  `);

  people.data.allPeopleJson.edges.map( ({ node }) => {
    createPage({
      path: `people/${node.fieldData.slug}`,
      component: path.resolve(`./src/templates/person.js`),
      context: { slug: node.fieldData.slug, },
    });
  });
}