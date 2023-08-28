import React from "react";
import { useQuery } from "@apollo/client";
import Countdown from "./Countdown";

const UpcomingMissions = () => {
  const { loading, error, data } = useQuery(/* query for upcoming missions */);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <div>
      <Countdown />
      <h1>Upcoming Missions</h1>
      {/* add code to display upcoming missions */}
    </div>
  );
};

export default UpcomingMissions;