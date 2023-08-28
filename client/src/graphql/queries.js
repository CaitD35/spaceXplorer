import { gql } from '@apollo/client';

export const GET_MISSIONS = gql`
  query GetMissions {
    missions {
      id
      name
      rocketType
      launchDate
      status

    }
  }
`;

  export const GET_MISSION_DETAIL = gql`
  query GetMissionDetail($id: ID!) {
    mission(id: $id) {
      id
      name
      rocketType
      launchDate
      launchLocation
      landingLocation
      status
      images
      videos
      objective
      crewDetails 

    }
  }
`;

export const GET_NEXT_MISSION = gql`
  query GetNextMission {
    nextMission {
      id
      name
      launchDate

    }
  }
`;


