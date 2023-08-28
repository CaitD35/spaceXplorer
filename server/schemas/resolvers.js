const Mission = require('../models/Mission');
const User = require('../models/User');

const resolvers = {
  Query: {
    searchMission: async (_, { mission }) => {
      const foundMission = await Mission.findOne({ name: mission });
      if (!foundMission) throw new Error('Mission not found');
      return foundMission;
    },
    me: async (_, __, { user }) => {
      if (!user) throw new Error('You are not authenticated');
      return await User.findById(user._id);
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      // Hashing function needs to be implemented
      const newUser = new User({ username, email, password });
      return await newUser.save();
    },
    addFavoriteMission: async (_, { userID, missionID }) => {
      const updatedUser = await User.findByIdAndUpdate(
        userID,
        { $addToSet: { favoriteMissions: missionID } },
        { new: true }
      );
      if (!updatedUser) throw new Error('User not found');
      return updatedUser;
    },
    removeFavoriteMission: async (_, { userID, missionID }) => {
      const updatedUser = await User.findByIdAndUpdate(
        userID,
        { $pull: { favoriteMissions: missionID } },
        { new: true }
      );
      if (!updatedUser) throw new Error('User not found');
      return updatedUser;
    }
  }
};

module.exports = resolvers;
