import React from 'react';
import Home from './components/home/home';
import Posts from './components/user/posts';
import EditPost from './components/user/edit-post';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import {AppTitle} from './App.styles.js';

class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="App">
          <AppTitle>Monsters Rolodex</AppTitle>
          <Route exact path="/" component={Home} />
          <Route path="/:userId" component={Posts} />
          <Route path="/edit-post" component={EditPost} />
        </div>
      </Router>
    )
  };
}

export default App;
