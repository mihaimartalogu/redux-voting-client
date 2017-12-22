import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import {VotingContainer} from './Voting';  // react-redux wrapped version of the Voting pure component!
import {ResultsContainer} from './Results';  // react-redux wrapped version

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path="/" exact={true} component={VotingContainer} />
        <Route path="/results" exact={true} component={ResultsContainer} />
      </div>
    );
  }
}
