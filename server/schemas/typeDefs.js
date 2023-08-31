
const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    favoriteMissions: [Mission]
  }

  type Mission {
    _id: ID!
    rocketType: String
    payload: String  
    launchDate: String
    launchLocation: String
    landingLocation: String
    status: String
    media: MissionMedia
    missionBrief: String
    missionObjective: String
    crewDetails: [String]
  }

  # Added this enum to match with MongoDB model
  #

  type MissionMedia {
    videos: [String]
    images: [String]
  }

  type Query {
    searchMission(mission: String!): Mission
    me: User
    mission(mission: String!): Mission
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User  
    addFavoriteMission(userId: ID!, missionId: ID!): User
    removeUser(userId: ID!): User
    removeFavoriteMission(userId: ID!, missionId: ID!): User
  }
`;

module.exports = typeDefs;
