import React from 'react';
import './App.css';
import {AppTitle} from './App.styles.js';
import Home from './components/home/home'
import Posts from './components/user/posts'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="App">
          <AppTitle>Monsters Rolodex</AppTitle>
          <Route exact path="/" component={Home} />
          <Route path="/:userId" component={Posts} />
        </div>
      </Router>
    )
  };
}

export default App;
