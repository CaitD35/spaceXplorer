import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MISSIONS } from "../graphql/queries";


const MissionLibrary = () => {
  const { loading, error, data } = useQuery(GET_MISSIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Mission Library</h1>
      <ul>
        {data.missions.map(({ id, name, rocketType, launchDate, status }) => (
          <li key={id}>
            <h3>{name}</h3>
            <p>Rocket Type: {rocketType}</p>
            <p>Launch Date: {launchDate}</p>
            <p>Status: {status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MissionLibrary;