import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MissionLibrary from './components/MissionLibrary';
import DetailedMission from './components/DetailedMission';
import UpcomingMission from './components/UpcomingMissions';
import UserProfile from './components/UserProfile';
import NavBar from './components/NavBar'



const App = () => {
  return (
    < Router>
    <div>
      <header>
        <h1>SpaceXplorer</h1>
       <NavBar />
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={MissionLibrary} />
          <Route path="/mission/:id" component={DetailedMission} />
          <Route path="/upcoming" component={UpcomingMission} />
          <Route path="/profile" component={UserProfile} />
        </Switch>
      </main>
    </div>
    </Router>
  );
};

export default App;
