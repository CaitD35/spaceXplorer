import { gql } from '@apollo/client';

export const GET_MISSIONS = gql`
  query searchMission {
    missions {
      id
      rocketType
      payload
      launchDate
      launchLocation
      landingLocation
      status
      media
      missionBrief
      missionObjective
      crewDetails

    }
  }
`;

//   export const GET_MISSION_DETAIL = gql`
//   query GetMissionDetail($id: ID!) {
//     mission(id: $id) {
//       id
//       rocketType
//       payload
//       launchDate
//       launchLocation
//       landingLocation
//       status
//       media
//       missionBrief
//       missionObjective
//       crewDetails

//     }
//   }
// `;

// export const GET_NEXT_MISSION = gql`
//   query GetNextMission {
//     nextMission {
//       id
//       name
//       launchDate

//     }
//   }
// `;

export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
    favoriteMissions
  }
}`

