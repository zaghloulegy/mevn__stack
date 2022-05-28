const { ClubType } = require("../types");
const { GraphQLObjectType, GraphQLList } = require("graphql");
const  Club  = require("../../models/Club");




const clubs = {
  name: "Clubs",
  type: GraphQLList(ClubType),
  resolve: async (parent, args) => {
    const clubs = await Club.find();
    return clubs;
  },
};



const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    clubs
  },
});

module.exports = RootQuery;
