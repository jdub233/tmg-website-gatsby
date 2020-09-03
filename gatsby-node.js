const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const people = await graphql(`
    query {
      allPeopleJson(filter: {fieldData: {Category: {ne: "Alumni"}}}) {
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
      path: `person/${node.fieldData.slug}`,
      component: path.resolve(`./src/templates/person.js`),
      context: { slug: node.fieldData.slug, },
    });
  });

  const projects = await graphql(`
    query {
      allProjectsJson {
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
  
  projects.data.allProjectsJson.edges.map( ({node}) => {
    createPage({
      path: `project/${node.fieldData.slug}`,
      component: path.resolve(`./src/templates/project.js`),
      context: { slug: node.fieldData.slug },
    });
  });
  
}

// Extra type definitions for fields with inconsistent values.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type EventsJson implements Node {
      fieldData: FieldData
    }
    type FieldData {
      Event_Day: String
    }
  `;

  createTypes(typeDefs);
}