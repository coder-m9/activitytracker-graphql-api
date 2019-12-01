const { gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const query = gql`

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "activites" query returns an array of zero or more Activities (defined above).
  type Query {
    activities: [Activity]
  }

  type Mutation {
    addActivity(
      name: String
      duaration: Int
      date: String
      startTime: String
      endTime: String
      rating: Int
      isFavorite: Boolean
    ): Activity
  }
`;

module.exports = {query};