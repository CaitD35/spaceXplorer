import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MissionLibrary from './components/MissionLibrary';
import DetailedMission from './components/DetailedMission';
import UpcomingMission from './components/UpcomingMissions';
import UserProfile from './components/UserProfile';
import NavBar from './components/NavBar'
import MissionDetail from './components/MissionDetail';
import Countdown from './components/Countdown';



const App = () => {
  return (
    < Router>
    <div>
      <header>
        <h1>SpaceXplorer</h1>
        <Countdown />
       <NavBar />
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={MissionLibrary} />
          <Route path="/mission/:id" component={DetailedMission} />
          <Route path="/upcoming" component={UpcomingMission} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/missiondetail/:id" component={MissionDetail} />
        </Switch>
      </main>
    </div>
    </Router>
  );
};

export default App;
