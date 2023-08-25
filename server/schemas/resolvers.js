const Mission = require('../models/Mission');
const User = require('../models/User');

const resolvers = {
  Query: {
    missions: async () => {
      return await Mission.find({});
    },
    mission: async (parent, args) => {
      return await Mission.findById(args.id);
    },
    user: async (parent, args) => {
      return await User.findById(args.id);
    },
  },
  Mutation: {
    addMission: async (parent, args) => {
      const newMission = new Mission(args);
      return await newMission.save();
    },
    addUser: async (parent, args) => {
      const newUser = new User(args);
      return await newUser.save();
    },
  },
};

module.exports = resolvers;
