const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    favoriteMissions: [Mission!]!
  }

  type Mission {
    _id: ID!
    rocketType: String!
    payload: String!  
    launchDate: String!
    launchLocation: String!
    landingLocation: String!
    status: Status! 
    media: MissionMedia
    missionBrief: String
    missionObjective: String
    crewDetails: [String]
  }

  # Added this enum to match with MongoDB model
  enum Status {
    Success
    Failure
    Pending
  }

  type MissionMedia {
    videos: [String]
    images: [String]
  }

  type Query {
    searchMission(mission: String!): Mission
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User  # Added 'email'
    addFavoriteMission(userId: ID!, missionId: ID!): User
    removeUser(userId: ID!): User
    removeFavoriteMission(userId: ID!, missionId: ID!): User
  }
`;

module.exports = typeDefs;
