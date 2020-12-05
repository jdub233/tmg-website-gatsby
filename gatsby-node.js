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
