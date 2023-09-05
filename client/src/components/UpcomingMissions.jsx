import React, { useEffect, useState } from 'react';

const UpcomingMissions = () => {
  const [countdown, setCountdown] = useState('');
  const [detailMission, setDetailMission] = useState('');

  
  const upcomingMissions = [
    { id: 1, name: 'Falcon 9', date: 'September 09 2023', details: 'A batch of satellites for the Starlink mega-constellation. SpaceX’s project for space-based Internet communication system.' },
    { id: 2, name: 'Starship', date: 'September 29 2023', details: 'Second test flight of the two-stage Starship launch vehicle. The booster is expected to separate 170 seconds into flight and return to land approximately 32 km off the shore in the Gulf of Mexico. The second stage will follow a suborbital trajectory and perform an unpowered splashdown approximately 100 km off the northwest coast of Kauai (Hawaii).' },
    { id: 3, name: 'Falcon Heavy', date: 'October 2023 (date tbd)', details: 'Psyche is a NASA interplanetary mission to visit the main belt asteroid of the same name, 16 Psyche. Spacecraft will take 4 years and one Mars flyby to reach the asteroid, which is of particular interest due to being comprised mostly of iron and nickel. Psyche is theorized to be a remnant of an early planet’s core, and may offer insights into how solar system formed and evolved. ' },
  ];

  const nextMission = upcomingMissions.find(mission => mission.id === 1);

  const futureDate = new Date(nextMission.date).getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = futureDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      
      setCountdown(countdownText);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className= "upcoming-missions-page">
      <h1>Upcoming Missions</h1>
      <p className="countdown">Next mission in: {countdown}</p>
      <ul>
        {upcomingMissions.map((mission) => (
          <li key={mission.id} className="upcoming">
            {mission.name} - {mission.date}
            < button className = "details-button" onClick={() => setDetailMission(mission.id)}></button>
            {detailMission === mission.id && <p className = "mission-details">{mission.details}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingMissions;
