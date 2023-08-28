import { useParams } from 'react-router-dom';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MISSION_DETAIL } from '../graphql/queries';

const MissionDetail = () => {
  const { missionId } = useParams();
  const { loading, error, data } = useQuery(GET_MISSION_DETAIL, {
    variables: { id: missionId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { name, rocketType, missionPayload, launchDate, launchLocation, landingLocation, status, images, videos, objective, crewDetails } = data.mission;

  return (
    <div>
      <h2>{name}</h2>
      <p>Rocket Type: {rocketType}</p>
      <p>Mission Payload: {missionPayload}</p>
      <p>Launch Date: {launchDate}</p>
      <p>Launch Location: {launchLocation}</p>
      <p>Landing Location: {landingLocation}</p>
      <p>Status: {status}</p>
      <p>Objective: {objective}</p>
      <p>Crew Details: {crewDetails}</p>
      {/* Add images and videos here */}
    </div>
  );
};

export default MissionDetail;
