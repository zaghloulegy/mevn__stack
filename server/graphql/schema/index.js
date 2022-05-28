const { ClubType } = require("../types");
const { GraphQLObjectType, GraphQLList, GraphQLID } = require("graphql");
const  Club  = require("../../models/Club");




const clubs = {
  name: "Clubs",
  type: GraphQLList(ClubType),
  resolve: async (parent, args) => {
    const clubs = await Club.find();
    return clubs;
  },
};


const singleClub = {
  name: "singleClub",
  type: ClubType,
  args: { id: { type: GraphQLID }},
  resolve: async (parent, args) => {
    const club = await Club.findById(args.id);
    return club;
  },
};



const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    clubs,
    singleClub
  },
});

module.exports = RootQuery;
