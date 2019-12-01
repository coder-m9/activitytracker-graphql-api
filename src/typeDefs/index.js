const {query} = require('./query');
const {activityType} = require('./types');

const typeDefs = [query,activityType];

module.exports = {typeDefs};