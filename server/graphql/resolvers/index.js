const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const { ClubType } = require("../types");
const  Club  = require("../../models/Club");


const addClub = {
      name: "addClub",
      type: ClubType,
      args: { name: { type: GraphQLString }, league: { type: GraphQLString } },
      resolve: async (parent, args) => {
        const club = new Club({ name: args.name, league: args.league });
        const newClub = await club.save();
        return newClub;
      },
    }


    const deleteClub = {
      name: "deleteClub",
      type: ClubType,
      args: { id: { type: GraphQLString }},
      resolve: async (parent, args) => {
        const deleteClub = await Club.findByIdAndRemove(args.id);
      
        return deleteClub;
      },
    };


    const updateClub = {
      name: "updateClub",
      type: ClubType,
      args: { id: { type: GraphQLString }, name: { type: GraphQLString }, league: { type: GraphQLString } },
      resolve: async (parent, args) => {
        const updateClub = await Club.findByIdAndUpdate(args.id, { name: args.name, league: args.league });

        return updateClub;
      },
    };








const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    addClub,
    deleteClub,
    updateClub
  },
});

module.exports = RootMutation;