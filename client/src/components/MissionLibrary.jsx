import React, { useState } from 'react';

const MissionLibrary = () => {
  const missions = [
    { id: 1, name: 'Falcon 1 - Maiden Flight', year: 2006 },
    { id: 2, name: 'Falcon 1 - First Successful Flight', year: 2008 },
    { id: 3, name: 'Falcon 9 - Maiden Flight', year: 2010 },
    // ... add more missions here
  ];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = mission => {
    if (favorites.includes(mission.name)) {
      setFavorites(favorites.filter(fav => fav !== mission.name));
    } else {
      setFavorites([...favorites, mission.name]);
    }
  };

  const filteredMissions = missions.filter(mission =>
    mission.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredMissions.map(mission => (
          <li key={mission.id}>
            {mission.name} ({mission.year}){' '}
            <button
              className={favorites.includes(mission.name) ? 'unfavorite' : 'favorite'}
              onClick={() => toggleFavorite(mission)}
            >
              {favorites.includes(mission.name) ? 'Unfavorite' : 'Favorite'}
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
