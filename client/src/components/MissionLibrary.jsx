import React, { useState } from 'react';


const MissionLibrary = () => {
  const missions = [
    { 
      id: 1, 
      name: 'Falcon 1 - Maiden Flight', 
      year: 2006,
      details: 'This was the first maiden flight of Falcon 1. The launch took place on Saturday March 24th, 2006 from the Marshall Islands. It ended in failure less than a minute into the flight because of a fuel line leak and fire.',
      videoLink: 'https://youtu.be/ldXKf2AEacg?si=XzfmUqRqtzl0tVAp'
    },
    { 
      id: 2, 
      name: 'Falcon 1 - First Successful Flight', 
      year: 2008,
      details: 'This marks the first successful flight of Falcon 1. On Sunday September 28th, 2008, Falcon 1 successfully launched from the Marshall Islands. This was the fourth launch of Falcon 1 and the first successful one. Flight 4 was also the first privately developed liquid fuel rocket to reach orbit.',
      videoLink: 'https://youtu.be/UEHFQidpDcU?si=aK-V8WBHlNXXWiQ_'
    },
    {
      id: 3,
      name: 'Falcon 9 - First Flight',
      year: 2010,
      details: 'On June 4th, 2010, Falcon 9 successfully launched from Cape Canaveral. This was the first flight of Falcon 9 and the second flight of Dragon. This was also the first time a private company launched, orbited, and recovered a spacecraft',
      videoLink: 'https://youtu.be/H6hYEqrP56I?si=23RlvA93ZSpKo8cL'
    },
    {
      id: 4,
      name: 'Falcon 9 - Second Flight',
      year: 2010,
      details: 'On December 8th, 2010 was the second maiden flight of SpaceX dragon capsule. The capsule orbited the Earth twice before re-entering the atmosphere and splashing down in the Pacific Ocean. ',
      videoLink: 'https://youtu.be/cdLITgWKe_0?si=Q_iOnxJnG4DLa9jd'
    },
    {
      id: 5,
      name: 'Falcon Heavy - First Flight',
      year: 2018,
      details: 'On February 6th, 2018, Falcon Heavy successfully launched from Kennedy Space Center. This was the first flight of Falcon Heavy and the first time SpaceX landed all three boosters.',
      videoLink: 'https://www.youtube.com/live/wbSwFU6tY1c?si=8dVoJJdNTrQgdw1k'
    },
    {
      id: 6,
      name: 'Falcon 9 - First Crewed Flight',
      year: 2020,
      details: 'SpaceX Crew-1 was the first operational crewed flight of a Crew Dragon spacecraft. The mission launched on November 15th, 2020 and docked with the International Space Station the next day. The mission carried four astronauts to the ISS and returned them to Earth on May 2nd, 2021.',
      videoLink: 'https://youtu.be/PYLhLA_sv6E?si=rXT-itT9wMBZI3mV'
    },
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
    <div className = "mission-library">
      <h1>Mission Library</h1>
      <input
        className='search-bar'
        type="text"
        placeholder="Search missions"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="mission-cards">
        {filteredMissions.map(mission => (
          <div className="mission-card" key={mission.id}>
            <h3>{mission.name} ({mission.year})</h3>
            <p>{mission.details}</p>
            <a href={mission.videoLink} target="_blank" rel="noreferrer">Watch Video</a>
            <button
              className={favorites.includes(mission.name) ? 'unfavorite' : 'favorite'}
              onClick={() => toggleFavorite(mission)}
            >
              {favorites.includes(mission.name) ? '-' : '+'}
            </button>
          </div>
        ))}
      </div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite}</li>
        ))}
      </ul>
    </div>
  );
};

export default MissionLibrary;




















