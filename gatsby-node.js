const path = require('path');

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

  people.data.allPeopleJson.edges.map(({ node }) => {
    createPage({
      path: `person/${node.fieldData.slug}`,
      component: path.resolve('./src/templates/person.js'),
      context: { slug: node.fieldData.slug },
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

  projects.data.allProjectsJson.edges.map(({ node }) => {
    createPage({
      path: `project/${node.fieldData.slug}`,
      component: path.resolve('./src/templates/project.js'),
      context: { slug: node.fieldData.slug },
    });
  });

  const events = await graphql(`
    query {
      allEventsJson {
        edges {
          node {
            recordId
          }
        }
      }
    }
  `);

  events.data.allEventsJson.edges.map(({ node }) => {
    createPage({
      path: `event/${node.recordId}`,
      component: path.resolve('./src/templates/event.js'),
      context: { recordId: node.recordId },
    });
  });
};

// Extra type definitions for fields with inconsistent values.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type EventsJson implements Node {
      fieldData: FieldData
    }
    type FieldData {
      Event_Day: Int
    }
  `;

  createTypes(typeDefs);
};
