import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MISSIONS } from "../graphql/queries";
import Countdown from "./Countdown";

const MissionLibrary = () => {
  const { loading, error, data } = useQuery(GET_MISSIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <div>
      <Countdown />
      <h1>Mission Library</h1>
      <ul>
        {data.missions.map(({ id, name, rocketType, launchDate, status }) => (
          <li key={id}>
            <Link to={`/mission/${id}`}>{name}</Link>
            <p>Rocket Type: {rocketType}</p>
            <p>Launch Date: {launchDate}</p>
            <p>Status: {status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionLibrary;
