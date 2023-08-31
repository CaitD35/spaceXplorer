
import React, { useState } from 'react';

const MissionLibrary = () => {
  const missions = ['Falcon 9', 'Mission 2', 'Mission 3'];
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = mission => {
    if (favorites.includes(mission)) {
      setFavorites(favorites.filter(fav => fav !== mission));
    } else {
      setFavorites([...favorites, mission]);
    }
  };

  const filteredMissions = missions.filter(mission =>
    mission.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Mission Library</h1>
      <input
        type="text"
        placeholder="Search missions"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredMissions.map((mission, index) => (
          <li key={index}>
            {mission}{' '}
            <button
            className={favorites.includes(mission) ? 'unfavorite' : 'favorite'}
            onClick={() => toggleFavorite(mission)}
          >
          {favorites.includes(mission) ? 'Unfavorite' : 'Favorite'}
            </button>
          </li>
        ))}
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
