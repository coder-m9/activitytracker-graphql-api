const { gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const activityType = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Activity {
    id: ID!
    name: String!
    duaration: Int!
    date: String!
    startTime: String
    endTime: String       
    rating: Int
    isFavorite: Boolean
  }  
`;

module.exports = { activityType}