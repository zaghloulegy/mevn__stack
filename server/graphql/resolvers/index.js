const { GraphQLObjectType, GraphQLString } = require("graphql");
const { ClubType } = require("../types");


const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    addClub: {
      name: "addClub",
      type: ClubType,
      args: { name: { type: GraphQLString }, league: { type: GraphQLString } },
      resolve: (parent, args) => {
        return {
          name: args.name,
          league: args.league,
        };
      },
    },
  },
});

module.exports = RootMutation;