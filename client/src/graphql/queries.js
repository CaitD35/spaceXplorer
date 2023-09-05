import { gql } from '@apollo/client';

export const QUERY_MISSIONS = gql`
  query Mission {
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

  export const QUERY_MISSION_DETAIL = gql`
  query MissionDetail($id: ID!) {
    mission(id: $id) {
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

export const QUERY_NEXT_MISSION = gql`
  query NextMission {
    nextMission {
      id
      name
      launchDate

    }
  }
`;

export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
    favoriteMissions
  }
}`

