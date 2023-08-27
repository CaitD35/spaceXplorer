import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/missions" exact component={MissionLibrary} />
      <Route path="/mission/:missionId" component={MissionDetail} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
