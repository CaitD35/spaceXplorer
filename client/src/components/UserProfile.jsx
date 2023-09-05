import React, { useState } from 'react';


const UserProfile = () => {
  const favoriteMissions = [
    {
      id: 1,
      name: 'Falcon 1 - Maiden Flight',
      year: 2006
    },
    {
      id: 2,
      name: 'Falcon 1 - First Successful Flight',
      year: 2008
    },
  ];

  const [missionNotes, setMissionNotes] = useState({});
  const [editMissionId, setEditMissionId] = useState(null);

  const handleNoteChange = (missionId, newNote) => {
    setMissionNotes({
      ...missionNotes,
      [missionId]: newNote,
    });
  };

  const handleSaveNote = (missionId) => {
    setEditMissionId(null);
  };

  const handleDeleteNote = (missionId) => {
    const newMissionNotes = { ...missionNotes };
    delete newMissionNotes[missionId];

    setMissionNotes(newMissionNotes);
    setEditMissionId(null);
  };

  return (
    <div className= "user-profile-page">
      <h1>User Profile</h1>
      <h2>Mission History</h2>
      <ul>
        {favoriteMissions.map(mission => (
          <li key={mission.id}>
            <strong>{mission.name} ({mission.year})</strong>
            <div>
              <label htmlFor={`note-${mission.id}`}> Note: </label>
              {editMissionId === mission.id ? (
                <>
                  <input
                    id={`note-${mission.id}`}
                    type="text"
                    value={missionNotes[mission.id] || ''}
                    onChange={(e) => handleNoteChange(mission.id, e.target.value)}
                  />
                  <button className='space-button' onClick={() => handleSaveNote(mission.id)}>Save</button>
                  <button className= 'space-button' onClick={() => handleDeleteNote(mission.id)}>Delete</button>
                </>
              ) : (
                <>
                  <span>{missionNotes[mission.id] || ''}</span>
                  <button className= 'space-button' onClick={() => setEditMissionId(mission.id)}>Edit</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
