const { Mission, User } = require('../models');

const resolvers = {
    Query: {
        // Query to fetch past missions based on criteria
        pastMissions: async (parent, { order, category }) => {
            let query = {};

            if (category === 'Most Successful') {
                query.success = true;
            } else if (category === 'Falcon 1 Missions') {
                query.rocketType = 'Falcon 1';
            } else if (category === 'Falcon 9 Missions') {
                query.rocketType = 'Falcon 9';
            }

            const missions = await Mission.find(query);

            if (order === 'chronological') {
                missions.sort(() => new Date(launchDate) - new Date(launchDate));
            }

            return missions;
        },
        // Query for detailed mission view
        missionDetails: async (parent, { missionId }) => {
            return Mission.findById(missionId);
        },
        // // Query for upcoming missions
        // upcomingMissions: async () => {
        //     return UpcomingMission.find({});
        // },
        // // Query for user's favorite missions
        // userFavorites: async (parent, { userId }) => {
        //     const favorites = await Favorite.find({ userId });
        //     const missionIds = favorites.map(fav => fav.missionId);
        //     return Mission.find({ '_id': { $in: missionIds } });
        // },
    },

    Mutation: {
        // // Mutation to add a mission to user's favorites
        // addFavorite: async (parent, { userId, missionId }) => {
        //     return Favorite.create({ userId, missionId });
        // },
        // // Mutation to remove a mission from user's favorites
        // removeFavorite: async (parent, { userId, missionId }) => {
        //     return Favorite.findOneAndDelete({ userId, missionId });
        // },
        // Mutation to create a user profile
        createUserProfile: async (parent, { userProfile }) => {
            return User.create(userProfile);
        },
    },

    // Resolvers for Mission type fields
    Mission: {
        rocket: (mission) => {
            return mission.rocketType;
        },
        payload: (mission) => {
            return mission.payload;
        },
        launchAndLanding: (mission) => {
            return {
                launchLocation: mission.launchLocation,
                landingLocation: mission.landingLocation,
            };
        },
        media: (mission) => {
            return mission.media;
        },
        status: (mission) => {
            return mission.success ? 'Success' : 'Failure';
        },
        objective: (mission) => {
            return mission.objective;
        },
        crewDetails: (mission) => {
            return mission.crew;
        },
    },
};

module.exports = resolvers 