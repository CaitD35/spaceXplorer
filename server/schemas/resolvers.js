const Mission = require('../models/Mission');
const User = require('../models/User');

const resolvers = {
  Query: {
   searchMission: async (parent, { mission}) => {
    return await Mission.findOne({ name: mission });
    },
    me: async (parent, args, context) => {
      const userID = context.user._id;
      return await User.findById(userID);
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const newUser = new User(args);
      return await newUser.save();
    },

    addFavoriteMission: async (parent, { userID, missionID }) => {
      return await User.findOneAndUpdate(
        { _id: userID },
        { $addToSet: { favoriteMissions: missionID } },
        { new: true }
      );
    },
    
    removeFavoriteMission: async (parent, { userID, missionID }) => {
      return await User.findOneAndUpdate(
        { _id: userID },
        { $pull: { favoriteMissions: missionID } },
        { new: true }
      );
    }
  }
};

module.exports = resolvers;