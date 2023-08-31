import React from "react";
// import { Link } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { GET_MISSIONS } from "../graphql/queries";


const MissionLibrary = () => {
  return (
    <div>
      <h1>Mission Library</h1>
      <ul>
        <li>
          <a href="/mission/1">Mission 1</a>
        </li>
        <li>
          <a href="/mission/2">Mission 2</a>
        </li>
        <li>
          <a href="/mission/3">Mission 3</a>
        </li>
        <li>
          <a href="/mission/4">Mission 4</a>
        </li>
        <li>
          <a href="/mission/5">Mission 5</a>
        </li>
        <li>
          <a href="/mission/6">Mission 6</a>
        </li>

      </ul>
    </div>
  );
};

export default MissionLibrary;


// const MissionLibrary = () => {
//   const { loading, error, data } = useQuery(GET_MISSIONS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (!data || !data.missions) return <p>No data available</p>;

//   return (
//     <div>
//       <h1>Mission Library</h1>
//       <ul>
//         {data.missions.map(({ id, name, rocketType, launchDate, status }) => (
//           <li key={id}>
//             <Link to={`/mission/${id}`}>{name}</Link>
//             <p>Rocket Type: {rocketType}</p>
//             <p>Launch Date: {launchDate}</p>
//             <p>Status: {status}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MissionLibrary;
