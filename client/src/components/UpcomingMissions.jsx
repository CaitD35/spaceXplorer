import React, { useEffect, useState } from 'react';

const UpcomingMissions = () => {
  const [countdown, setCountdown] = useState('');
  const [detailMission, setDetailMission] = useState('');
  const futureDate = new Date('December 31, 2024 00:00:00').getTime();
  
  const upcomingMissions = [
    { id: 1, name: 'Starship - First Orbital Flight', date: '2024-01-01', details: 'First orbital flight of Starship' },
    { id: 2, name: 'Dragon Resupply Mission', date: '2024-02-15', details: 'Resupply the ISS' },
    { id: 3, name: 'Crewed Moon Landing', date: '2024-12-31', details: 'First crewed mission to the moon since Apollo 17' },
    // ... add more missions here
  ];

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
    <div>
      <h1>Upcoming Missions</h1>
      <p className="countdown">Next mission in: {countdown}</p>
      <ul>
        {upcomingMissions.map((mission) => (
          <li key={mission.id} className="upcoming">
            {mission.name} - {mission.date}
            < button className = "details-button" onClick={() => setDetailMission(mission.id)}></button>
            {detailMission === mission.id && <p>{mission.details}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingMissions;
