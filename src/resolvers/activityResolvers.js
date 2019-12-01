const {activities} = require('../models')

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves activity from the "activities" array above.

let idCount = activities.length;
const activityResolvers = {
    Query: {
      activities: () => activities
    },
    Mutation: {
      addActivity: (parent, args) => {
        const activity = {
          id: `${idCount++}`,
          name: args.name,
          duration: args.duaration,
          date: args.date,
          startTime: args.startTime,
          endTime: args.endTime
        };
        activities.push(activity);
        return activity;
      }
    }
  };

  module.exports = {activityResolvers};
  