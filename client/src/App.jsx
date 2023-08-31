import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MissionLibrary from './components/MissionLibrary';
import DetailedMission from './components/DetailedMission';
import UpcomingMission from './components/UpcomingMissions';
import UserProfile from './components/UserProfile';
import NavBar from './components/NavBar';
import MissionDetail from './components/MissionDetail';
import Countdown from './components/Countdown';
import './App.css';



const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>SpaceXplorer</h1>
          <Countdown />
          <NavBar />
          
          
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MissionLibrary />} />
            <Route path="/mission/:id" element={<DetailedMission />} />
            <Route path="/upcoming" element={<UpcomingMission />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/missiondetail/:id" element={<MissionDetail />} />
          
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
