const { ClubType } = require("../types");
const { GraphQLObjectType } = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    club: {
      name: "Clubs",
      type: ClubType,
      resolve: (parent, args) => ({
        name: "some club",
        league: "some league",
      }),
    },
  },
});

module.exports = RootQuery;
