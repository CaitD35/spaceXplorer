const typeDefs = `
type User {
    _id: ID
    username: String
    password: String
    favoriteMissions: [Mission!]!
}

type Mission {
    _id: ID!
    rocketType: String!
    missionPayload: String!
    launchDate: String!
    launchLocation: String!
    landingLocation: String!
    status: String!
    media: MissionMedia
    missionBrief: String
    missionObjective: String
    crewDetails: [String]
}

type MissionMedia {
    videos: [String]
    images: [String]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    searchMission(mission: String!): Mission
    me: User
}

type Mutation {
    addUser(username: String!, password: String!): User
    addFavoriteMission(userId: ID!, missionId: ID!): User
    removeUser(userId: ID!): User
    removeFavoriteMission(userId: ID!, missionId: ID!): User
}
`;

module.exports = typeDefs;