// import React from "react";
// import { useQuery } from "@apollo/client";
// import Countdown from "./Countdown";

import React, { useEffect, useState } from 'react';

const UpcomingMissions = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Upcoming Missions</h1>
      <p className="countdown">Next mission in: {seconds} seconds</p>
      {/* ...more content */}
    </div>
  );
};


export default UpcomingMissions;

// const UpcomingMissions = () => {
//   const { loading, error, data } = useQuery(/* query for upcoming missions */);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error}</p>;

//   return (
//     <div>
//       <Countdown />
//       <h1>Upcoming Missions</h1>
//       {/* add code to display upcoming missions */}
//     </div>
//   );
// };

// export default UpcomingMissions;